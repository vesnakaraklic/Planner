import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Input.scss";

export default function Input({
  icon,
  name,
  placeholder,
  onChange,
  onBlur,
  type,
  errorMsg = "",
  className,
}) {
  return (
    <div className={`field-container ${className}`}>
      {icon && (
        <span className="field-icon">
          <FontAwesomeIcon icon={icon} style={{ color: "white" }} />
        </span>
      )}
      <input
        name={name}
        placeholder={placeholder}
        className="field-input"
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      ></input>
      {errorMsg !== "" && <p className="error-message">{errorMsg}</p>}
    </div>
  );
}
