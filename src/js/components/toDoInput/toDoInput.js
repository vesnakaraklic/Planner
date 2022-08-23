import React, { useEffect, useState } from 'react'
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
  descriptionValue = '',
  onDescriptionChange,
  onExpanderClick,
  isOpened,
  onFocusOutToDoSave
}) {
  const onCheckHandle = () => {
    onCheckChange && onCheckChange()
  }

  const onChangeInputHandler = event => {
    onInputChange && onInputChange(event)
  }

  const onCheckDescriptionHandler = event => {
    onDescriptionChange && onDescriptionChange(event)
  }

  const onExpanderArrowClick = () => {
    onExpanderClick && onExpanderClick()
  }

  return (
    <div className={'to-do-input-wrapper'}>
      <div className="to-do-line-input-with-checkbox">
        <div className="to-do-checkbox" onClick={() => onCheckHandle()}>
          {isChecked && (
            <FontAwesomeIcon className="to-do-checkbox-icon" icon={faCheck} />
          )}
        </div>
        <input
          value={inputValue}
          onChange={onChangeInputHandler}
          className={`to-do-input ${isChecked ? 'checked-text' : ''}`}
          onBlur={onFocusOutToDoSave}
        />
        <div
          onClick={() => onExpanderArrowClick()}
          className="to-do-expander-btn"
        >
          <FontAwesomeIcon icon={!isOpened ? faAngleDown : faAngleUp} />
        </div>
      </div>

      <div className={`to-do-expanding-content ${isOpened ? 'opened' : ''}`}>
        <textarea
          placeholder="Description..."
          rows={5}
          className="to-do-textarea"
          value={descriptionValue}
          onChange={onCheckDescriptionHandler}
          onBlur={onFocusOutToDoSave}
        ></textarea>
      </div>
    </div>
  )
}
