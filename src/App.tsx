import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <main>
      <h1>ToDoList React</h1>
      <ToDoForm {...{ setTodos }} />
      <ToDoList {...{ todos }} />
    </main>
  );
}
