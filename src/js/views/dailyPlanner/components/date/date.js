import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/fontawesome-free-solid";
import { useDispatch, useSelector } from "react-redux";
import { dateActions } from "../../../../store/actions/date.actions";
import getDayFromDate from "../../../../utils/getDayFromDate";
import getMonthFromDate from "../../../../utils/getMonthFromDate";
import DatePicker from "react-datepicker";
import { noteActions } from "../../../../store/actions/note.actions";
import getDateWithoutHours from "../../../../utils/getDateWithoutHours";
import "react-datepicker/dist/react-datepicker.css";
import "./date.scss";

export default function DateHeader({ note = "" }) {
  const dateRedux = useSelector((state) => state.datePicker.date);
  const date = new Date(dateRedux);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const onClickDatePicker = () => {
    setClicked(!clicked);
  };

  const onChangeDatePicker = (selectedDate) => {
    setClicked(!clicked);
    dispatch(dateActions.updateDate(getDateWithoutHours(selectedDate)));
  };

  const onChangeNote = (value) => {
    dispatch(noteActions.updateNote(value));
  };

  return (
    <>
      <div className="dateForm">
        <p className="dayName">{getDayFromDate(date)}</p>
        <div className="dateInputForm">
          <div className="dateStyle">
            {" "}
            Date: {getMonthFromDate(date)} {date.getDate()} ,{" "}
            {date.getFullYear()}
            <button onClick={onClickDatePicker} className="buttonDatePicker">
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={{ color: "#4f0200" }}
              />
            </button>
            <DatePicker
              selected={new Date(dateRedux)}
              open={clicked}
              onChange={(selectedDate) => onChangeDatePicker(selectedDate)}
              className="datePicker"
            />
          </div>
          <p className="note">
            Note:{" "}
            <input
              type="text"
              value={note}
              onChange={(e) => onChangeNote(e.target.value)}
              className="inputWithoutBorders"
            />
          </p>
        </div>
      </div>
    </>
  );
}
