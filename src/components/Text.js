import React, { useState } from "react";

const Text = props => {
  const [input, setInput] = useState("");

  const changehandler = event => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input onChange={changehandler} />
      <br />
      {input}
    </div>
  );
};

export default Text;
