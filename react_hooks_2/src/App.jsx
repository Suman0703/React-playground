// import { useState } from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   console.log("Component rendered")

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   )
// }

// export default App


// import { useActionState } from "react"
// import "./App.css"

// function App() {
//   const submitAction = async (prevState, formData) => {
//     const name = formData.get("name")

//     // simulate delay (like API call)
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     return {
//       message: `Hello ${name} 👋`
//     }
//   }

//   const [state, formAction, isPending] = useActionState(
//     submitAction,
//     { message: "" }
//   )

//   return (
//     <div className="form-container">
//       <h2>Welcome Form</h2>

//       <form action={formAction}>
//         <input
//           name="name"
//           placeholder="Enter your name"
//           required
//         />

//         <button disabled={isPending}>
//           {isPending ? "Submitting..." : "Submit"}
//         </button>
//       </form>

//       <p>{state.message}</p>
//     </div>
//   )
// }

// export default App


// 

// import UserContext from "./UserContext"
// import Home from "./Home"

// function App() {
//   const user = "Suman"

//   return (
//     <UserContext.Provider value={user}>
//       <Home />
//     </UserContext.Provider>
//   )
// }

// export default App

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)

  // heavy calculation
  const slowCalculation = () => {
    console.log("Calculating...")
    let total = 0
    for (let i = 0; i < 1_000_000_000; i++) {
      total += i
    }
    return total
  }

  const result = slowCalculation()

  return (
    <div style={{ background: dark ? "#000" : "#fff", color: dark ? "#fff" : "#000" }}>
      <h1>Result: {result}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  )
}

export default App
