import React, { useEffect, useState } from "react";
import ToDoList from "./components/toDoList/toDoList";
import { useDispatch, useSelector } from "react-redux";
import Plans from "./components/plans/plans";
import DateHeader from "./components/date/date";
import Money from "./components/money/money";
import Food from "./components/food/food";
import Water from "./components/water/water";
import Exercise from "./components/exercise/exercise";
import { dataActions } from "../../store/actions/data.actions";
import NormalButton from "../../components/NormalButton/NormalButton";
import getDateWithoutHours from "../../utils/getDateWithoutHours";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./dailyPlanner.scss";
import { dateActions } from "../../store/actions/date.actions";
import getNextDate from "../../utils/getNextDate";
import getPreviousDate from "../../utils/getPreviousDate";
import { moneyActions } from "../../store/actions/money.actions";
import { exerciseActions } from "../../store/actions/exercise.actions";
import { foodActions } from "../../store/actions/food.actions";
import { waterActions } from "../../store/actions/water.actions";
import { plansActions } from "../../store/actions/plans.actions";

export default function DailyPlanner() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { money, food, waterDrink, exercise, plans } = useSelector(
    (state) => state
  );
  const dateRedux = useSelector((state) => state.datePicker.date);
  const [dateToDisplay, setDateToDisplay] = useState(dateRedux);

  const onSaveDaily = () => {
    const date = getDateWithoutHours(dateToDisplay);
    dispatch(
      dataActions.update(
        "money",
        {
          moneyIn: money.moneyIn,
          moneyOut: money.moneyOut,
        },
        user.uid + date
      )
    );

    dispatch(
      dataActions.update(
        "food",
        {
          breakfast: food.breakfast,
          lunch: food.lunch,
          dinner: food.dinner,
          snack: food.snack,
        },
        user.uid + date
      )
    );

    dispatch(
      dataActions.update("water", { water: waterDrink.water }, user.uid + date)
    );

    dispatch(dataActions.update("plans", { ...plans }, user.uid + date));

    dispatch(
      dataActions.update(
        "exercise",
        {
          exercise_1: exercise.exercise_1,
          exercise_2: exercise.exercise_2,
          exercise_3: exercise.exercise_3,
          exercise_4: exercise.exercise_4,
          exercise_5: exercise.exercise_5,
          steps: exercise.steps,
        },
        user.uid + date
      )
    );
  };

  const onClickRightArrow = () => {
    setDateToDisplay(getNextDate(dateToDisplay));
    dispatch(dateActions.updateDate(getNextDate(dateToDisplay)));
  };

  const onClickLeftArrow = () => {
    setDateToDisplay(getPreviousDate(dateToDisplay));
    dispatch(dateActions.updateDate(getPreviousDate(dateToDisplay)));
  };

  const onClickTodayDate = () => {
    setDateToDisplay(getDateWithoutHours(new Date()));
    dispatch(dateActions.updateDate(getDateWithoutHours(new Date())));
  };

  useEffect(() => {
    dispatch(moneyActions.getMoneyById(user.uid + dateToDisplay));
    dispatch(exerciseActions.getExerciseById(user.uid + dateToDisplay));
    dispatch(foodActions.getFoodById(user.uid + dateToDisplay));
    dispatch(waterActions.getWaterById(user.uid + dateToDisplay));
    dispatch(plansActions.getPlansById(user.uid + dateToDisplay));
  }, [dateToDisplay]);

  return (
    <>
      <div className="dailyViewFrame">
        <div className="dailyPlannerFrame">
          <div className="dailyPlannerform1">
            <DateHeader />
            <div className="checkBox">
              <ToDoList />
              <Plans></Plans>
            </div>
          </div>
          <div className="dailyPlannerform2">
            <div className="buttonArrow">
              {" "}
              <button className="buttonArrowStyle" onClick={onClickLeftArrow}>
                {" "}
                <FontAwesomeIcon icon={faArrowLeft} />{" "}
              </button>
              <button className="buttonArrowStyle" onClick={onClickRightArrow}>
                {" "}
                <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
              <button
                className="buttonArrowStyle buttonTodayStyle"
                onClick={onClickTodayDate}
              >
                {" "}
                Today{" "}
              </button>
            </div>

            <Money />
            <div className="shadowLine" />
            <Food />
            <div
              style={{
                borderBottom: "2px solid #4f0000",
                margin: "10px",
                width: "100%",
              }}
            ></div>
            <Water />
            <Exercise />
          </div>
        </div>
        <NormalButton
          className="saveButton"
          buttonName={"Save"}
          onClick={onSaveDaily}
        >
          Save{" "}
        </NormalButton>
      </div>
    </>
  );
}
