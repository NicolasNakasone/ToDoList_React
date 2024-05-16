import { FormEvent, SetStateAction, useState } from "react";
import TextField from "./ToDoInput";

interface ToDoFormProps {
  setTodos: (value: SetStateAction<string[]>) => void;
}

export default function ToDoForm({ setTodos }: ToDoFormProps) {
  const [toDo, setToDo] = useState("");

  const handleAddToDo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (toDo) {
      setTodos((prevTodos) => [...prevTodos, toDo]);
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
