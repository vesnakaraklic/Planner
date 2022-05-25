import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Switchtab from "../../components/switchtab/switchtab";
import DailyPlanner from "../../views/dailyPlanner/dailyPlanner";
import WeeklyPlanner from "../../views/weeklyPlanner/weeklyPlanner";
import MonthlyPlanner from "../../views/monthlyPlanner/monthlyPlanner";
import DatePicker from "../datePicker/datePicker";
import "./plannerHome.scss";

export default function PlannerHome() {
  const [currentActive, setCurrentActive] = useState(0);
  const optionsArray = [
    { key: 1, label: "Daily" },
    { key: 2, label: "Weekly" },
    { key: 3, label: "Monthly" },
    { key: 4, label: "DatePicker" },
  ];

  useEffect(() => {
    setCurrentActive(1);
  }, []);

  return (
    <>
      <div className="bckImage">
        <div className="sidebarDirection">
          <Sidebar />
          <div className="buttonsDirection">
            <Switchtab
              options={optionsArray}
              active={currentActive}
              setActive={setCurrentActive}
            />
            {currentActive === 1 && <DailyPlanner />}
            {currentActive === 2 && <WeeklyPlanner />}
            {currentActive === 3 && <MonthlyPlanner />}
            {currentActive === 4 && <DatePicker />}
          </div>
        </div>
      </div>
    </>
  );
}
