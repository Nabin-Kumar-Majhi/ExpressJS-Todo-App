import { NextFunction, Request, Response } from "express";
import { TodoModel } from "../models/todo-model";
import { parse } from "path";
import { getTodoView } from "../views/get-todo";

/**
 * This file contains code related to todo controller
 */

export function getTodoController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const todoId = req.query.todoId;

  if (!todoId) {
    next("Please provide a valid todoId");
    return;
  }

  const myTodoModel = new TodoModel();
  const todo = myTodoModel.getTodo(parseInt(todoId as string));

  if (!todo) {
    res.status(404).json({
      message: "Todo not found",
    });
    return;
  }

  // res.json({
    // data: todo,
  // });

  // function to generate html string from todo data

  const todoView = getTodoView(todo);

  res.send(todoView);
}

export function createTodoController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, status } = req.body;

  if (!name || !status) {
    res.status(400).json({
      message: "Name and status are required",
    });
    return;
  }

  const myTodoModel = new TodoModel();
  const createdTodo = myTodoModel.createTodo(name, status);

  res.status(201).json({
    data: createdTodo,
    message: "Todo is created successfully!",
  });
}

export function deleteTodoController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const todoId = req.query.todoId;

  if (!todoId) {
    res.status(400).json({
      message: "Please provide a valid todoId",
    });
    return;
  }

  const myTodoModel = new TodoModel();
  const isDeleted = myTodoModel.deleteTodo(parseInt(todoId as string));

  if (!isDeleted) {
    res.status(404).json({
      message: "Todo not found",
    });
    return;
  }

  res.json({
    message: "Todo deleted successfully!",
  });
}

export function getAllTodoController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const myTodoModel = new TodoModel();
  const allTodos = myTodoModel.getAllTodos();

  res.json({
    data: allTodos,
  });
}

export function updateTodoController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const todoId = req.query.todoId;
  const { name, status } = req.body;

  if (!todoId || !name || !status) {
    res.status(400).json({
      message: "Please provide valid todoId, name, and status",
    });
    return;
  }

  const myTodoModel = new TodoModel();
  const updatedTodo = myTodoModel.updateTodo(
    parseInt(todoId as string),
    name,
    status
  );

  if (!updatedTodo) {
    res.status(404).json({
      message: "Todo not found or not updated",
    });
    return;
  }

  res.json({
    data: updatedTodo,
    message: "Todo updated successfully!",
  });
}