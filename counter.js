import "./App.css";
import { useState } from "react";
//THIS IS A BASIC PROJECT TO IMPLEMENT TOPICS LIKE PROPS,STATE MANAGEMENT,USESTATE HOOKS,CONDITIONAL RENDERING

function Counter(props) {
  const [count, setCount] = useState(0);
  let message;
  if (count < 0) {
    message = "Please increase the counter to above 0";
  }

  return (
    <div>
      <h3 className="head">{props.name}</h3>
      <button
        className="click"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        INCREASE COUNT
      </button>
      <button
        className="click"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        DECREASE COUNT
      </button>
      <button className="click" onClick={() => setCount(0)}>
        RESET COUNT
      </button>
      <h4 className="head1">
        {" "}
        Current Count {count}!!! {message}
      </h4>
    </div>
  );
}

export default Counter;
