import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./exercise.scss";

const array5 = [0, 1, 2, 3, 4];

export default function Exercise() {
  return (
    <>
      <label className="labelStyle">Exercise & Health </label>
      <div className="exerciseForm">
        <div>
          {array5.map((number) => (
            <div style={{ paddingTop: "10px" }} key={"array5" + number}>
              <span>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "rgb(79 2 0)" }}
                />
              </span>

              <input className="inputWithoutBordersAll"></input>
            </div>
          ))}
        </div>
        <div style={{ width: "100px" }}>
          <input className="reverseInput"></input>
        </div>
        <div>
          <label className="reverseText">Steps</label>
        </div>
      </div>
    </>
  );
}
