import React, { useState } from "react";

function UserAdd() {
  const [name, setname] = useState('');
  const [role, setrole] = useState('');
  const [hobby, sethobby] = useState('');

  async function createUser() {

    const URL = "http://localhost:3000/users";
    let response = await fetch(URL, {
      method: 'Post',
      body: JSON.stringify({ name, role, hobby })
      
    });

    response = await response.json();

    if (response) {

      alert("New User Added");

      // clear inputs
      setname("");
      setrole("");
      sethobby("");
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add New User</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => setname(event.target.value)}
        style={styles.input}
      />

      <input
        type="text"
        placeholder="Enter Your Role"
        onChange={(event) => setrole(event.target.value)}
        style={styles.input}
      />

      <input
        type="text"
        placeholder="Enter Your hobby"
        onChange={(event) => sethobby(event.target.value)}
        style={styles.input}
      />

      <button style={styles.button} onClick={createUser}>
        Add User Details
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "100px auto",
    padding: "30px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    backgroundColor: "#f5f5f5",
  },

  heading: {
    marginBottom: "20px",
    color: "#333",
  },

  input: {
    width: "90%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default UserAdd;