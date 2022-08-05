import React, { useState } from "react";
import Task from "./Task";

const LecNo5 = () => {
  const [inputData, setInputData] = useState("");
  const [listData, setListData] = useState([]);

  const inputHandler = event => {
    setInputData(event.target.value);
  };

  const dataHandler = () => {
    const arr = {
      id: listData.length === 0 ? 1 : listData[listData.length - 1].id + 1,
      name: inputData,
      completeTask: false
    };
    setListData([...listData, arr]);
  };

  const deleteHandler = id => {
    const delData = listData.filter(item => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });

    setListData(delData);
  };

  const completeHandler = id => {
    // console.log("clicked", id);
  };
  return (
    <div>
      <div>
        <input onChange={inputHandler} />
        <button onClick={dataHandler}>Add</button>
      </div>

      <div>
        {listData.map((data, index) => {
          return (
            <div key={index}>
              <h1>
                {data.name}
              </h1>
              <button onClick={() => completeHandler(data.id)}>Complete</button>
              <button onClick={() => deleteHandler(data.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LecNo5;

{
  /* <Task
              taskName={data.name}
              task={data.id}
              deleteHandler={deleteHandler}
              completeHandler={completeHandler}
            /> */
}
