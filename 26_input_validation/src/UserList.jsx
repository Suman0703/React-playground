import React from "react";

function UserList() {

  const users = [
    { id: 1, name: "Suman", role: "Developer" },
    { id: 2, name: "Rahul", role: "Designer" },
    { id: 3, name: "Ankit", role: "Tester" }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User List</h2>

      {users.map((user) => (
        <div key={user.id} style={styles.card}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "30px auto",
    textAlign: "center",
    fontFamily: "Arial"
  },

  heading: {
    marginBottom: "20px"
  },

  card: {
    backgroundColor: "#f5f5f5",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "6px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.15)"
  }
};

export default UserList;