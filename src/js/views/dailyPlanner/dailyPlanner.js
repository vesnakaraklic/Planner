import React, { useEffect } from "react";
import ToDoList from "./components/toDoList/toDoList";
import { useDispatch, useSelector } from "react-redux";
import Plans from "./components/plans/plans";
import DateHeader from "./components/date/date";
import Money from "./components/money/money";
import Food from "./components/food/food";
import Water from "./components/water/water";
import Exercise from "./components/exercise/exercise";
import { dataActions } from "../../store/actions/data.actions";
import NormalButton from "../../components/normalButton/normalButton";
import getDateWithoutHours from "../../utils/getDateWithoutHours";
import { dateActions } from "../../store/actions/date.actions";
import getNextDate from "../../utils/getNextDate";
import getPreviousDate from "../../utils/getPreviousDate";
import { moneyActions } from "../../store/actions/money.actions";
import { exerciseActions } from "../../store/actions/exercise.actions";
import { foodActions } from "../../store/actions/food.actions";
import { waterActions } from "../../store/actions/water.actions";
import { plansActions } from "../../store/actions/plans.actions";
import ArrowButtons from "../../components/arrowButtons/arrowButtons";
import { prioritiesActions } from "../../store/actions/priorities.actions";
import { toDoActions } from "../../store/actions/toDo.actions";
import "./dailyPlanner.scss";
import { noteActions } from "../../store/actions/note.actions";

export default function DailyPlanner() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { money, food, waterDrink, exercise, plans, priorities, toDo, note } =
    useSelector((state) => state);
  const dateRedux = useSelector((state) => state.datePicker.date);

  const onSaveDaily = () => {
    const date = getDateWithoutHours(dateRedux);
    dispatch(dataActions.update("money", { ...money }, user.uid + date));
    dispatch(dataActions.update("food", { ...food }, user.uid + date));
    dispatch(
      dataActions.update("water", { water: waterDrink.water }, user.uid + date)
    );
    dispatch(dataActions.update("plans", { ...plans }, user.uid + date));
    dispatch(dataActions.update("exercise", { ...exercise }, user.uid + date));
    dispatch(
      dataActions.update("priorities", { ...priorities }, user.uid + date)
    );
    dispatch(dataActions.update("toDo", { ...toDo }, user.uid + date));
    dispatch(dataActions.update("note", { note: note.note }, user.uid + date));
  };

  const onClickRightArrow = () => {
    dispatch(dateActions.updateDate(getNextDate(dateRedux)));
  };

  const onClickLeftArrow = () => {
    dispatch(dateActions.updateDate(getPreviousDate(dateRedux)));
  };

  const onClickTodayDate = () => {
    dispatch(dateActions.updateDate(getDateWithoutHours(new Date())));
  };

  useEffect(() => {
    if (user.uid && dateRedux) {
      dispatch(plansActions.getPlansById(user.uid + dateRedux));
      dispatch(moneyActions.getMoneyById(user.uid + dateRedux));
      dispatch(exerciseActions.getExerciseById(user.uid + dateRedux));
      dispatch(foodActions.getFoodById(user.uid + dateRedux));
      dispatch(waterActions.getWaterById(user.uid + dateRedux));
      dispatch(prioritiesActions.getPrioritiesById(user.uid + dateRedux));
      dispatch(toDoActions.getToDoById(user.uid + dateRedux));
      dispatch(noteActions.getNoteById(user.uid + dateRedux));
    }
  }, [dateRedux, user]);

  return (
    <>
      <div className="dailyViewFrame">
        <div className="dailyPlannerFrame">
          <div className="dailyPlannerform1">
            {console.log("LLLLL", note)}
            <DateHeader note={note.note} />
            <div className="checkBox">
              <ToDoList priorities={priorities} toDo={toDo} />
              <Plans plans={plans}></Plans>
            </div>
          </div>
          <div className="dailyPlannerform2">
            <ArrowButtons
              onClickLeftArrow={onClickLeftArrow}
              onClickRightArrow={onClickRightArrow}
              onClickTodayDate={onClickTodayDate}
            />

            <Money moneyIn={money.moneyIn} moneyOut={money.moneyOut} />
            <div className="shadowLine" />
            <Food food={food} />
            <div
              style={{
                borderBottom: "2px solid #4f0000",
                margin: "10px",
                width: "100%",
              }}
            ></div>
            <Water water={waterDrink} />
            <Exercise exercise={exercise} />
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
