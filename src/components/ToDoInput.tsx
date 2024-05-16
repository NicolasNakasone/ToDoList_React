import { SetStateAction } from "react";

interface ToDoInputProps {
  toDo: string;
  setToDo: (value: SetStateAction<string>) => void;
}

export default function ToDoInput({ toDo, setToDo }: ToDoInputProps) {
  return (
    <input
      type="text"
      value={toDo}
      onChange={({ target: { value } }) => setToDo(value)}
      placeholder="Agrega una tarea..."
    />
  );
}
