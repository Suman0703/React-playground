function Details() {

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>College Details Section</h1>
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
  },
  title: {
    color: "#ffffff",
    fontSize: "40px",
    backgroundColor: "#1e3c72",
    padding: "20px 40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,255,0.4)",
    letterSpacing: "2px"
  }
};

export default Details