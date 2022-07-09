import React, { useState } from 'react'
import {
  faCheck,
  faAngleDown,
  faAngleUp
} from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './toDoInput.scss'

export default function ToDoInput({
  onCheckChange,
  isChecked = false,
  inputValue = '',
  onInputChange,
  className
}) {
  const [expanded, setExpanded] = useState(false)

  const onCheckHandle = () => {
    onCheckChange && onCheckChange()
  }

  const onChangeHandler = event => {
    onInputChange && onInputChange(event)
  }

  return (
    <div className={`to-do-input-wrapper ${className}`}>
      <div className="to-do-line-input-with-checkbox">
        <div className="to-do-checkbox" onClick={() => onCheckHandle()}>
          {isChecked && (
            <FontAwesomeIcon className="to-do-checkbox-icon" icon={faCheck} />
          )}
        </div>
        <input
          value={inputValue}
          onChange={onChangeHandler}
          className={`to-do-input ${isChecked ? 'checked-text' : ''}`}
          maxLength={25}
        />
        <div
          onClick={() => setExpanded(!expanded)}
          className="to-do-expander-btn"
        >
          <FontAwesomeIcon icon={!expanded ? faAngleDown : faAngleUp} />
        </div>
      </div>

      <div className={`to-do-expanding-content ${expanded ? 'opened' : ''}`}>
        <textarea
          placeholder="Description..."
          rows={5}
          className="to-do-textarea"
        ></textarea>
      </div>
    </div>
  )
}
