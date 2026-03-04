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


import { useState, useCallback } from "react"

function Button({ onClick }) {
  console.log("Button rendered ✅")
  return <button onClick={onClick}>Click me</button>
}

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    alert("Button clicked")
  }, [])

  return (
    <div style={{ padding: "20px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Button onClick={handleClick} />
    </div>
  )
}

export default App
