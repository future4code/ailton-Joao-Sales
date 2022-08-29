import express from "express";
import { AddressInfo } from "net";
import { task, tasks } from "./data";

const app = express();

app.use(express.json());

app.get("/ping", (request, response) => {
  response.send("Pong! 🏓");
});

app.get("/finishedTasks", (request, response) => {
  const { completed } = request.body;

  const lookFinishedTasks: task[] = tasks.filter((item) => {
    return item.completed === completed;
  });
  response.send(lookFinishedTasks);
});

app.post("/CreateTask", (request, response) => {
  const { userId, id, title, completed } = request.body;

  const newTask: task = {
    userId,
    id,
    title,
    completed,
  };

  tasks.push(newTask);
  response.send(tasks);
});

app.put("/EditTask/:id", (request, response) => {
  const id = request.params.id;

  const editTask: task[] = tasks.map((item) => {
    if (item.id === Number(id)) {
      return {
        ...item,
        completed: !item.completed,
      };
    } else {
      return item;
    }
  });

  response.send(editTask);
});

app.get("/tasks/:userId", (request, response) => {
  const userId = request.params.userId;

  const findTasksByUser: task[] = tasks.filter((item) => {
    return item.userId === Number(userId);
  });

  response.send(findTasksByUser);
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
