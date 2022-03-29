import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToDoList from "./components/toDoList/toDoList";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getUsers } from "../../actions/users";
import { useDispatch } from "react-redux";
import Plans from "./components/plans/plans";
import "./dailyPlanner.scss";
import DateHeader from "./components/date/date";
import Money from "./components/money/money";
import Food from "./components/food/food";

const array5 = [0, 1, 2, 3, 4];

export default function DailyPlanner() {
  const dispatch = useDispatch();
  //const userList = useSelector(state => state.user.users)

  useEffect(() => {
    getUsers(dispatch);
  });

  return (
    <>
      <div className="gggg">
        <div className="dailyPlannerform">
          <DateHeader />
          <div className="checkBox">
            <ToDoList />
            <Plans></Plans>
          </div>
        </div>
        <div className="dailyPlannerform1">
          <Money />
          <Food />
          <div style={{ borderBottom: "2px solid #4f0000" }}></div>

          <div className="exerciseAndHealthForm">
            <div className="exercisePart">
              <label style={{ fontWeight: "bold", paddingLeft: "98px" }}>
                Exercise & Health{" "}
              </label>
              <br></br>
              <div>
                {array5.map((number) => (
                  <div style={{ paddingTop: "10px" }} key={"array5" + number}>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#ea4c89" }}
                      />
                    </span>

                    <input className="inputWithoutBordersAll"></input>
                  </div>
                ))}
              </div>
            </div>
            <div className="reverseInputForm">
              <input className="reverseInput"></input>
            </div>
            <div className="steps">
              <label className="reverseText">Steps</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
