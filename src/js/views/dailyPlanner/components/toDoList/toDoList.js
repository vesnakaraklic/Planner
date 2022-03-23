import React from "react";
import LineInput from "../../../../components/lineInput/lineInput";
import "./toDoList.scss";

const array3 = [0, 1, 2];
const array8 = [0, 1, 2, 3, 4, 5, 6, 7];

export default function ToDoList() {
  const onChangeInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <form className="checkboxForm">
        <h4 style={{ marginLeft: "10px", marginBottom: "0px" }}>
          3 Priorities
        </h4>
        <br></br>
        <div>
          {array3.map((number) => (
            <div key={"array3" + number} style={{ marginBottom: "10px" }}>
              <LineInput className="checkboxInput" withCheckbox={true} />
            </div>
          ))}
        </div>
        <br></br>
        <h4 style={{ marginLeft: "10px", marginBottom: "0px" }}>To Do List</h4>
        <br></br>
        <div>
          {array8.map((number) => (
            <div key={"array8" + number} style={{ marginBottom: "10px" }}>
              <LineInput
                className="checkboxInput"
                withCheckbox={true}
                onChange={onChangeInput}
              />
            </div>
          ))}
        </div>
      </form>
    </>
  );
}
