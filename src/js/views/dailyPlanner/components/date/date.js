import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateActions } from "../../../../store/actions/date.actions";
import getDayFromDate from "../../../../utils/getDayFromDate";
import getMonthFromDate from "../../../../utils/getMonthFromDate";
import "./date.scss";

export default function DateHeader() {
  const dateRedux = useSelector((state) => state.datePicker.date);
  const date = new Date(dateRedux);
  var day = getDayFromDate(new Date(date));
  var month = getMonthFromDate(new Date(date));

  return (
    <>
      <div className="dateForm">
        <p className="dayName"> {day}</p>
        <div className="dateInputForm">
          <p className="dateStyle">
            {" "}
            Date: {month} {date.getDate()} , {date.getFullYear()}
          </p>
          <p className="note">
            Note: <input type="text" className="inputWithoutBorders" />
          </p>
        </div>
      </div>
    </>
  );
}
