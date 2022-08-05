//ReactJS Course [4] - UseState Hook | States in React Tutorial

import React, { useState } from "react";

const LecNo4 = () => {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState(true);
  const [colorValue, setColorValue] = useState("blue");

  const [counter, setCounter] = useState(0);

  const incremnetAge = () => {
    setAge(age + 1);
  };

  const inputHandler = event => {
    setInputValue(event.target.value);
  };

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  const setZeroHandler = () => {
    setCounter(0);
  };
  return (
    <div>
      <div>
        <h2>Example no 1</h2>
        {age}
        <br />
        <button onClick={incremnetAge}>Increment</button>

        <br />
        <br />
        <h2>Example no 2</h2>
        <input type="text" onChange={inputHandler} />
        <br />
        {inputValue}
        <br />
        <br />
        <br />
        <br />
        <h2>Example no 3</h2>
        <button
          onClick={() => {
            setTextValue(!textValue);
          }}
        >
          {textValue === true ? "Hide Heading" : "Show Heading"}
        </button>
        {textValue && <h1>My name is Shahrukh</h1>}

        <br />
        <br />
        <h2>Example no 4</h2>
        <button
          onClick={() => {
            setColorValue(colorValue === "blue" ? "red" : "blue");
          }}
        >
          Change Color Style
        </button>
        <h1 style={{ color: colorValue }}>My name is Shahrukh</h1>

        <br />
        <br />
        <br />

        <h3>Task Example</h3>
        <br />
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={setZeroHandler}>Set To Zero</button>
        <br />
        {counter}
      </div>
    </div>
  );
};

export default LecNo4;
