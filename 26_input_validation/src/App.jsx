import { useActionState } from "react";

function App() {

  const [state, formAction] = useActionState(validateForm, { errors: {} });

  return (
    <div style={styles.container}>
      <form action={formAction} style={styles.form}>

        <h2 style={styles.heading}>User Form</h2>

        <input name="name" placeholder="Name" style={styles.input} />
        {state.errors.name && <p style={styles.error}>{state.errors.name}</p>}

        <input name="email" placeholder="Email" style={styles.input} />
        {state.errors.email && <p style={styles.error}>{state.errors.email}</p>}

        <input name="age" placeholder="Age" style={styles.input} />
        {state.errors.age && <p style={styles.error}>{state.errors.age}</p>}

        <input name="role" placeholder="Role" style={styles.input} />
        {state.errors.role && <p style={styles.error}>{state.errors.role}</p>}

        <input name="hobby" placeholder="Hobby" style={styles.input} />
        {state.errors.hobby && <p style={styles.error}>{state.errors.hobby}</p>}

        <button style={styles.button}>Submit</button>

      </form>
    </div>
  );
}

function validateForm(prevState, formData) {

  let errors = {};

  if (!formData.get("name")) {
    errors.name = "Name is required";
  }

  if (!formData.get("email")) {
    errors.email = "Email is required";
  }

  if (!formData.get("age")) {
    errors.age = "Age is required";
  }

  if (!formData.get("role")) {
    errors.role = "Role is required";
  }

  if (!formData.get("hobby")) {
    errors.hobby = "Hobby is required";
  }

  return { errors };
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "80px",
    fontFamily: "Arial"
  },

  form: {
    width: "320px",
    padding: "25px",
    borderRadius: "8px",
    backgroundColor: "#f4f4f4",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  heading: {
    textAlign: "center",
    marginBottom: "10px"
  },

  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },

  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  error: {
    color: "red",
    fontSize: "14px",
    margin: "0"
  }
};

export default App;