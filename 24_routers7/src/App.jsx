import { Route, Routes, Link } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./Navbar"
import PageNotFound from "./PageNotfound"

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  )

}

export default App
