import React from 'react'
import './saveAndCancelButtons.scss'

export default function SaveAndCancelButtons({ onCancel, onSave }) {
  return (
    <>
      <button className="cancel-button" onClick={onCancel}>
        Cancel
      </button>
      <button className="save-button" onClick={onSave}>
        Save
      </button>
    </>
  )
}
