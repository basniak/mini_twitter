const { pool } = require("../banco/database");

const getPosts = (request, response) => {
  pool.query(
    "SELECT users.*, posts.* FROM posts inner join users on (users.id = posts.user_id)  ORDER BY posts.createdat ASC",
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

exports.getPostsByIdUser = getPostsByIdUser;
exports.getPosts = getPosts;
