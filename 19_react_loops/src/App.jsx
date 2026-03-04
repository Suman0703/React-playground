import { useState } from 'react'
import './App.css'
import User from './User';
import Clock from './Clock';

function App() {


  const userName = ["Suman", "Priya", "Anjali", "Pooja", "Rohit", "Peter"];
  const collegeData = ["IET", "RBU", "LPU", "IIT"];

  const userData = [
    {
      id: 1,
      name: "Suman",
      age: 19,
      email: "sum@test.com",
    },
    {
      id: 2,
      name: "Priya",
      age: 29,
      email: "pri@test.com",
    },
    {
      id: 3,
      name: "Anjali",
      age: 23,
      email: "anj@test.com",
    },
    {
      id: 4,
      name: "Pooja",
      age: 39,
      email: "pooja@test.com",
    },
    {
      id: 5,
      name: "Rohit",
      age: 34,
      email: "rohit@test.com",
    },
    {
      id: 6,
      name: "Peter",
      age: 29,
      email: "sum@test.com",
    },
  ]

  // return (
  //   <div>
  //     <h1>Loops in React JS with map Fuction</h1>
  //     <br />
  //     <table border={1}>
  //       <thead>
  //         <tr>
  //         <td>ID</td>
  //         <td>Name</td>
  //         <td>Age</td>
  //         <td>Email</td>
  //         </tr>
  //       </thead>
  //      <tbody>
  //      {
  //       userData.map((user)=> (
  //         <tr key={user.id}>
  //         <td>{user.id}</td>
  //         <td>{user.name}</td>
  //         <td>{user.age}</td>
  //         <td>{user.email}</td>
  //         </tr>

  //       ))
  //      }
  //      </tbody>
  //     </table>
  //   </div>
  // )


  //resuable component
  // return (
  //   <div
  //     style={{
  //       padding: "30px",
  //       backgroundColor: "#f1f3f5",
  //       minHeight: "100vh",
  //       fontFamily: "Arial, sans-serif",
  //     }}
  //   >
  //     <h1
  //       style={{
  //         textAlign: "center",
  //         color: "#212529",
  //         marginBottom: "30px",
  //       }}
  //     >
  //       Reuse Component in Loop
  //     </h1>

  //     {userData.map((user) => (
  //       <div
  //         key={user.id}
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <User user={user} />
  //       </div>
  //     ))}
  //   </div>
  // )




const [color, setcolor] = useState("yellow");

return (
<div
  style={{
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    fontFamily: "Arial, sans-serif",
  }}
>
  <h1
    style={{
      marginBottom: "20px",
      color: "#212529",
      letterSpacing: "1px",
    }}
  >
    Props Task
  </h1>

  <select
    value={color}
    onChange={(event) => setcolor(event.target.value)}
    style={{
      backgroundColor: "black",
      color: "white",
      padding: "10px 16px",
      borderRadius: "10px",
      border: "2px solid white",
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "30px",
      cursor: "pointer",
      outline: "none",
      boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
    }}
  >
    <option value="red">Red</option>
    <option value="yellow">Yellow</option>
    <option value="blue">Blue</option>
    <option value="orange">Orange</option>
    <option value="green">Green</option>
  </select>

  <Clock color={color} />
</div>

)
}

export default App;
