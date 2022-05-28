import React from "react";
import "./switchtab.scss";
import SmallButton from "../smallButton/smallButton";

export default function Switchtab({ options, active, setActive, buttonClass }) {
  return (
    <>
      <div className="switchtab-wrapper">
        {options.map((option) => {
          return (
            <SmallButton
              className={`switchtab-button ${
                active === option.key ? "activeButton" : ""
              } ${buttonClass}`}
              buttonName={option.label}
              onClick={() => setActive(option.key)}
              key={option.key}
            />
          );
        })}
      </div>
    </>
  );
}
