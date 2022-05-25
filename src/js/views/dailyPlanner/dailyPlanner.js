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
import { dateActions } from "../../store/actions/date.actions";
import getNextDate from "../../utils/getNextDate";
import getPreviousDate from "../../utils/getPreviousDate";
import { moneyActions } from "../../store/actions/money.actions";
import { exerciseActions } from "../../store/actions/exercise.actions";
import { foodActions } from "../../store/actions/food.actions";
import { waterActions } from "../../store/actions/water.actions";
import { plansActions } from "../../store/actions/plans.actions";
import "./dailyPlanner.scss";
import ArrowButtons from "../../components/arrowButtons/arrowButtons";
import { prioritiesActions } from "../../store/actions/priorities.actions";

export default function DailyPlanner() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { money, food, waterDrink, exercise, plans, priorities } = useSelector(
    (state) => state
  );
  const dateRedux = useSelector((state) => state.datePicker.date);
  // const [dateToDisplay, setDateToDisplay] = useState(dateRedux);

  const onSaveDaily = () => {
    const date = getDateWithoutHours(dateRedux);
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
    dispatch(
      dataActions.update(
        "priorities",
        {
          firstPriority: priorities.firstPriority,
          secondPriority: priorities.secondPriority,
          thirdPriority: priorities.thirdPriority,
        },
        user.uid + date
      )
    );
  };

  const onClickRightArrow = () => {
    // setDateToDisplay(getNextDate(dateToDisplay));
    dispatch(dateActions.updateDate(getNextDate(dateRedux)));
  };

  const onClickLeftArrow = () => {
    // setDateToDisplay(getPreviousDate(dateToDisplay));
    dispatch(dateActions.updateDate(getPreviousDate(dateRedux)));
  };

  const onClickTodayDate = () => {
    // setDateToDisplay(getDateWithoutHours(new Date()));
    dispatch(dateActions.updateDate(getDateWithoutHours(new Date())));
  };

  useEffect(() => {
    dispatch(moneyActions.getMoneyById(user.uid + dateRedux));
    dispatch(exerciseActions.getExerciseById(user.uid + dateRedux));
    dispatch(foodActions.getFoodById(user.uid + dateRedux));
    dispatch(waterActions.getWaterById(user.uid + dateRedux));
    dispatch(plansActions.getPlansById(user.uid + dateRedux));
  }, [dateRedux]);

  return (
    <>
      <div className="dailyViewFrame">
        <div className="dailyPlannerFrame">
          <div className="dailyPlannerform1">
            <DateHeader />
            <div className="checkBox">
              <ToDoList />
              <Plans plans={plans} date={dateRedux}></Plans>
            </div>
          </div>
          <div className="dailyPlannerform2">
            <ArrowButtons
              onClickLeftArrow={onClickLeftArrow}
              onClickRightArrow={onClickRightArrow}
              onClickTodayDate={onClickTodayDate}
            />

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
          Save
        </NormalButton>
      </div>
    </>
  );
}
