import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import DailyPlanner from "../dailyPlanner/dailyPlanner";
import SmallButton from "../../components/SmallButton/SmallButton";
import "./plannerHome.scss";

export default function PlannerHome() {
  const onClick = () => {
    console.log("bbebbebeb");
  };
  return (
    <>
      <div className="bckImage">
        <div className="direction">
          <Sidebar />
          <div className="direction1">
            <div className="buttonView">
              <SmallButton
                className={"btnView"}
                buttonName={"Daily"}
                onClick={onClick}
              />
              <SmallButton
                className={"btnView"}
                buttonName={"Monthly"}
                onClick={onClick}
              />
              <SmallButton
                className={"btnView"}
                buttonName={"Calendar"}
                onClick={onClick}
              />
            </div>
            <DailyPlanner />
          </div>
        </div>
      </div>
    </>
  );
}
