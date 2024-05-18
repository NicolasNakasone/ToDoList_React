import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

export interface ToDo {
  id: number;
  task: string;
  isCompleted: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  return (
    <main>
      <h1>ToDoList React</h1>
      <ToDoForm {...{ setTodos }} />
      <ToDoList {...{ todos, setTodos }} />
    </main>
  );
}
