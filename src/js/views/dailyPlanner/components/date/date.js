import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/fontawesome-free-solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateActions } from "../../../../store/actions/date.actions";
import getDayFromDate from "../../../../utils/getDayFromDate";
import getMonthFromDate from "../../../../utils/getMonthFromDate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getDateWithoutHours from "../../../../utils/getDateWithoutHours";
import "./date.scss";

export default function DateHeader() {
  const dateRedux = useSelector((state) => state.datePicker.date);
  const date = new Date(dateRedux);
  const [startDate, setStartDate] = useState(date);
  const [clicked, setClicked] = useState(false);
  var month = getMonthFromDate(date);
  var day = getDayFromDate(date);
  const dispatch = useDispatch();

  const onClickDatePicker = () => {
    setClicked(!clicked);
  };

  const onChangeDatePicker = (selectedDate) => {
    setStartDate(selectedDate);
    setClicked(!clicked);
  };

  useEffect(() => {
    dispatch(dateActions.updateDate(getDateWithoutHours(startDate)));
  }, [startDate]);

  useEffect(() => {
    setStartDate(new Date(dateRedux));
  }, []);

  return (
    <>
      <div className="dateForm">
        <p className="dayName">{day}</p>
        <div className="dateInputForm">
          <div className="dateStyle">
            {" "}
            Date: {month} {date.getDate()} , {date.getFullYear()}
            <button onClick={onClickDatePicker} className="buttonDatePicker">
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={{ color: "#4f0200" }}
              />
            </button>
            <DatePicker
              selected={startDate}
              open={clicked}
              onChange={(selectedDate) => onChangeDatePicker(selectedDate)}
              className="datePicker"
            />
          </div>
          <p className="note">
            Note: <input type="text" className="inputWithoutBorders" />
          </p>
        </div>
      </div>
    </>
  );
}
