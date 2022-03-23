import React from "react";
import { useHistory } from "react-router-dom";
import SmallButton from "../SmallButton/SmallButton";
import "./header.scss";

export default function Header() {
  const history = useHistory();

  const onClickHandler = (path) => {
    history.push(path);
  };

  return (
    <>
      <div className="header">
        <p className="logo_planner">Planner</p>
        <SmallButton
          onClick={() => onClickHandler("/login")}
          className="login_btn"
          buttonName={"Login"}
        />
        <SmallButton
          onClick={() => onClickHandler("/register")}
          className="registration_btn"
          buttonName={"Registration"}
        />
      </div>
    </>
  );
}