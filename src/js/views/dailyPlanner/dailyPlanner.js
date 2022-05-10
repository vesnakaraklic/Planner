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

export default function DailyPlanner() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { money, food } = useSelector((state) => state);

  const click = () => {
    console.log({ MoneyIn: money.moneyIn, MoneyOut: money.moneyOut });
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    dispatch(
      dataActions.update(
        "money",
        {
          moneyIn: money.moneyIn,
          moneyOut: money.moneyOut,
        },
        user.uid + date.getTime()
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
        user.uid + date.getTime()
      )
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
          onClick={click}
        >
          Save{" "}
        </NormalButton>
      </div>
    </>
  );
}
