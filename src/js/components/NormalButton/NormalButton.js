import React from "react";
import { Link } from "react-router-dom";
import "./NormalButton.scss";

export default function NormalButton({
  buttonName,
  linkName,
  linkText,
  onClick,
}) {
  const onClickHandle = () => {
    onClick && onClick();
  };
  return (
    <>
      <button onClick={onClickHandle} className="submit-btn">
        {buttonName}
      </button>
      <p style={{ textAlign: "center", marginBottom: "0px" }}>
        {linkText}
        <Link to="/register" style={{ color: "lightpink" }}>
          {linkName}
        </Link>
      </p>
    </>
  );
}
