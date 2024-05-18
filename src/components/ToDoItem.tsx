import { ToDo } from "../App";
import { SetStateAction } from "react";

interface ToDoItemProps {
  toDo: ToDo;
  setTodos: (value: SetStateAction<ToDo[]>) => void;
}

export default function ToDoItem({ toDo, setTodos }: ToDoItemProps) {
  const handleRemoveToDo = (id: number) => {
    setTodos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  const handleCompleteToDo = (id: number) => {
    setTodos((prevToDos) =>
      prevToDos.map((toDo) => ({
        ...toDo,
        isCompleted: toDo.id === id ? !toDo.isCompleted : toDo.isCompleted,
      }))
    );
  };

  return (
    <li
      className={toDo.isCompleted ? "completed" : ""}
      onClick={() => handleCompleteToDo(toDo.id)}
    >
      {toDo.task}
      <button
        className="remove_button"
        onClick={() => handleRemoveToDo(toDo.id)}
      >
        ❌
      </button>
    </li>
  );
}
