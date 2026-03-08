import { useEffect, useState } from "react";
import UserList from "./UserList";
import "./App.css"
import { NavLink, Route, Routes } from "react-router";
import UserAdd from "./UserAdd";

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


//Integrate JSON Server API and Loader
// function App() {

//   const [usersData, setUsersData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true)
//     getUserData();
//   }, []);

//   async function getUserData() {
//     const URL = "http://localhost:3000/users";

//     let response = await fetch(URL);
//     let data = await response.json();

//     setUsersData(data);
//     setLoading(false);
//   }

//   console.log(usersData);

//   return (
//     <div className="container">
//       <h1>Integrate JSON Server API and Loader</h1>

//       {
//       !loading?
//       usersData && usersData.map((user) => (
//         <ul key={user.id} className="user-card">
//           <li><strong>Name:</strong> {user.name}</li>
//           <li><strong>Role:</strong> {user.role}</li>
//           <li><strong>Hobby:</strong> {user.hobby}</li>
//         </ul>
//       ))
//       :<h1>
//         Data Loading
//       </h1>
//     }

//     </div>
//   );
// }

// export default App;

// Make Routes For API Pages
function App() {
  return (
    <div style={styles.app}>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <NavLink 
              to="/" 
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.activeLink } : styles.link
              }
            >
              List
            </NavLink>
          </li>

          <li style={styles.navItem}>
            <NavLink 
              to="/add"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.activeLink } : styles.link
              }
            >
              Add User
            </NavLink>
          </li>
        </ul>
      </nav>

      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<UserAdd />} />
        </Routes>
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif"
  },

  navbar: {
    backgroundColor: "#222",
    padding: "15px"
  },

  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    margin: 0,
    padding: 0
  },

  navItem: {},

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    padding: "6px 12px",
    borderRadius: "5px"
  },

  activeLink: {
    backgroundColor: "#007bff"
  },

  content: {
    padding: "20px"
  }
};

export default App;