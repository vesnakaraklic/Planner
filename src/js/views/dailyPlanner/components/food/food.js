import React from "react";
import { faCoffee, faBacon, faFish } from "@fortawesome/free-solid-svg-icons";
import { GiChickenOven } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./food.scss";

export default function Food() {
  return (
    <>
      <div className="foodForm">
        <div className="foodBorder">
          {/* <label className="mealLetter">B:</label> */}
          <FontAwesomeIcon className="mealLetter" icon={faBacon} />
          <input placeholder="Breakfast" className="mealInput"></input>
        </div>
        <div className="foodBorder">
          {/* <label className="mealLetter">L:</label> */}
          <GiChickenOven className="mealLetter" />
          <input placeholder="Lunch" className="mealInput"></input>
        </div>
        <div className="foodBorder">
          {/* <label className="mealLetter">D:</label> */}
          <FontAwesomeIcon className="mealLetter" icon={faFish} />
          <input placeholder="Dinner" className="mealInput"></input>
        </div>
        <div className="foodBorder">
          {/* <label className="mealLetter">S:</label> */}
          <FontAwesomeIcon className="mealLetter" icon={faCoffee} />
          <input placeholder="Snack" className="mealInput"></input>
        </div>
      </div>
    </>
  );
}
