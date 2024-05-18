import { ToDo } from "../App";
import { SetStateAction } from "react";
import ToDoItem from "./ToDoItem";

interface ToDoListProps {
  todos: ToDo[];
  setTodos: (value: SetStateAction<ToDo[]>) => void;
}

export default function ToDoList({ todos, setTodos }: ToDoListProps) {
  return (
    <ul className="todo_list">
      {todos.map((toDo) => {
        return <ToDoItem key={toDo.id} {...{ toDo, setTodos }} />;
      })}
    </ul>
  );
}
