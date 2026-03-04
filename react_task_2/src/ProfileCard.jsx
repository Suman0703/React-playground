import { useState } from "react"

function ProfileCard(props) {

  const [message, setMessage] = useState("Welcome to my profile")

  return (
    <div className="profile-card">
      <h2>Name: {props.name}</h2>
      <p>Role: {props.role}</p>
      <p>Hobbies: {props.hobby}</p>

      <h3>{message}</h3>

      <button onClick={() => setMessage("Thanks for visiting 😊")}>
        Click Me
      </button>
    </div>
  )
}

export default ProfileCard
