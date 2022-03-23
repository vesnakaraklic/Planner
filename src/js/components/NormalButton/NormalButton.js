import React from "react";
import "./NormalButton.scss";

export default function NormalButton({ buttonName, onClick }) {
  const onClickHandle = () => {
    onClick && onClick();
  };
  return (
    <>
      <button onClick={onClickHandle} className="submit-btn">
        {buttonName}
      </button>
    </>
  );
}
