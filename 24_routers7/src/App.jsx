import { Route, Routes, Link } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./Navbar"

function App() {

  return (
    <div>
      <NavBar />
      <h1>React Routers 7</h1>

      <Routes>
      <Route  path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />


      </Routes>
    </div>
  )

}

export default App
