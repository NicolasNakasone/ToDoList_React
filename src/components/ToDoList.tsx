import { ToDo } from "../App";
import { SetStateAction } from "react";

interface ToDoListProps {
  todos: ToDo[];
  setTodos: (value: SetStateAction<ToDo[]>) => void;
}

export default function ToDoList({ todos, setTodos }: ToDoListProps) {
  const handleRemoveToDo = (id: number) => {
    setTodos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <ul>
      {todos.map((toDo, index) => {
        return (
          <li key={index}>
            {toDo.task}
            <button onClick={() => handleRemoveToDo(toDo.id)}>❌</button>
          </li>
        );
      })}
    </ul>
  );
}
