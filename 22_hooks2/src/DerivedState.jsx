import React, { useState } from "react";

function Derived() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Derived state 
  const fullName = firstName + " " + lastName;

  return (
    <div>
      <h2>Derived State Example</h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <h3>Full Name: {fullName}</h3>
    </div>
  );
}

export default Derived;