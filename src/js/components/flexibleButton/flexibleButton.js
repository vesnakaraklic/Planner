import React from 'react'
import './flexibleButton.scss'

export default function FlexibleButton({
  onClick,
  widht,
  height,
  sign,
  className
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={`button-style ${className}`}
        style={{ width: { widht }, height: { height } }}
      >
        {sign}
      </button>
    </>
  )
}
