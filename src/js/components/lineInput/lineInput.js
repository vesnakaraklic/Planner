import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free-solid'
import { faCheck } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './lineInput.scss'

export default function LineInput({
  withCheckbox,
  isChecked = false,
  onCheckChange,
  className,
  onChange,
  value = ''
}) {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const onCheckHandle = () => {
    onCheckChange && onCheckChange()
  }

  const onChangeHandler = event => {
    setInputValue(event.target.value)
    onChange && onChange(event)
  }

  return (
    <>
      {withCheckbox && (
        <div className="checkbox-frame" onClick={() => onCheckHandle()}>
          {isChecked && (
            <FontAwesomeIcon className="icon-style" icon={faCheck} />
          )}
        </div>
      )}
      <input
        value={inputValue}
        className={`${className} ${isChecked ? 'checked-text' : ''} `}
        onChange={onChangeHandler}
      ></input>
    </>
  )
}
