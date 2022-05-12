import React, { useEffect } from "react";
import ToDoList from "./components/toDoList/toDoList";
import { useDispatch, useSelector } from "react-redux";
import Plans from "./components/plans/plans";
import DateHeader from "./components/date/date";
import Money from "./components/money/money";
import Food from "./components/food/food";
import Water from "./components/water/water";
import Exercise from "./components/exercise/exercise";
import "./dailyPlanner.scss";
import { dataActions } from "../../store/actions/data.actions";
import NormalButton from "../../components/NormalButton/NormalButton";
import getDateWithoutHours from "../../utils/getDateWithoutHours";

export default function DailyPlanner() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { money, food, waterDrink } = useSelector((state) => state);
  const dateRedux = useSelector((state) => state.datePicker.date);

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
  };

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
