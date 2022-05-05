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
import * as api from "../../api/money";
import * as apiUsers from "../../api/users";
import { dataActions } from "../../store/actions/data.actions";

export default function DailyPlanner() {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.money);
  const user = useSelector((state) => state.user.user);

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
          MoneyIn: money.moneyIn,
          MoneyOut: money.moneyOut,
        },
        user.uid + date.getTime()
      )
    );
  };
  const onCheck = () => {
    apiUsers.checkUser();
  };

  return (
    <>
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
        <button onClick={click}>CLick</button>
        <button onClick={onCheck}>chck</button>
      </div>
    </>
  );
}
