import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useHistory } from "react-router-dom";

export default function PlannerHome() {
  const [showResults, setShowResults] = React.useState(false);
  const history = useHistory();

  const onClick = () => {
    setShowResults(true);
    history.push("/addToPlanner");
  };
  return (
    <>
      <div className="calendar-position">
        <button className="add-button" onClick={onClick}>
          Add
        </button>
        {!showResults ? (
          <Calendar className="react-calendar react-calendar__tile"></Calendar>
        ) : null}
      </div>
    </>
  );
}
