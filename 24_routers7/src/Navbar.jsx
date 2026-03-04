import { NavLink, Outlet } from "react-router";

export default function NavBar() {
  return (
    <>
      <div style={styles.header}>
        <div>
          <h2 style={styles.logo}>Logo</h2>
        </div>

        <div style={styles.navLinks}>
          <NavLink style={navStyle} to="/">Home</NavLink>
          <NavLink style={navStyle} to="/user/login">Login</NavLink>
          <NavLink style={navStyle} to="/user/about">About</NavLink>
          <NavLink style={navStyle} to="/college">College</NavLink>
          <NavLink style={navStyle} to="/users">Users</NavLink>
          <NavLink style={navStyle} to="/users/list">List</NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
}

//Active style function
const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#00ffcc" : "white",
  fontSize: "18px",
  padding: "6px 12px",
  borderRadius: "6px",
  transition: "0.3s ease",
  backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "transparent"
});

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white"
  },
  logo: {
    fontSize: "26px",
    letterSpacing: "2px"
  },
  navLinks: {
    display: "flex",
    gap: "25px"
  }
};