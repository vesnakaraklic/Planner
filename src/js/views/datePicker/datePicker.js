import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { GiNotebook } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { dateActions } from "../../store/actions/date.actions";
import getDateWithoutHours from "../../utils/getDateWithoutHours";
import getDayFromDate from "../../utils/getDayFromDate";
import "./datePicker.scss";

export default function DatePicker() {
  const dateRedux = useSelector((state) => state.datePicker.date);
  const [selectedDate, setSelectedDate] = useState(new Date(dateRedux));
  const dispatch = useDispatch();
  var day = getDayFromDate(selectedDate);

  const onChange = (date) => {
    setSelectedDate(date);
    dispatch(dateActions.updateDate(getDateWithoutHours(date)));
  };

  return (
    <>
      <div className="monthlyFrame">
        <Calendar onChange={onChange} defaultValue={new Date(dateRedux)} />
        <div className="monthlyDayPreview">
          <p className="dateStyleMonthly">{selectedDate.getDate()}</p>
          <p className="dayStyle">{day}</p>
          <div className="notebookIconFrame">
            <GiNotebook className="notebookIconStyle" />
            <GiNotebook className="notebookIconStyle" />
            <GiNotebook className="notebookIconStyle" />
          </div>
        </div>
      </div>
    </>
  );
}
