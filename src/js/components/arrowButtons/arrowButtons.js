import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./arrowButtons.scss";

export default function ArrowButtons({
  onClickLeftArrow,
  onClickRightArrow,
  onClickTodayDate,
}) {
  return (
    <div className="buttonArrow">
      {" "}
      <button className="buttonArrowStyle" onClick={onClickLeftArrow}>
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} />{" "}
      </button>
      <button className="buttonArrowStyle" onClick={onClickRightArrow}>
        {" "}
        <FontAwesomeIcon icon={faArrowRight} />{" "}
      </button>
      <button
        className="buttonArrowStyle buttonTodayStyle"
        onClick={onClickTodayDate}
      >
        {" "}
        Today{" "}
      </button>
    </div>
  );
}
