import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoCard from "./TodoCard";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("/todos")
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo._id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoCard key={todo._id} todo={todo} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TodoList;
