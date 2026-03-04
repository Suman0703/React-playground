import Welcome from "./Welcome.jsx"

function App() {
  const page = "WEBPAGE";
  return(
    <div>
      <h1>Hello React 🚀</h1>
      <p>My React journey starts today</p>
      <h1> WELCOME TO MY {page} </h1> 
       <Welcome />
    </div>
  );

  //    return (
  //   <Welcome />
  // );
}

export default App

