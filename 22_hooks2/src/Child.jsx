import React from "react";

function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={props.onButtonClick}>
        Click Me
      </button>
    </div>
  );
}

export default Child;