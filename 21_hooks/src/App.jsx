import { useState, useEffect } from 'react';
import './App.css';
import Counter from './Counter';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import BasicExample from './Nav';


// useEffect Hook in React
// function App() {

//   const [count, setcount] = useState(0);

//   function callOne() {
//     console.log("callOne Function called");
//   }

//   useEffect(() => {
//     callOne();
//   }, [count]);

//   return (
//     <div>
//       <h1>useEffect Hooks</h1>
//       <h1>Count is: {count}</h1>

//       <button onClick={() => setcount(count + 1)}>
//         Counter
//       </button>
//     </div>
//   );
// }

// export default App;



// Lifecycle of useEffect Hook
// function App() {

//   const [count, setcount] =useState(0)
//   const [data, setdata] =useState(0)

//   return (
//      <div>
//             <Counter data={data} />

//             <button>Count is: {count}</button>
//             <br /><br />
//             <button onClick={() => setcount(count + 1)}>Increase Count</button>

//             <br /><br />

//             <button>Data is: {data}</button>
//             <br /><br />
//             <button onClick={() => setdata(data + 1)}>Increase Data</button>
//         </div>
//   );
// }

// export default App;




// Bootstrap In React
function App() {

  return (
    <div>
      <BasicExample />
      <h1>Add BOOTSTRAP in React</h1>
      <Button>Okay</Button>
      <br /> <br />
      <Alert variant='dark'>Hello BootStrap</Alert>
      <br />
      <Button variant='success'>OK</Button>
      <br /> <br />
      <Button variant='warning' onClick={() => alert("BootStrap Button Clicked")}>Boot Button</Button>
      <br /><br />
      <button onClick={() => alert("BootStrap Button Clicked")}>Simple Button</button>

    </div>
  );
}

export default App;
