import { useFormStatus } from "react-dom";

function Hook() {

  const handleForm = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("Submit");
  };

  function SubmitButton() {
    const { pending } = useFormStatus();

    return (
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    );
  }

  return (
    <div>
      <form action={handleForm}>
        <input type="text" placeholder="Enter Name" />
        <br /><br />
        <input type="password" placeholder="Enter Password" />
        <br /><br />
        <SubmitButton />
      </form>
    </div>
  );
}

export default Hook;