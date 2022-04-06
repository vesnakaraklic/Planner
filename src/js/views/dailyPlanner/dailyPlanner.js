import React, { useEffect } from "react";
import ToDoList from "./components/toDoList/toDoList";
import { getUsers } from "../../actions/users";
import { useDispatch } from "react-redux";
import Plans from "./components/plans/plans";
import DateHeader from "./components/date/date";
import Money from "./components/money/money";
import Food from "./components/food/food";
import Water from "./components/water/water";
import Exercise from "./components/exercise/exercise";
import "./dailyPlanner.scss";

export default function DailyPlanner() {
  const dispatch = useDispatch();
  //const userList = useSelector(state => state.user.users)

  useEffect(() => {
    getUsers(dispatch);
  });

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
            style={{ borderBottom: "2px solid #4f0000", margin: "10px" }}
          ></div>

          <Water />
          <Exercise />
        </div>
      </div>
    </>
  );
}
