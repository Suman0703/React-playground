import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const URL = "https://dummyjson.com/users";

    let response = await fetch(URL);
    let data = await response.json();

    setUsersData(data.users);
  }

  console.log(usersData);

  return (
    <div className="container">
      <h1>Fetch Data From API</h1>

      {usersData && usersData.map((user) => (
        <ul key={user.id} className="user-card">
          <li><strong>First Name:</strong> {user.firstName}</li>
          <li><strong>Last Name:</strong> {user.lastName}</li>
          <li><strong>Age:</strong> {user.age}</li>
        </ul>
      ))}

    </div>
  );
}

export default App;