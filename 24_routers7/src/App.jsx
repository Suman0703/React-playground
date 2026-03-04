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
import User from "./Users"
import UserDetail from "./UserDetail"

function App() {

  return (
    <Routes>

      {/* Routes WITH Navbar */}
      <Route element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User/>} />
         <Route path="/users/:id" element={<UserDetail/>} />

        <Route path="user">
          <Route path="/user/about" element={<About />} />
          <Route path="/user/login" element={<Login />} />
        </Route>

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