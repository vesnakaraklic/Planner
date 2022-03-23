import React from "react";
import { Calendar as CalendarReact } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.scss";

export default function Calendar() {
  return (
    <>
      <CalendarReact
        onChange={(event) => console.log(new Date(event.getTime()))}
      />
    </>
  );
}
