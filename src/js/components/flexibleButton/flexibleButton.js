import React from 'react'
import './flexibleButton.scss'

export default function FlexibleButton({ onClick, widht, height, sign }) {
  return (
    <>
      <button
        onClick={onClick}
        className="button-style"
        style={{ width: { widht }, height: { height } }}
      >
        {sign}
      </button>
    </>
  )
}
