import React from "react";
import {
  faFish,
  faMugHot,
  faPizzaSlice,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./food.scss";

export default function Food() {
  return (
    <>
      <div className="foodForm">
        <div className="foodBorder">
          <FontAwesomeIcon className="mealIcon" icon={faPizzaSlice} />
          <input placeholder="Breakfast" className="mealInput"></input>
        </div>
        <div className="foodBorder">
          <FontAwesomeIcon className="mealIcon" icon={faHamburger} />
          <input placeholder="Lunch" className="mealInput"></input>
        </div>
        <div className="foodBorder">
          <FontAwesomeIcon className="mealIcon" icon={faFish} />
          <input placeholder="Dinner" className="mealInput"></input>
        </div>
        <div className="foodBorder">
          <FontAwesomeIcon className="mealIcon" icon={faMugHot} />
          <input placeholder="Snack" className="mealInput"></input>
        </div>
      </div>
    </>
  );
}
