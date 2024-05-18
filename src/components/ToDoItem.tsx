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

  return (
    <li>
      {toDo.task}
      <button onClick={() => handleRemoveToDo(toDo.id)}>❌</button>
    </li>
  );
}
