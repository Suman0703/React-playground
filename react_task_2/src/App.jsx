import { useState } from 'react'
import './App.css'

import ProfileCard from "./ProfileCard"

function App() {

  const users = [
    {
      id: 1,
      name: "Suman",
      role: "React Beginner",
      hobby: "Anime & Coding"
    },
    {
      id: 2,
      name: "Simran",
      role: "Web Learner",
      hobby: "Designing"
    },
    {
      id: 3,
      name: "Aman",
      role: "Frontend Student",
      hobby: "Gaming"
    }
  ]

 return (
<div className="container">
  <h1>User Profiles</h1>

  {users.map((user) => (
    <ProfileCard
      key={user.id}
      name={user.name}
      role={user.role}
      hobby={user.hobby}
    />
  ))}
</div>
)
}

export default App
