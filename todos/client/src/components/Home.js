// function Home({ user }) {
//   if (user) {
//     return <h1>Welcome, {user.username}!</h1>;
//   } else {
//     return <h1>Please Login or Sign Up</h1>;
//   }
// }

// // export default Home;
// import React from "react";
// import pic from '/home/student/todos/client/src/components/notd.jpg'
// import pictwo from '/home/student/todos/client/src/note.jpg'
// import pica from '/home/student/todos/client/src/25.jpeg'
// import picc from '/home/student/todos/client/src/20.jpeg'
// import picd from '/home/student/todos/client/src/a.jpeg'
// import pice from '/home/student/todos/client/src/b.jpeg'
// import picf from '/home/student/todos/client/src/c.jpeg'
// import picg from '/home/student/todos/client/src/e.jpeg'
// import pich from '/home/student/todos/client/src/f.jpeg'
// import pici from '/home/student/todos/client/src/g.jpeg'
// import pick from '/home/student/todos/client/src/ld.jpeg'

// function Home() {
  
// return (<div className="home-style">
// <div className='pic-one'><img src={pic}alt="brd" width= "80px" height= "800px"/></div>
// <div className='pic-two'><img src={pictwo} alt="brd" width= "80px" height= "800px"/></div>
// <div className='pic'><img src={pica} alt="brd" width= "100px" height= "40%"/></div>
// <div className='pic'><img src={picc} alt="brd" width= "100px" height= "40%"/> </div>
// <div className='pic'><img src={picd} alt="brd" width= "100px" height= "50%"/> </div>
// <div className='pic'><img src={pice} alt="brd" width= "100px" height= "50%"/> </div>
// <div className='pic'><img src={picf} alt="brd" width= "100px" height= "50%"/> </div>
// <div className='pic'><img src={picg} alt="brd" width= "100px" height= "50%"/> </div>
// <div className='pic'><img src={pich} alt="brd" width= "100px" height= "50%"/> </div>
// <div className='pic'><img src={pici} alt="brd" width= "100px" height= "50%"/> </div>

// <div className='picright'><img src={pick} alt="brd" width= "100px" height= "50%"/> </div>

 

// </div>);
// }

// export default Home;
// import React from "react";
// import TodoForm from "./TodoForm";
// import pic from '/home/student/todos/client/src/components/notd.jpg'
// import pictwo from '/home/student/todos/client/src/note.jpg'
// import pica from '/home/student/todos/client/src/25.jpeg'
// import picd from '/home/student/todos/client/src/a.jpeg'
// import pice from '/home/student/todos/client/src/b.jpeg'
// import picf from '/home/student/todos/client/src/c.jpeg'
// import picg from '/home/student/todos/client/src/e.jpeg'
// import pich from '/home/student/todos/client/src/f.jpeg'
// import pici from '/home/student/todos/client/src/g.jpeg'
// import pick from '/home/student/todos/client/src/ld.jpeg'

// function Home({ user }) {
//   if (user) {
//     return (
//       <div>
//         <h1>Welcome, {user.username}!</h1>
// <TodoForm/>
//       </div>
      
//     );
//   } else {
//     return (
//     <div className="home-style">
//       <h1>Please Login or Sign Up</h1>;
//     <div className='pic-one'><img src={pic}alt="brd" width= "80px" height= "800px"/></div>
//     <div className='pic-two'><img src={pictwo} alt="brd" width= "80px" height= "800px"/></div>
//     <div className='pic'><img src={pica} alt="brd" width= "100px" height= "40%"/></div>
//     <div className='pic'><img src={picd} alt="brd" width= "100px" height= "50%"/> </div>
//     <div className='pic'><img src={pice} alt="brd" width= "100px" height= "50%"/> </div>
//     <div className='pic'><img src={picf} alt="brd" width= "100px" height= "50%"/> </div>
//     <div className='pic'><img src={picg} alt="brd" width= "100px" height= "50%"/> </div>
//     <div className='pic'><img src={pich} alt="brd" width= "100px" height= "50%"/> </div>
//     <div className='pic'><img src={pici} alt="brd" width= "100px" height= "50%"/> </div>
//     <div className='picright'><img src={pick} alt="brd" width= "100px" height= "50%"/> </div>
//   </div>
  
// )}
// }

// export default Home;
import React from "react";
import TodoForm from "./TodoForm";
import pic from '/home/student/todos/client/src/components/notd.jpg'
import pictwo from '/home/student/todos/client/src/note.jpg'
import pica from '/home/student/todos/client/src/25.jpeg'
import picd from '/home/student/todos/client/src/a.jpeg'
import pice from '/home/student/todos/client/src/b.jpeg'
import picf from '/home/student/todos/client/src/c.jpeg'
import picg from '/home/student/todos/client/src/e.jpeg'
import pich from '/home/student/todos/client/src/f.jpeg'
import pici from '/home/student/todos/client/src/g.jpeg'
import pick from '/home/student/todos/client/src/ld.jpeg'

function Home({ user }) {
  if (user) {
    return (
      <div>
        <h1>Welcome, {user.username}!</h1>
<TodoForm/>
      </div>
      
    );
  } else {
    return (
    <div className="home-style">
      <h1>Please Login or Sign Up</h1>;
    <div className='pic-one'><img src={pic}alt="brd" width= "80px" height= "800px"/></div>
    <div className='pic-two'><img src={pictwo} alt="brd" width= "80px" height= "800px"/></div>
    <div className='pic'><img src={pica} alt="brd" width= "100px" height= "40%"/></div>
    <div className='pic'><img src={picd} alt="brd" width= "100px" height= "50%"/> </div>
    <div className='pic'><img src={pice} alt="brd" width= "100px" height= "50%"/> </div>
    <div className='pic'><img src={picf} alt="brd" width= "100px" height= "50%"/> </div>
    <div className='pic'><img src={picg} alt="brd" width= "100px" height= "50%"/> </div>
    <div className='pic'><img src={pich} alt="brd" width= "100px" height= "50%"/> </div>
    <div className='pic'><img src={pici} alt="brd" width= "100px" height= "50%"/> </div>
    <div className='picright'><img src={pick} alt="brd" width= "100px" height= "50%"/> </div>
  </div>
  
)}
}

export default Home;
