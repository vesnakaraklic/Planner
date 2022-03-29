import React from "react";
import "./food.scss";

export default function Food() {
  return (
    <>
      <div className="foodForm">
        {/* <div className="plannerFooter"> */}
        <div className="foodBorder">
          <label className="mealLetter">B:</label>
          <input className="mealInput"></input>
        </div>
        <div className="foodBorder">
          <label className="mealLetter">L:</label>
          <input className="mealInput"></input>
        </div>
        <div className="foodBorder">
          <label className="mealLetter">D:</label>
          <input className="mealInput"></input>
        </div>
        <div className="foodBorder">
          <label className="mealLetter">S:</label>
          <input className="mealInput"></input>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
