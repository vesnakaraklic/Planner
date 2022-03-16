import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Input.scss";
import React from "react";

export default function Input({ icon, name, placeholder, onChange }) {
  return (
    <div className="field-container">
      <span className="field-icon">
        <FontAwesomeIcon icon={icon} style={{ color: "white" }} />
      </span>
      <input
        name={name}
        placeholder={placeholder}
        className="field-input"
        onChange={onChange}
      ></input>
    </div>
  );
}
