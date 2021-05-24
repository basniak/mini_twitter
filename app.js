const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
// const db = require("./banco/querys");
var cors = require("cors");
const {
  getUsers,
  createUser,
  updateUser,
} = require("./controler/userControler");
const {
  getPosts,
  getPostsByIdUser,
  createPosts,
} = require("./controler/postControler");
const {
  decodeFirebaseIdToken,
  isAuthorized,
} = require("./middleware/auth.middleware");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API 🐱‍🏍" });
});

app.get("/users", decodeFirebaseIdToken, isAuthorized, getUsers);
// app.get("/users/:id", getUserById);
app.post("/users", createUser);
// app.put("/users/:id", updateUser);
// app.delete("/users/:id", deleteUser);

/**
 * Agora as postagens
 */
app.get("/posts", decodeFirebaseIdToken, isAuthorized, getPosts);
// app.get("/posts/:id",decodeFirebaseIdToken, isAuthorized,  getPostsByIdUser);
app.post("/posts", decodeFirebaseIdToken, isAuthorized, createPosts);

app.listen(port, () => {
  console.log(`App running on port ${port} 🐱‍🏍.`);
  console.log(`http://localhost:${port}`);
  console.log(`http://localhost:${port}/users`);
  console.log(`http://localhost:${port}/users/01`);
  console.log(`http://localhost:${port}/posts`);
  console.log(`http://localhost:${port}/posts/01`);
});

module.exports = { app };
