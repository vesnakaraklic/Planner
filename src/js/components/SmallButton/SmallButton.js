import React from 'react'
import './smallButton.scss'

export default function SmallButton({ buttonName, className, onClick }) {
  return (
    <>
      <button className={`buttons ${className}`} onClick={onClick}>
        {buttonName}
      </button>
    </>
  )
}
