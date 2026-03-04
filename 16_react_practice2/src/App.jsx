import { useState } from 'react'
import './App.css'
import Skills from './checkbox';
// import User from './user'
// import Wrapper from './Wrapper'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     < Wrapper>  <h1>Hello Everyone</h1> </Wrapper>
//     {/* <h1>Components in React</h1>
//       <User name="Suman"/>
//       <User /> */}
//     </>
//   )
// }

// export default App




//controlled components
// function App() {

//   const [name, setname] = useState("");
//   const [password, setpassword] = useState("");
//   const [email, setmail] = useState("");
//   return (
//     <div>
//       <h1>Handle Check box in React</h1>
//       < Skills/>

//     </div>
//   )
// }

// export default App;



//checkbox handling
function App() {
  const [gender, setgender] = useState("Female")
  const [city, setcity] = useState("Hoshiarpur")
  return (
    <div>
      <h1>Handle Radio buttons and dropdown  list in React</h1>
      <h4>Select Gender</h4>
      <input type="radio" onChange={() => setgender(event.target.value)} name='gender' value={"Male"} id='male' checked={gender == "Male"} />
      <label htmlFor="male">Male</label>
      <br /><br />
      <input type="radio" onChange={() => setgender(event.target.value)} name='gender' value={"Female"} id='female' checked={gender == "Female"} />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender: {gender}</h2>
      <br /><br />

      <h4>Select City</h4>
      <select name="" id="" onChange={() => setcity(event.target.value)}>
        <option value="Hoshiarpur" >Hoshiarpur</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Delhi">Delhi</option>
        <option value="Jalandhar">Jalandhar</option>
        <option value="Noida">Noida</option>
      </select>
      <h3>Selected State:{city}</h3>

    </div>
  )
}

export default App;