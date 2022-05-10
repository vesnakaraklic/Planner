import React from "react";
import "./switchtab.scss";
import SmallButton from "../SmallButton/SmallButton";

export default function Switchtab({ options, active, setActive }) {
  return (
    <>
      <div className="buttonView">
        {options.map((option) => {
          return (
            <SmallButton
              className={`btnView ${
                active === option.key ? "activeButton" : ""
              }`}
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
