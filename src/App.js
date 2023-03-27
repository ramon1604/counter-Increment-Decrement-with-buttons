import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>ReactJS Sample Counter</h3>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
    </>
  );
}
