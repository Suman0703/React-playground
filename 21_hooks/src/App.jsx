import { useState, useEffect } from 'react';
import './App.css';
import Counter from './Counter';


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

function App() {

  const [count, setcount] =useState(0)
  const [data, setdata] =useState(0)

  return (
     <div>
            <Counter data={data} />

            <button>Count is: {count}</button>
            <br /><br />
            <button onClick={() => setcount(count + 1)}>Increase Count</button>

            <br /><br />

            <button>Data is: {data}</button>
            <br /><br />
            <button onClick={() => setdata(data + 1)}>Increase Data</button>
        </div>
  );
}

export default App;
