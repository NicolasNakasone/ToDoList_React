import { FormEvent, SetStateAction, useState } from "react";
import TextField from "./ToDoInput";
import { ToDo } from "../App";

interface ToDoFormProps {
  setTodos: (value: SetStateAction<ToDo[]>) => void;
}

export default function ToDoForm({ setTodos }: ToDoFormProps) {
  const [toDo, setToDo] = useState("");

  const handleAddToDo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (toDo) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: new Date().getTime(), task: toDo, isCompleted: false },
      ]);
      setToDo("");
    }
  };

  return (
    <form onSubmit={handleAddToDo}>
      <TextField {...{ toDo, setToDo }} />
      <button type="submit" disabled={!toDo}>
        Agregar
      </button>
    </form>
  );
}
