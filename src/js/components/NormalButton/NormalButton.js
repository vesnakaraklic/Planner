import React from "react";
import "./normalButton.scss";

export default function NormalButton({ buttonName, onClick, className }) {
  const onClickHandle = () => {
    onClick && onClick();
  };
  return (
    <>
      <button onClick={onClickHandle} className={`submit-btn ${className}`}>
        {buttonName}
      </button>
    </>
  );
}
