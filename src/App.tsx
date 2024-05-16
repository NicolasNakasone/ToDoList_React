import { useState } from "react";
import "./App.css";
import TextField from "./components/ToDoInput";

export default function App() {
  const [toDo, setToDo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddToDo = () => {
    if (toDo) {
      setTodos((prevTodos) => [...prevTodos, toDo]);
    }
  };

  return (
    <main>
      <h1>ToDoList React</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddToDo();
        }}
      >
        <TextField {...{ toDo, setToDo }} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {todos.map((toDo, index) => {
          return <li key={index}>{toDo}</li>;
        })}
      </ul>
    </main>
  );
}
