import React from "react";
import "./App.css";
const User = props => {
  return (
    <div>
      <h4 className="heading">
        {props.name}
      </h4>
      <h5>
        {props.email}
      </h5>
      <h5>
        {props.contact}
      </h5>
    </div>
  );
};

export default User;
