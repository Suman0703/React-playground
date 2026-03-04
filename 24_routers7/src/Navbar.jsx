import { Link, Outlet } from "react-router";

export default function NavBar() {
  return (
    <>
      <div style={styles.header}>
        <div>
          <h2 style={styles.logo}>Logo</h2>
        </div>

        <div style={styles.navLinks}>
          <Link style={styles.link} to="/">Home</Link>
          <Link style={styles.link} to="/user/login">Login</Link>
          <Link style={styles.link} to="/user/about">About</Link>
          <Link style={styles.link} to="/college">College</Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

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
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "0.3s ease"
  }
};