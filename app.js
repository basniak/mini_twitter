const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./banco/querys");
var cors = require("cors");

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

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

/**
 * Agora as postagens
 */
app.get("/posts", db.getPosts);
app.get("/posts/:id", db.getPostsByIdUser);

app.listen(port, () => {
  console.log(`App running on port ${port} 🐱‍🏍.`);
  console.log(`http://localhost:${port}`);
  console.log(`http://localhost:${port}/users`);
  console.log(`http://localhost:${port}/users/01`);
  console.log(`http://localhost:${port}/posts`);
  console.log(`http://localhost:${port}/posts/01`);
});
