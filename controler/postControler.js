const { pool } = require("../banco/database");

const getPosts = (request, response) => {
  pool.query(
    "SELECT users.*, posts.* FROM posts inner join users on (users.id = posts.user_id)  ORDER BY posts.createdat DESC",
    (error, results) => {
      if (error) {
        // throw error;
        response.status(500).json(error);
      }
      response.status(200).json(results.rows);
    }
  );
};

const getPostsByIdUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM posts WHERE user_id = $1",
    [id],
    (error, results) => {
      if (error) {
        // throw error;
        response.status(500).json(error);
      }
      response.status(200).json(results.rows);
    }
  );
};
const getPostsByUID = async (uid) => {
  // const id = parseInt(request.params.id);

  return pool.query("SELECT * FROM users WHERE uid like $1", [uid]);
};
const createPosts = (request, response) => {
  const { tweet } = request.body;
  getPostsByUID(request.user.uid)
    .then((user) => {
      if (user.rows.length) {
        let id = user.rows[0].id;
        pool.query(
          "INSERT INTO posts (user_id, tweet) VALUES ($1, $2)",
          [id, tweet],
          (error, results) => {
            if (error) {
              // throw error;
              response.status(500).json(error);
            } else if (results) {
              response.status(200).json({ message: `Post CRiADO: ${id}` });
            }
          }
        );
      } else {
        response.status(500).json({ message: "Usuario não encontrado" });
      }
    })
    .catch((er) => {
      response.status(500).json(er);
    });
};
exports.createPosts = createPosts;
exports.getPostsByIdUser = getPostsByIdUser;
exports.getPosts = getPosts;
