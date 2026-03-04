import { useState } from 'react'
import Class from './Class'
import College from './College'
import { SubjectContext } from './ContextData'
import Student from './Student'
import Subject from './Subject'

function App() {

  const [subject, setsubject] = useState("")
  return (
    <div style={{ backgroundColor: " black", padding: 20 }}>
      <h1 style={{ color: "White" }}>Context API</h1>

      < SubjectContext.Provider value={subject}>

        <select value={subject} onChange={(e) => setsubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="Chemistry">Chemistry</option>
          <option value="History">Histroy</option>
        </select>

        < College />
        < Class />
        < Student />
        < Subject />
        <button onClick={()=>setsubject("")}>Clear Subject</button>
      </SubjectContext.Provider>
    </div>
  )
}

export default App
