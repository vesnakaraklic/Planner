import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { waterActions } from "../../../../store/actions/water.actions";
import getDateWithoutHours from "../../../../utils/getDateWithoutHours";
import "./water.scss";

export default function Water() {
  // const [waterValue, setWaterValue] = useState(0);
  const waterValue = useSelector((state) => state.waterDrink.water);
  const user = useSelector((state) => state.user.user);
  const dateRedux = useSelector((state) => state.datePicker.date);
  const waterImage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dispatch = useDispatch();

  const onChange = (date) => {
    // setWaterValue(date);
    dispatch(waterActions.updateWater(date));
  };

  useEffect(() => {
    const date = getDateWithoutHours(dateRedux);
    let idUser = user.uid + date;
    dispatch(waterActions.getWaterById(idUser));
  }, []);

  return (
    <>
      <div className="slider">
        <div className="imagePosition">
          {waterImage.map((image) => {
            if (waterImage[image] < waterValue) {
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
        value={waterValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
