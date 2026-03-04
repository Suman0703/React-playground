const User = ({ user }) => {
  return (
    <div
      style={{
        width: "320px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#343a40",
          marginBottom: "15px",
        }}
      >
        User Component
      </h2>

      <h3 style={{ color: "#495057", margin: "8px 0" }}>
        <span style={{ fontWeight: "bold", color: "#212529" }}>ID:</span>{" "}
        {user.id}
      </h3>

      <h3 style={{ color: "#495057", margin: "8px 0" }}>
        <span style={{ fontWeight: "bold", color: "#212529" }}>Name:</span>{" "}
        {user.name}
      </h3>

      <h3 style={{ color: "#495057", margin: "8px 0" }}>
        <span style={{ fontWeight: "bold", color: "#212529" }}>Age:</span>{" "}
        {user.age}
      </h3>

      <h3 style={{ color: "#495057", margin: "8px 0" }}>
        <span style={{ fontWeight: "bold", color: "#212529" }}>Email:</span>{" "}
        {user.email}
      </h3>
    </div>
  );
};

export default User;
