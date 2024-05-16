interface ToDoListProps {
  todos: string[];
}

export default function ToDoList({ todos }: ToDoListProps) {
  return (
    <ul>
      {todos.map((toDo, index) => {
        return <li key={index}>{toDo}</li>;
      })}
    </ul>
  );
}
