import { useRef, useState } from 'react'
import './App.css'
import Child from './Child';
import Hook from '../../4_props_passing_2/src/Useform';
import Transition from './UseTransition';
import Derived from './DerivedState';
import Update from './ObjectUpdate';
import UpdateArray from './UpdateArray';
import Action from './UseActionState';


//useRef HOOK in React
// function App() {

//   const input = useRef(null);

//   const inputHandler = () => {
//     input.current.focus();
//     input.current.style.color='red';   
//     input.current.placeholder="Enter Your Name"
//   }

//   return (
//     <div>
//       <h1>UseRef Hook</h1>

//       <input 
//         ref={input} 
//         type="text" 
//         placeholder="Enter Username" 
//       />

//       <br /><br />

//       <button onClick={inputHandler}>
//         Focus on Input
//       </button>
//     </div>
//   )
// }

// export default App




// Uncontrolled Component in React 
// function App() {

//   const userRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleForm = (e) => {
//     e.preventDefault();

//     const user = e.target.user.value;
//     const password = e.target.password.value;

//     console.log("User:", user);
//     console.log("Password:", password);
//   };

//   const handleFormRef = (e) => {
//     e.preventDefault();

//     console.log("User:", userRef.current.value);
//     console.log("Password:", passwordRef.current.value);
//   };

//   return (
//     <div>
//       <h1>UnControlled Components</h1>

//       <form method="post" onSubmit={handleForm}>
//         <input
//           type="text"
//           name="user"
//           placeholder="enter user name"
//         />
//         <br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="enter user password"
//         />
//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>

//       <hr />

//       <h1>Uncontrolled Component with useRef</h1>

//       <form method="post" onSubmit={handleFormRef}>
//         <input
//           type="text"
//           ref={userRef}
//           placeholder="enter user name"
//         />
//         <br /><br />

//         <input
//           type="password"
//           ref={passwordRef}
//           placeholder="enter user password"
//         />
//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>

//     </div>
//   );
// }

// export default App



// Passing Function as A prop
// function App() {

//   function handleClick() {
//     alert("Button clicked in Child component!");
//   }

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <Child onButtonClick={handleClick} />
//     </div>
//   );
// }

// export default App;

// Used for UseformStatus, UseTransition and derivedSates
// function App() {


//   return (
//     <div>
//       {/* <Hook /> */}
//       {/* < Transition/> */}
//       {/* < Derived /> */}
//     </div>
//   );
// }

// export default App;


//lifting Up State
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <Child setCount={setCount} />
//     </div>
//   );
// }

// export default App;


// 
function App() {
 

  return (
    <div>
      {/* < Update /> */}/
      {/* < UpdateArray /> */}
      <Action />
    </div>
  );
}

export default App;