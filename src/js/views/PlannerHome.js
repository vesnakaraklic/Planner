import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useHistory } from "react-router-dom";
import Calendar from "../components/calendar/calendar";

export default function PlannerHome() {
  const [showResults, setShowResults] = React.useState(false);
  const history = useHistory();
  const [value, onChange] = useState(new Date());
  const onClick = () => {
    setShowResults(true);
    history.push("/dailyPlanner");
  };
  return (
    <>
      <div className="calendar-position">
        <button className="add-button" onClick={onClick}>
          Add
        </button>
        {!showResults ? (
          // <Calendar className="react-calendar react-calendar__tile"></Calendar>
          <Calendar onChange={onChange} value={value} />
        ) : null}
      </div>
    </>
  );
}
