import { useEffect, useState } from "react";
import "./App.css";

// function App() {

//   const [usersData, setUsersData] = useState([]);

//   useEffect(() => {
//     getUserData();
//   }, []);

//   async function getUserData() {
//     const URL = "https://dummyjson.com/users";

//     let response = await fetch(URL);
//     let data = await response.json();

//     setUsersData(data.users);
//   }

//   console.log(usersData);

//   return (
//     <div className="container">
//       <h1>Fetch Data From API</h1>

//       {usersData && usersData.map((user) => (
//         <ul key={user.id} className="user-card">
//           <li><strong>First Name:</strong> {user.firstName}</li>
//           <li><strong>Last Name:</strong> {user.lastName}</li>
//           <li><strong>Age:</strong> {user.age}</li>
//         </ul>
//       ))}

//     </div>
//   );
// }

// export default App;


//Using my OWN api 
function App() {

  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getUserData();
  }, []);

  async function getUserData() {
    const URL = "http://localhost:3000/users";

    let response = await fetch(URL);
    let data = await response.json();

    setUsersData(data);
    setLoading(false);
  }

  console.log(usersData);

  return (
    <div className="container">
      <h1>Integrate JSON Server API and Loader</h1>

      {
      !loading?
      usersData && usersData.map((user) => (
        <ul key={user.id} className="user-card">
          <li><strong>Name:</strong> {user.name}</li>
          <li><strong>Role:</strong> {user.role}</li>
          <li><strong>Hobby:</strong> {user.hobby}</li>
        </ul>
      ))
      :<h1>
        Data Loading
      </h1>
    }

    </div>
  );
}

export default App;