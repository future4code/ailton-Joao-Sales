import express from "express";
import cors from "cors";
import { post, posts, user, users } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("endpoint que aponta para a URL Base");
});

app.get("/users", (request, response) => {
  response.send(users);
});

app.get("/posts", (request, response) => {
  response.send(posts);
});

app.get("/posts/:userId", (request, response) => {
  const userId = request.params.userId;

  const acharPosts: post[] = posts.filter((user) => {
    return user.userId === Number(userId);
  });
  response.send(acharPosts);
});

app.delete("/posts/:id", (request, response) => {
  const postId = request.params.id;

  const deletePost: post[] = posts.filter((delPost) => {
    return delPost.id !== Number(postId);
  });
  response.send(deletePost);
});

app.delete("/users/:id", (request, response) => {
  const userId = request.params.id;

  const deletaUser: user[] = users.filter((user) => {
    return user.id !== Number(userId);
  });
  response.send(deletaUser);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
