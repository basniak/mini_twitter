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
const { getPosts, getPostsByIdUser } = require("./controler/postControler");

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

app.get("/users", getUsers);
// app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
// app.delete("/users/:id", deleteUser);

/**
 * Agora as postagens
 */
app.get("/posts", getPosts);
app.get("/posts/:id", getPostsByIdUser);

app.listen(port, () => {
  console.log(`App running on port ${port} 🐱‍🏍.`);
  console.log(`http://localhost:${port}`);
  console.log(`http://localhost:${port}/users`);
  console.log(`http://localhost:${port}/users/01`);
  console.log(`http://localhost:${port}/posts`);
  console.log(`http://localhost:${port}/posts/01`);
});

module.exports = { app };
