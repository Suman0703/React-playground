import { Link, useParams } from "react-router";

function UserDetail() {

  const ParamData = useParams();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>User Detail Page</h1>

        <h2 style={styles.text}>ID: {ParamData.id}</h2>
        <h3 style={styles.text}><Link to="/users">Back</Link></h3>
      </div>
    </div>
  )
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
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    width: "400px",
    textAlign: "left",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#1e3c72",
    fontSize: "30px"
  },
  text: {
    fontSize: "20px",
    margin: "12px 0",
    color: "#333",
    borderBottom: "1px solid #ddd",
    paddingBottom: "5px"
  }
};

export default UserDetail;