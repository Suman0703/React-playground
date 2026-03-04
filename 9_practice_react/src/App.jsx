//variables,functions,array and objects in react

// import image from "./assets/image.png"

// function App(){

//   //variables
//   const name = ""
//   let x = 1;
//   let y = 2;

//   //functions
//   function sum(a,b){
//     return a+b;
//   }

//   //objects
//   const userobj = {
//     Name:"Suman",
//     Brach: "CSE - 6th-B",
//     RollNo : 2305609,
//     age : 19

//   }

//   //array
//   const userArray = ["Sam","Peter","Suman","Renu"]

//   return (
// <div>
//   <h1>{name?name: "User not found"}</h1>
//   <h1>Suman Devi</h1>
//   <h1>{x+y}</h1>
//   <h1>{sum(4,7)}</h1>
//   <h1>{userobj.Brach}</h1>
//   <h1>{userArray[1]}</h1>

//   {/* image */}
//   <img src={image} alt="" />
// </div>
//   )
// }


// export default App



//states in react
// import { useState } from "react"

// function App() {

//   const [name, setname] = useState("Suman")
//   function Callme() {
//     setname(name? "Simran":"Suman")
//   }

//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={Callme}>Change Name</button>
//     </div>
//   )
// }

// export default App





//toggle in react
// import { useState } from "react";

// function App(){

//   const [display, setdisplay] = useState(true)
//   return(
//     <div>
//     <h1>Toggle in React</h1>
//     {
//       display?<h1>Suman</h1>:null
//     }
// <button onClick={()=>setdisplay(!display)}> Toggle</button>
//     </div>
//   )
// }

// export default App



//Multiple conditions in react
// import { useState } from "react";

// function App() {

//   const [count, setcount] = useState(0)
//   return (
//     <div>
//       <h1>Multiple Conditions</h1>
//       <h1>Count:{count}</h1>
//       {
//         count==0? <h1>Condition 0</h1>
//         :count==1? <h1>Condition 1</h1>
//         :count==2? <h1>Condition 2</h1>
//         :count==3? <h1>Condition 3</h1>
//         :count==4? <h1>Condition 4</h1>
//         :null
//       }

//       <button onClick={() => setcount(count + 1)}> Counter </button>
//     </div>
//   )
// }

// export default App



//Props Passing

import User from "./user"

function App(){
    let userObj ={
        Name: "Suman",
        age:19,
        email:"Suman@gmail.com"
    }

     let userObj2 ={
        Name: "Raman",
        age:19,
        email:"Suman@gmail.com"
    }
    return(
        <div>
            <h1>Props in React JS</h1>
            < User user={userObj}/>
             < User user={userObj2}/>
        </div>
    )
}

export default App