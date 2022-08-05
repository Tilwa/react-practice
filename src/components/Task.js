import React from "react";

const Task = props => {
  return (
    <div>
      <h1>
        {props.taskName}
      </h1>
      <button onClick={() => props.deleteHandler(props.task)}>X</button>
      <button onClick={() => props.completeHandler()}>Complete</button>
    </div>
  );
};

export default Task;
