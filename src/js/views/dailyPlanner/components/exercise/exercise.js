import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { exerciseActions } from "../../../../store/actions/exercise.actions";
import getDateWithoutHours from "../../../../utils/getDateWithoutHours";
import "./exercise.scss";

const array5 = [1, 2, 3, 4, 5];

export default function Exercise() {
  const user = useSelector((state) => state.user.user);
  const dateRedux = useSelector((state) => state.datePicker.date);
  const exercise = useSelector((state) => state.exercise);
  const dispatch = useDispatch();

  const onChange = (value, number) => {
    dispatch(exerciseActions[`updateExercise_${number}`](value));
  };

  const onChangeSteps = (value) => {
    dispatch(exerciseActions.updateSteps(value));
  };

  useEffect(() => {
    const date = getDateWithoutHours(dateRedux);
    let idUser = user.uid + date;
    dispatch(exerciseActions.getExerciseById(idUser));
  }, []);

  return (
    <>
      <label className="labelStyle">Exercise & Health </label>
      <div className="exerciseForm">
        <div>
          {array5.map((number) => (
            <div style={{ paddingTop: "10px" }} key={"exercise" + number}>
              <span>
                <FontAwesomeIcon
                  icon={faVolleyballBall}
                  style={{ color: "rgb(79 2 0)" }}
                />
              </span>

              <input
                type={"text"}
                className="inputWithoutBordersAll"
                value={exercise[`exercise_${number}`]}
                onChange={(e) => onChange(e.target.value, number)}
              ></input>
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
