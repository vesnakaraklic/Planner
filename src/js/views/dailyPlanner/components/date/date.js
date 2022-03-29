import React from "react";
import "./date.scss";

var day = "";
var month = "";
var date = new Date();

export default function DateHeader() {
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
    </>
  );
}
