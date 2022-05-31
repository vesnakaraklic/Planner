import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './inputWithIcon.scss'

export default function InputWithIcon({
  icon,
  name,
  placeholder,
  onChange,
  onBlur,
  type,
  errorMsg = '',
  className,
  iconEye,
  onEyeClick,
  maxLength = 20
}) {
  return (
    <div className={`field-container ${className}`}>
      {icon && (
        <span className="field-icon">
          <FontAwesomeIcon icon={icon} className="iconColor" />
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
      {errorMsg !== '' && <p className="error-message">{errorMsg}</p>}
    </div>
  )
}
