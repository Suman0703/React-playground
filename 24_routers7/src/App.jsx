import { Route, Routes,Link } from "react-router"
import Home from "./Home"
import About from "./About"

function App() {

  return (
    <div>
      <Link to="/home">Home</Link>
      <br /><br />
       <Link to="/about">About</Link>
      <h1>React Routers 7</h1>
      <Routes>
      <Route  path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />

      </Routes>
    </div>
  )
}

export default App
