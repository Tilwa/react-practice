import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskNo7 = () => {
  const [excuse, setExcuse] = useState("");

  const fetchExcuse = e => {
    axios.get(`https://excuser.herokuapp.com/v1/excuse/${e}`).then(res => {
      //console.log(res.data[0].excuse);
      setExcuse(res.data[0].excuse);
    });
  };

  useEffect(() => {
    fetchExcuse();
  }, []);

  return (
    <div>
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <br />
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <br />
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <br />

      {excuse}
    </div>
  );
};

export default TaskNo7;
