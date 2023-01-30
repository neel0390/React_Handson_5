import React from "react";
import { useState } from "react";
const Purecomponent = (props) => {
  const [state, setstate] = useState(0);
  const Increment = () => {
    setstate(state + 1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>A React component is considered pure if it renders the same output for the same state and props.</h3>
      <h1> Counter: {state} </h1>
      <br />
      <button style={{ borderRadius: "20px", width: "150px", height: "50px" }} onClick={Increment}>
        Click ME
      </button>
    </div>
  );
};

export default Purecomponent;
