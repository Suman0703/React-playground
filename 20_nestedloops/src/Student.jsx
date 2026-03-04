function Student({ student }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      
      <h2>Name: {student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Email: {student.email}</p>

      <h4>Subjects:</h4>

      {
        student.subject.map((sub, index) => (
          <ul key={index}>
            <li>{sub.sub1}</li>
            <li>{sub.sub2}</li>
            <li>{sub.sub3}</li>
          </ul>
        ))
      }

    </div>
  );
}

export default Student;
