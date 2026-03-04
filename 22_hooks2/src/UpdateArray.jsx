import { useState } from "react";

function UpdateArray() {
  const [data, setData] = useState([
    { name: "Raman", age: 20 },
    { name: "Rahul", age: 22 }
  ]);

  const handleUser = (newName) => {
    setData(prevData =>
      prevData.map((item, index) =>
        index === prevData.length - 1
          ? { ...item, name: newName }
          : item
      )
    );
  };

  const handleAge = (newAge) => {
    setData(prevData =>
      prevData.map((item, index) =>
        index === prevData.length - 1
          ? { ...item, age: newAge }
          : item
      )
    );
  };

  return (
    <div>
      <h2>Users List</h2>

      {data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <hr />
        </div>
      ))}

      <button onClick={() => handleUser("Suman")}>
        Update Last Name
      </button>

      <br /><br />

      <button onClick={() => handleAge(25)}>
        Update Last Age
      </button>
    </div>
  );
}

export default UpdateArray;