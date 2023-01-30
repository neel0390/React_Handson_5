import React, { useState } from "react";
import HOCCounter from "./HOCCounter";

const Purecomponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3> A higher-order component is a function that takes a component and returns a new component.</h3>

        <h3> In HOC Example,created a counter component and added the functionality in counter component and returned it in another new component.Thus we can reuse the component logic.</h3>
        <h1> Counter : {counter} </h1>
        <br />
        <button style={{ borderRadius: "20px", width: "150px", height: "50px" }} onClick={() => setCounter((counter) => counter + 1)} className={"btn"}>
          Click ME
        </button>
        <br />
      </div>
    </>
  );
};

export default HOCCounter(Purecomponent);
