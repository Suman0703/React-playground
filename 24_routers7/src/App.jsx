import { Route, Routes } from "react-router"
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
    <Routes>

      {/* Routes WITH Navbar */}
      <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Routes WITHOUT Navbar */}
      <Route path="/college" element={<College />}>
        <Route index element={<Student />} />
        <Route path="departments" element={<Department />} />
        <Route path="details" element={<Details />} />
      </Route>

      <Route path="/*" element={<PageNotFound />} />

    </Routes>
  )
}

export default App