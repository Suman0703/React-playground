import { useState } from 'react'
import './App.css'
import Student from './Student'

function App() {
  const StudentData = [
    {
      id: 1,
      name: "Suman",
      age: 19,
      email: "sum@test.com",
      subject: [{
        sub1: "Math",
        sub2: "English",
        sub3: "Science"
      }]
    },
    {
      id: 2,
      name: "Priya",
      age: 29,
      email: "pri@test.com",
      subject: [{
        sub1: "Math",
        sub2: "Physics",
        sub3: "Science"
      }]
    },
    {
      id: 3,
      name: "Anjali",
      age: 23,
      email: "anj@test.com",
      subject: [{
        sub1: "Math",
        sub2: "punjabi",
        sub3: "Science"
      }]
    },
    {
      id: 4,
      name: "Pooja",
      age: 39,
      email: "pooja@test.com",
      subject: [{
        sub1: "Hindi",
        sub2: "English",
        sub3: "Science"
      }]
    },
    {
      id: 5,
      name: "Rohit",
      age: 34,
      email: "rohit@test.com",
      subject: [{
        sub1: "Computer Science",
        sub2: "English",
        sub3: "Science"
      }]
    },
    {
      id: 6,
      name: "Peter",
      age: 29,
      email: "sum@test.com",
      subject: [{
        sub1: "Biology",
        sub2: "Chemistry",
        sub3: "Physics"
      }]
    },
  ]

  return (

    <>
      <h1>Nested Looping in React</h1>
      {
        StudentData.map((student, index) => (
            < Student key={student.id} student={student}/>
        ))
      }
    </>
  )
}

export default App
