import { useActionState } from "react";

function Action() {

  async function handleForm(prevState, formData) {
    await new Promise(res => setTimeout(res, 2000));

    const name = formData.get("name");
    const age = formData.get("age");
    const password = formData.get("password");
    const gmail = formData.get("gmail");

    console.log({ name, age, password, gmail });

    return { success: true };
  }

  const [state, formAction, pending] = useActionState(handleForm, {
    success: false
  });

  return (
    <div>
      <h2>useActionState Form</h2>

      <form action={formAction}>

        <input type="text" name="name" placeholder="Enter Name" />
        <br /><br />

        <input type="number" name="age" placeholder="Enter Age" />
        <br /><br />

        <input type="password" name="password" placeholder="Enter Password" />
        <br /><br />

        <input type="email" name="gmail" placeholder="Enter Gmail" />
        <br /><br />

        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>

      </form>

      {state.success && <p>Form Submitted Successfully ✅</p>}
    </div>
  );
}

export default Action;