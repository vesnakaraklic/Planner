import React, { useEffect, useState } from 'react'
import './lineInput.scss'

export default function LineInput({
  className,
  wrapperClass,
  onChange,
  value = '',
  onFocusOutPlansSave
}) {
  const [inputValue, setInputValue] = useState('')

  const onChangeHandler = event => {
    setInputValue(event.target.value)
    onChange && onChange(event)
  }
  
  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <>
      <div className={wrapperClass}>
        <input
          value={inputValue}
          className={className}
          onChange={onChangeHandler}
          onBlur={onFocusOutPlansSave}
        ></input>
      </div>
    </>
  )
}
