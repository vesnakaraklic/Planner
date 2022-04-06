import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import DailyPlanner from "../dailyPlanner/dailyPlanner";
import SmallButton from "../../components/SmallButton/SmallButton";
import WeeklyPlanner from "../weeklyPlanner/weeklyPlanner";
import "./plannerHome.scss";
import { useHistory } from "react-router-dom";

export default function PlannerHome() {
  const history = useHistory();
  const [isDaily, setIsDaily] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);

  const onClickDaily = () => {
    setIsDaily(true);
    setIsWeekly(false);
  };

  const onClickWeekly = () => {
    setIsWeekly(true);
    setIsDaily(false);
  };

  return (
    <>
      <div className="bckImage">
        <div className="sidebarDirection">
          <Sidebar />
          <div className="buttonsDirection">
            <div className="buttonView">
              <SmallButton
                className={"btnView"}
                buttonName={"Daily"}
                onClick={onClickDaily}
              />
              <SmallButton
                className={"btnView"}
                buttonName={"Weekly"}
                onClick={onClickWeekly}
              />
              <SmallButton
                className={"btnView"}
                buttonName={"Calendar"}
                onClick={onClickDaily}
              />
            </div>
            <div>{isDaily && <DailyPlanner />}</div>
            <div>{isWeekly && <WeeklyPlanner />}</div>
          </div>
        </div>
      </div>
    </>
  );
}
