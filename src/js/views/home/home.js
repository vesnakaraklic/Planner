import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Switchtab from "../../components/switchtab/switchtab";
import DailyPlanner from "../dailyPlanner/dailyPlanner";
import WeeklyPlanner from "../weeklyPlanner/weeklyPlanner";
import MonthlyPlanner from "../monthlyPlanner/monthlyPlanner";
import DatePicker from "../datePicker/datePicker";
import "./home.scss";

export default function Home() {
  const [currentActive, setCurrentActive] = useState(1);
  const optionsArray = [
    { key: 1, label: "Daily" },
    { key: 2, label: "Weekly" },
    { key: 3, label: "Monthly" },
    { key: 4, label: "DatePicker" },
  ];

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
