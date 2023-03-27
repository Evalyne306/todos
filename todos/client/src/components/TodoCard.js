import React from "react";

function TodoCard({ todo }) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Status: {todo.status}</p>
      <p>Priority: {todo.priority}</p>
    </div>
  );
}

export default TodoCard;