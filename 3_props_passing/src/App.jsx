import { useState } from 'react'
import './App.css'
import ProfileCard from "./ProfileCard"

function App() {
  return (
    <ProfileCard 
      name="Suman"
      role="React Beginner"
      hobby="Anime & Coding"
    />
  )
}

export default App

