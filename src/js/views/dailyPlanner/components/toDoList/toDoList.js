import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LineInput from "../../../../components/lineInput/lineInput";
import { prioritiesActions } from "../../../../store/actions/priorities.actions";
import "./toDoList.scss";

const array3 = [0, 1, 2];
const array8 = [0, 1, 2, 3, 4, 5, 6, 7];

export default function ToDoList() {
  const dispatch = useDispatch();
  const firstPriority = useSelector((state) => state.priorities.firstPriority);
  const secondPriority = useSelector(
    (state) => state.priorities.secondPriority
  );
  const thirdPriority = useSelector((state) => state.priorities.thirdPriority);

  const array = [firstPriority, secondPriority, thirdPriority];
  const arrayName = ["FirstPriority", "SecondPriority", "ThirdPriority"];
  const arrayNameSmallLetter = [
    "firstPriority",
    "secondPriority",
    "thirdPriority",
  ];

  const onChangeHandler = (data, arrayName) => {
    console.log("daata" + `update${"FirstPriority"}`);
    dispatch(prioritiesActions[`update${arrayName}`](data));
  };

  const onChangeInput = (event) => {
    console.log(event.target.value);
  };

  const notChecked = (value) => {
    dispatch(prioritiesActions.deleteFirstPriority(value));
  };

  return (
    <>
      <div className="checkboxForm">
        <div>
          <p className="title">3 Priorities</p>
          <div>
            {array3.map((number) => (
              <div
                key={"array3" + number}
                style={{ marginBottom: "10px", display: "flex" }}
              >
                <LineInput
                  value={array[number]}
                  className="checkboxInput"
                  withCheckbox={true}
                  notChecked={() => notChecked(arrayNameSmallLetter[number])}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, arrayName[number])
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="title">To Do List</p>
          <div>
            {array8.map((number) => (
              <div
                key={"array8" + number}
                style={{ marginBottom: "10px", display: "flex" }}
              >
                <LineInput
                  className="checkboxInput"
                  withCheckbox={true}
                  onChange={onChangeInput}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
