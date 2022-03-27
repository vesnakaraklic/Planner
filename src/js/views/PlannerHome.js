import React from "react";
import { useHistory } from "react-router-dom";
import Calendar from "../components/calendar/calendar";
import "react-calendar/dist/Calendar.css";
import Sidebar from "../components/sidebar/sidebar";

const PlannerHome = () => {
  const history = useHistory();

  const onClick = () => {
    history.push("/dailyPlanner");
  };

  return (
    <>
      <Sidebar />
      <div className="calendar-position">
        <button className="add-button" onClick={onClick}>
          Add
        </button>
        <Calendar />
      </div>
    </>
  );
};
export default PlannerHome;
