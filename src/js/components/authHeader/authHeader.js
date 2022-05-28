import React from "react";
import SmallButton from "../smallButton/smallButton";
import Switchtab from "../switchtab/switchtab";
import "./authHeader.scss";

export default function AuthHeader({ active, setActive }) {
  const optionsArray = [
    { key: 1, label: "Login" },
    { key: 2, label: "Registration" },
  ];

  return (
    <>
      <div className="auth-header">
        <Switchtab
          options={optionsArray}
          active={active}
          setActive={setActive}
          buttonClass="bold-label"
        />
      </div>
    </>
  );
}
