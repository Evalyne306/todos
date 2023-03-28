
// import React, { useState } from "react";
// import axios from "axios";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

// function TodoCard({ todo, onDelete }) {
//   const [checked, setChecked] = useState(false);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   const handleDeleteClick = () => {
//     if (!todo._id) {
//       console.log("Todo ID is not defined");
//       return;
//     }
  
//     axios
//       .delete(`/todos/${todo._id}`)
//       .then((response) => {
//         onDelete(todo._id);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="card">
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={checked}
//             onChange={handleChange}
//             name="checked"
//             color="primary"
//           />
//         }
//         label={
//             <label style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
//               {todo.title}
//             </label>
//           }
//       />
//       <p>{todo.description}</p>
//       <p><b>Status:</b> {todo.status}</p>
//       <p><b>Priority:</b> {todo.priority}</p>
//       <button onClick={handleDeleteClick}>Delete Todo</button>
//     </div>
//   );
// }

// export default TodoCard;
import React, { useState } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function TodoCard({ todo, onDelete }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

const handleDeleteClick = () => {
  if (!todo._id) {
    console.log("Todo ID is not defined");
    return;
  }
  onDelete(todo._id);
};

  return (
    <div className="card">
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="primary"
          />
        }
        label={
            <label style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
              {todo.title}
            </label>
          }
      />
      <p>{todo.description}</p>
      <p><b>Status:</b> {todo.status}</p>
      <p><b>Priority:</b> {todo.priority}</p>
      <button onClick={handleDeleteClick}>Delete Todo</button>
    </div>
  );
}

export default TodoCard;
