import React from 'react'
import './saveAndCancelButtons.scss'

export default function SaveAndCancelButtons({ onCancel, onSave, cancelId}) {
  return (
    <>
      <button className="cancel-button" onClick={onCancel} id={cancelId}>
        Cancel
      </button>
      <button className="save-button" onClick={onSave}>
        Save
      </button>
    </>
  )
}
