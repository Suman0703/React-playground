import { Link } from "react-router";

function User() {

  const usersData = [
    { id: 1, name: "Suman", role: "React Beginner", hobby: "Anime & Coding" },
    { id: 2, name: "Simran", role: "Web Learner", hobby: "Designing" },
    { id: 3, name: "Aman", role: "Frontend Student", hobby: "Gaming" },
    { id: 4, name: "Pooja", role: "Frontend Student", hobby: "Gaming" },
    { id: 5, name: "Tonny", role: "Frontend Student", hobby: "Singing" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>User List</h1>

        {usersData.map((item) => (
          <div key={item.id} style={styles.userItem}>
            <Link style={styles.link} to={"/users/" + item.id}>
              {item.name}
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
  },
  title: {
    marginBottom: "25px",
    color: "#1e3c72"
  },
  userItem: {
    margin: "12px 0"
  },
  link: {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#1e3c72",
    padding: "10px 20px",
    borderRadius: "8px",
    display: "inline-block",
    width: "100%",
    transition: "0.3s ease"
  }
};

export default User;