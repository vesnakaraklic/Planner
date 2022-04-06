import React, { useEffect, useState } from "react";
import "./water.scss";

export default function Water() {
  const [waterValue, setWaterValue] = useState(0);
  const waterImage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        onChange={(event) => setWaterValue(event.target.value)}
      />
    </>
  );
}
