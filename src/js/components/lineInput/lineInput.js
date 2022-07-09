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
  wrapperClass,
  onChange,
  expandable = false,
  value = ''
}) {
  const [inputValue, setInputValue] = useState('')
  const [isExpanderOpened, setIsExpanderOpened] = useState(false)

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

  useEffect(() => {
    console.log('isExpanderOpened', isExpanderOpened)
  }, [isExpanderOpened])
  return (
    <>
      <div className={wrapperClass}>
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
        {expandable && (
          <div
            className={
              isExpanderOpened
                ? 'line-input-expander-btn-closed'
                : 'line-input-expander-btn-opened'
            }
            onClick={() => setIsExpanderOpened(!isExpanderOpened)}
          >
            {'>'}
          </div>
        )}
        {expandable && (
          <div
            className={
              isExpanderOpened
                ? 'line-input-expander-content-opened'
                : 'line-input-expander-content-closed'
            }
          >
            Test
          </div>
        )}
      </div>
    </>
  )
}
