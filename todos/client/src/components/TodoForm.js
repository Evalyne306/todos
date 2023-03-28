
// import React, { useState } from "react";
// import axios from "axios";
// import TodoCard from "./TodoCard";

// function TodoForm() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [status, setStatus] = useState("");
//   const [priority, setPriority] = useState("");
//   const [todos, setTodos] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     axios
//       .post("/todos", {
//         title,
//         description,
//         status,
//         priority,
//       })
//       .then((response) => {
//         console.log(response.data);
//         setTodos([...todos, response.data.data]);
//         setTitle("");
//         setDescription("");
//         setStatus("");
//         setPriority("");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return (
//     <div>
//       <h1>Create Todo</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label htmlFor="description">Description</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>

//         <label htmlFor="status">Status</label>
//         <select
//           id="status"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//         >
//           <option value="CREATED">Created</option>
//           <option value="STARTED">Started</option>
//           <option value="COMPLETED">Completed</option>
//           <option value="CANCELLED">Cancelled</option>
//         </select>

//         <label htmlFor="priority">Priority</label>
//         <select
//           id="priority"
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//         >
//           <option value="LOW">Low</option>
//           <option value="MEDIUM">Medium</option>
//           <option value="HIGH">High</option>
//         </select>

//         <button type="submit">Create</button>
//       </form>
//       {todos.map((todo) => (
//         <TodoCard key={todo.id} todo={todo} />
//       ))}
//     </div>
//   );
// }

// export default TodoForm;
import React, { useState } from "react";
import axios from "axios";
import TodoCard from "./TodoCard";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/todos", {
        title,
        description,
        status,
        priority,
      })
      .then((response) => {
        console.log(response.data);
        setTodos([...todos, response.data.data]);
        setTitle("");
        setDescription("");
        setStatus("");
        setPriority("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDelete(todo) {
    axios
      .delete(`/todos/${todo._id}`)
      .then((response) => {
        setTodos((prevState) => prevState.filter((t) => t._id !== todo._id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="CREATED">Created</option>
          <option value="STARTED">Started</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>

        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>

        <button type="submit">Create</button>
      </form>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TodoForm;
