import React, { useEffect } from "react";
import { Date } from "globalthis/implementation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToDoList from "./components/toDoList/toDoList";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getUsers } from "../../actions/users";
import { useDispatch } from "react-redux";
import Plans from "./components/plans/plans";
import { useHistory } from "react-router-dom";

var day = "";
var month = "";
var date = new Date();

const array3 = [0, 1, 2];

const array5 = [0, 1, 2, 3, 4];

const array8 = [0, 1, 2, 3, 4, 5, 6, 7];

export default function DailyPlanner() {
  const dispatch = useDispatch();
  //const userList = useSelector(state => state.user.users)
  const history = useHistory();

  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
      day = "";
  }

  switch (new Date().getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "Marth";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "";
  }

  const backToPlannerHome = () => {
    history.push("/plannerHome");
  };

  useEffect(() => {
    getUsers(dispatch);
  });

  return (
    <>
      <div className="parent">
        <p className="dayName"> {day}</p>
        <p className="dateStyle">
          {" "}
          Date: {month} {date.getDate()} , {date.getFullYear()}
        </p>
        <p className="note">
          Note: <input className="inputWithoutBorders" />
        </p>
      </div>
      <div className="checkBox">
        <ToDoList />
        <Plans></Plans>
      </div>
      <br></br>
      <form className="moneyForm">
        <div className="moneyIn moneyInputStyle">
          <label style={{ fontWeight: "bold" }}>Money In: </label>
          <input
            style={{ width: "150px", borderWidth: "0px", border: "none" }}
          ></input>
        </div>
        <div className="moneyOut moneyInputStyle">
          <label style={{ fontWeight: "bold" }}>Money Out: </label>
          <input
            style={{ width: "150px", borderWidth: "0px", border: "none" }}
          ></input>
        </div>
      </form>
      <br></br>
      <form className="plannerFooter">
        <div className="breakfast">
          <label className="mealLetter">B:</label>
          <input className="mealInput"></input>
        </div>
        <div className="lunch">
          <label className="mealLetter">L:</label>
          <input className="mealInput"></input>
        </div>
        <div className="dinner">
          <label className="mealLetter">D:</label>
          <input className="mealInput"></input>
        </div>
        <div className="snack">
          <label className="mealLetter">S:</label>
          <input className="mealInput"></input>
        </div>
      </form>
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
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ea4c89" }} />
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
        <button onClick={backToPlannerHome}>Back</button>
      </div>
    </>
  );
}
