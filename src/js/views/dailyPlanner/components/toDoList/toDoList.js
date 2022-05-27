import React from "react";
import { useDispatch } from "react-redux";
import LineInput from "../../../../components/lineInput/lineInput";
import { prioritiesActions } from "../../../../store/actions/priorities.actions";
import { toDoActions } from "../../../../store/actions/toDo.actions";
import "./toDoList.scss";

export default function ToDoList({ priorities, toDo }) {
  const dispatch = useDispatch();

  const onChangePriorities = (value, key) => {
    const newArray = [...priorities.priorities];
    newArray[key] = { value, finished: newArray[key].finished };
    dispatch(prioritiesActions.updatePriorities(newArray));
  };
  const onCheckChangePriorities = (key) => {
    const newArray = [...priorities.priorities];
    newArray[key] = {
      value: newArray[key].value,
      finished: !newArray[key].finished,
    };
    dispatch(prioritiesActions.updatePriorities(newArray));
  };

  const onCheckChangeToDo = (key) => {
    const newArray = [...toDo.toDo];
    newArray[key] = {
      value: newArray[key].value,
      finished: !newArray[key].finished,
    };
    dispatch(toDoActions.updateToDo(newArray));
  };
  const onChangeToDo = (value, key) => {
    const newArray = [...toDo.toDo];
    newArray[key] = { value, finished: newArray[key].finished };
    dispatch(toDoActions.updateToDo(newArray));
  };

  return (
    <>
      <div className="checkboxForm">
        <div>
          <p className="title">3 Priorities</p>
          <div>
            {priorities?.priorities?.map(({ value, finished }, index) => (
              <div
                key={index}
                style={{ marginBottom: "10px", display: "flex" }}
              >
                <LineInput
                  value={value}
                  className="checkboxInput"
                  withCheckbox={true}
                  isChecked={finished}
                  onCheckChange={() => onCheckChangePriorities(index)}
                  onChange={(e) => onChangePriorities(e.target.value, index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="title">To Do List</p>
          <div>
            {toDo?.toDo?.map(({ value, finished }, index) => (
              <div
                key={index}
                style={{ marginBottom: "10px", display: "flex" }}
              >
                <LineInput
                  className="checkboxInput"
                  withCheckbox={true}
                  onCheckChange={() => onCheckChangeToDo(index)}
                  isChecked={finished}
                  value={value}
                  onChange={(e) => onChangeToDo(e.target.value, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
