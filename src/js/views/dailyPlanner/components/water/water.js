import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { waterActions } from "../../../../store/actions/water.actions";
import "./water.scss";

export default function Water({ water }) {
  const user = useSelector((state) => state.user.user);
  const waterImage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dispatch = useDispatch();

  const onChange = (date) => {
    dispatch(waterActions.updateWater(date));
  };

  return (
    <>
      <div className="slider">
        <div className="imagePosition">
          {waterImage.map((image) => {
            if (waterImage[image] < water.water) {
              return <div key={"Key" + image} className="waterFilled" />;
            } else {
              return <div key={image} className="waterImage" />;
            }
          })}
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={10}
        step={1}
        className="waterSlider"
        value={water.water}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
