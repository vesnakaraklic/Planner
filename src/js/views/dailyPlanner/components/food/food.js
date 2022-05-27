import React from "react";
import {
  faFish,
  faMugHot,
  faPizzaSlice,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { foodActions } from "../../../../store/actions/food.actions";
import "./food.scss";

const Food = ({ food }) => {
  const dispatch = useDispatch();
  const foodIcons = [faPizzaSlice, faHamburger, faFish, faMugHot];

  const onChangeInput = (value, key) => {
    dispatch(foodActions.updateFood({ ...food, [key]: value }));
  };

  return (
    <>
      <div className="foodForm">
        {Object.keys(food).length > 0 &&
          Object.keys(food).map((foodKey, index) => (
            <div key={index} className="foodBorder">
              <FontAwesomeIcon className="mealIcon" icon={foodIcons[index]} />
              <input
                type={"text"}
                value={food[foodKey]}
                maxLength={15}
                placeholder={foodKey}
                className="mealInput"
                onChange={(e) => onChangeInput(e.target.value, foodKey)}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Food;
