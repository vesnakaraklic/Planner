import React, { useEffect } from "react";
import { Date } from "globalthis/implementation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getUsers } from "../actions/users";
import { useDispatch, useSelector } from "react-redux";

var day = "Hello";
var month = "";
var date = new Date();
const hours = [
  "06:00 AM",
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 PM",
];

const array3 = [0, 1, 2];

const array5 = [0, 1, 2, 3, 4];

const array8 = [0, 1, 2, 3, 4, 5, 6, 7];

export default function AddToPlanner() {
  const dispatch = useDispatch();
  //const userList = useSelector(state => state.user.users)

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

  console.log(new Date().getMonth());

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
        <form className="checkboxForm">
          <h4 style={{ marginLeft: "10px", marginBottom: "0px" }}>
            3 Priorities
          </h4>
          <br></br>
          <div>
            {array3.map((number) => (
              <div key={"array3" + number} style={{ marginBottom: "10px" }}>
                <input type="checkbox" />
                <input className="checkboxInput"></input>
              </div>
            ))}
          </div>
          <br></br>
          <h4 style={{ marginLeft: "10px", marginBottom: "0px" }}>
            To Do List
          </h4>
          <br></br>
          <div>
            {array8.map((number) => (
              <div key={"array8" + number} style={{ marginBottom: "10px" }}>
                <input type="checkbox" />
                <input className="checkboxInput"></input>
              </div>
            ))}
          </div>
        </form>
        <div>
          <form className="timeForm">
            <h4 style={{ marginLeft: "30px", marginBottom: "0px" }}>
              Plans & Schedules
            </h4>
            <br></br>
            <div>
              {hours.map((hour, index) => (
                <div key={hour + index} style={{ marginBottom: "5px" }}>
                  <label style={{ margin: "10px" }}>{hour}</label>
                  <input className="timeInput"></input>
                </div>
              ))}
            </div>
          </form>
        </div>
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
      </div>
    </>
  );
}
