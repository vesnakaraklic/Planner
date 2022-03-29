import React from "react";
import "./money.scss";

export default function Money() {
  return (
    <>
      <div className="moneyForm">
        <div className="moneyIn moneyInputStyle">
          <label style={{ fontWeight: "bold", color: "#4f0000" }}>
            Money In:{" "}
          </label>
          <input
            style={{
              width: "150px",
              borderWidth: "0px",
              border: "none",
              backgroundColor: "f5efe3",
            }}
          ></input>
        </div>
        <div className="moneyOut moneyInputStyle">
          <label style={{ fontWeight: "bold", color: "#4f0000" }}>
            Money Out:{" "}
          </label>
          <input
            style={{
              width: "150px",
              borderWidth: "0px",
              border: "none",
              backgroundColor: "f5efe3",
            }}
          ></input>
        </div>
        <div className="moneyIn moneyInputStyle">
          <label style={{ fontWeight: "bold", color: "#4f0000" }}>
            Total:{" "}
          </label>
          <input
            style={{
              width: "150px",
              borderWidth: "0px",
              border: "none",
              backgroundColor: "f5efe3",
            }}
          ></input>
        </div>
      </div>
    </>
  );
}
