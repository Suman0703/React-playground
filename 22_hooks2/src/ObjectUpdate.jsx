import { useState } from "react";

function Update() {
  const [user, setUser] = useState({
    name: "Raman",
    age: 20,
    address: {
      city: "Delhi",
      pincode: 110001
    }
  });

  const updateName = () => {
    setUser(prevUser => ({
      ...prevUser,
      name: "Suman"
    }));
  };

  const updateCity = () => {
    setUser(prevUser => ({
      ...prevUser,               // copy top level
      address: {
        ...prevUser.address,     // copy nested object
        city: "Mumbai"           // update only city
      }
    }));
  };

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.address.city}</h2>
      <h2>Pincode: {user.address.pincode}</h2>

      <button onClick={updateName}>
        Change Name
      </button>

      <br /><br />

      <button onClick={updateCity}>
        Change City
      </button>
    </div>
  );
}

export default Update;