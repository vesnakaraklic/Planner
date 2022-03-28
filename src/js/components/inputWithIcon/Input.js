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
  iconEye,
  onEyeClick,
  maxLength = 20,
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
        maxLength={maxLength}
      ></input>
      <div>
        {iconEye && (
          <span className="eyeIcon">
            <FontAwesomeIcon icon={iconEye} onClick={onEyeClick} />
          </span>
        )}
      </div>
      {errorMsg !== "" && <p className="error-message">{errorMsg}</p>}
    </div>
  );
}
