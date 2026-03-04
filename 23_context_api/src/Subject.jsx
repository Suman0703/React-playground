import { useContext } from "react";
import Student from "./Student";
import { SubjectContext } from "./ContextData";

function Subject() {

  const subject = useContext(SubjectContext); 

  return (
    <div style={{ backgroundColor: "palevioletred", padding: 20 }}>
      <h1>Student Component</h1>
      <h3>Subject is: {subject}</h3>
    </div>
  );
}

export default Subject;