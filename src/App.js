import logo from "./logo.svg";
import "./App.css";
import Purecomponent from "./Components/Purecomponent";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Purecomponent</h1>
        <Purecomponent />
        <hr />
        <br />
        <h1 style={{ textAlign: "center" }}>HOCComponent</h1>

        <Counter />
      </div>
    </>
  );
}

export default App;
