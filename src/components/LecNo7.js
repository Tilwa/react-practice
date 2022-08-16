import React, { useState, useEffect, createFactory } from "react";
import axios from "axios";

const LecNo7 = () => {
  const [catFact, setCatFact] = useState("");
  const [name, setName] = useState(0);

  const callCatFact = () => {
    axios.get("https://catfact.ninja/fact").then(res => {
      //console.log(res.data.fact);
      setCatFact(res.data.fact);
    });
  };

  const seeNameDetails = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then(res => {
      //console.log(res.data);
      setName(res.data);
    });
  };
  useEffect(() => {
    callCatFact();

    seeNameDetails();
  }, []);
  return (
    <div>
      <button onClick={callCatFact}>Change Quotes</button>
      <br />
      {catFact}
      <br />
      <br />
      <br />
      <input
        placeholder="Enter Your Name"
        onChange={event => {
          setName(event.target.value);
        }}
      />
      <br />
      <button onClick={seeNameDetails}>See Name Details</button>
      <br />
      <p>Name : {name?.name}</p>
      <p>Age : {name?.age}</p>
      <p>Count : {name?.count}</p>


    </div>
  );
};

export default LecNo7;
