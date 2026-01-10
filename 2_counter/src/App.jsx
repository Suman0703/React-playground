import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter >= 20) {
      alert("Value cannot go above 20")
    } else {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if (counter <= 0) {
      alert("Value cannot go below 0")
    } else {
      setCounter(counter - 1);
    }
  }
  // let counter = 5
  return (
    <div>
      <h1>Welcome to my Web-Page</h1>
      <h3>Conter Value : {counter}</h3>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value </button>
    </div>
  )
}

export default App
