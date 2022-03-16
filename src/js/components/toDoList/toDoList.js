import React from "react";
import CheckboxInput from "../checkBoxInput/checkBoxInput";
import "./toDoList.scss";

const array3 = [0, 1, 2];
const array8 = [0, 1, 2, 3, 4, 5, 6, 7];

export default function ToDoList() {
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
              {/* <input type="checkbox" />
              <input className="checkboxInput"></input> */}
              <CheckboxInput />
            </div>
          ))}
        </div>
        <br></br>
        <h4 style={{ marginLeft: "10px", marginBottom: "0px" }}>To Do List</h4>
        <br></br>
        <div>
          {array8.map((number) => (
            <div key={"array8" + number} style={{ marginBottom: "10px" }}>
              {/* <input type="checkbox" />
              <input className="checkboxInput"></input> */}
              <CheckboxInput />
            </div>
          ))}
        </div>
      </form>
    </>
  );
}
