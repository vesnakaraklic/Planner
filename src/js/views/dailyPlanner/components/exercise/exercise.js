import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { exerciseActions } from "../../../../store/actions/exercise.actions";
import "./exercise.scss";

export default function Exercise({ exercise }) {
  const dispatch = useDispatch();

  const onChangeInput = (value, key) => {
    const newArray = [...exercise.exercises];
    newArray[key] = value;
    dispatch(exerciseActions.updateExercise(newArray));
  };

  const onChangeSteps = (value) => {
    dispatch(exerciseActions.updateSteps(value));
  };

  return (
    <>
      <label className="labelStyle">Exercise & Health </label>
      <div className="exerciseForm">
        <div>
          {exercise?.exercises?.map((exerciseValue, index) => (
            <div key={index} style={{ paddingTop: "10px" }}>
              <span>
                <FontAwesomeIcon
                  icon={faVolleyballBall}
                  style={{ color: "rgb(79 2 0)" }}
                />
              </span>
              <input
                type={"text"}
                className="inputWithoutBordersAll"
                value={exerciseValue}
                onChange={(e) => onChangeInput(e.target.value, index)}
              />
            </div>
          ))}
        </div>
        <div style={{ width: "100px" }}>
          <input
            type={"number"}
            value={exercise.steps}
            className="reverseInput"
            onChange={(e) => onChangeSteps(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="reverseText">Steps</label>
        </div>
      </div>
    </>
  );
}
