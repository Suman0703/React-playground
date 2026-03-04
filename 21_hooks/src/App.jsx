import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setcount] = useState(0);

  function callOne() {
    console.log("callOne Function called");
  }

  useEffect(() => {
    callOne();
  }, [count]);

  return (
    <div>
      <h1>useEffect Hooks</h1>
      <h1>Count is: {count}</h1>

      <button onClick={() => setcount(count + 1)}>
        Counter
      </button>
    </div>
  );
}

export default App;
