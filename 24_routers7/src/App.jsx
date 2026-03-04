import { Route, Routes, Link } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./Navbar"
import PageNotFound from "./PageNotfound"
import College from "./College"
import Student from "./Student"
import Department from "./Department"
import Details from "./Details"

function App() {

  return (
    <div>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/college" element={<College />} >
          <Route path="student" element={<Student />} />
          <Route path="departments" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  )

}

export default App
