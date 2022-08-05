import React, { useState, useEffect } from "react";
import Text from "./Text";

const LecNo6 = () => {
  const [button, setButton] = useState(false);

  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);

  const btnhandler = () => {
    setButton(!button);
  };
  return (
    <div>
      <button onClick={btnhandler}>Click Me</button>
      <br />
      {button === true && <Text />}
    </div>
  );
};

export default LecNo6;
