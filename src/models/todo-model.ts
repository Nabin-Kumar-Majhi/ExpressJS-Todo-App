import { todo } from "node:test";

type TTodoStatus = "not_started" | "in_progress" | "done";

export type TTodo = {
  id: number;
  name: string;
  status: TTodoStatus;
};


const todos: TTodo[] = [
  {
    id: 1,
    name: "Reading about MVC pattern",
    status: "in_progress",
  },
];
export class TodoModel {
  constructor() {
    console.log("Todo constructor is called");
  }

  getTodo(todoId: number) {
    return todos.find((todo) => todo.id === todoId);
  }

  createTodo(name: string, status: TTodoStatus) {
    const newTodo: TTodo = {
      id: todos.length + 1,
      name,
      status,
    };
    todos.push(newTodo);
    return newTodo;
  }

  deleteTodo(todoId: number) {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex === -1) {
      return false;
    }

    todos.splice(todoIndex, 1);
    return true;
  }

  getAllTodos() {
    return todos;
  }

  updateTodo(todoId: number, name: string, status: TTodoStatus) {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  
    if (todoIndex === -1) {
      return null;
    }
  
    // Update the existing todo
    todos[todoIndex] = {
      ...todos[todoIndex],
      name,
      status,
    };
  
    return todos[todoIndex];
  }
  
}