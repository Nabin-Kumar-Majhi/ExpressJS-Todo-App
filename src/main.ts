import express from "express";
import bodyParser from "body-parser";
import {
  createTodoController,
  getTodoController,
  deleteTodoController,
  getAllTodoController,
  updateTodoController,
} from "./controllers/todo-controller";

const PORT = 4000;

const app = express();

app.use(bodyParser.json());

// Todo:  routes

// get-todo using query
app.get("/get-todo", getTodoController);

// create-todo
app.post("/create-todo", createTodoController);

// delete-todo using query
app.delete("/delete-todo", deleteTodoController);

// get-all-todos
app.get("/get-all-todos", getAllTodoController);

// update-todo using query
app.post("/update-todo", updateTodoController);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});