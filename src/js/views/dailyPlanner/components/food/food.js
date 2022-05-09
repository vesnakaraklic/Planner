import React, { useEffect } from "react";
import {
  faFish,
  faMugHot,
  faPizzaSlice,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./food.scss";
import { useDispatch, useSelector } from "react-redux";
import { foodActions } from "../../../../store/actions/food.actions";

export default function Food() {
  const dispatch = useDispatch();
  const breakfast = useSelector((state) => state.food.breakfast);
  const lunch = useSelector((state) => state.food.lunch);
  const dinner = useSelector((state) => state.food.dinner);
  const snack = useSelector((state) => state.food.snack);
  const user = useSelector((state) => state.user.user);

  const setBreakfast = (value) => {
    dispatch(foodActions.updateBreakfast(value));
  };

  const setLunch = (value) => {
    dispatch(foodActions.updateLunch(value));
  };

  const setDinner = (value) => {
    dispatch(foodActions.updateDinner(value));
  };

  const setSnack = (value) => {
    dispatch(foodActions.updateSnack(value));
  };

  useEffect(() => {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    let idUser = user.uid + date.getTime();
    dispatch(foodActions.getFoodById(idUser));
  }, []);

  return (
    <>
      <div className="foodForm">
        <div className="foodBorder">
          <FontAwesomeIcon className="mealIcon" icon={faPizzaSlice} />
          <input
            type={"text"}
            value={breakfast}
            onChange={(e) => {
              setBreakfast(e.target.value);
            }}
            placeholder="Breakfast"
            className="mealInput"
            maxLength={15}
          ></input>
        </div>
        <div className="foodBorder">
          <FontAwesomeIcon className="mealIcon" icon={faHamburger} />
          <input
            type={"text"}
            value={lunch}
            placeholder="Lunch"
            onChange={(e) => setLunch(e.target.value)}
            className="mealInput"
            maxLength={15}
          ></input>
        </div>
        <div className="foodBorder">
          <FontAwesomeIcon className="mealIcon" icon={faFish} />
          <input
            type={"text"}
            value={dinner}
            onChange={(e) => setDinner(e.target.value)}
            placeholder="Dinner"
            className="mealInput"
            maxLength={15}
          ></input>
        </div>
        <div className="foodBorder">
          <FontAwesomeIcon className="mealIcon" icon={faMugHot} />
          <input
            type={"text"}
            value={snack}
            onChange={(e) => setSnack(e.target.value)}
            placeholder="Snack"
            className="mealInput"
            maxLength={15}
          ></input>
        </div>
      </div>
    </>
  );
}
