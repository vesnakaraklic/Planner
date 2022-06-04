import React, { useEffect } from 'react'
import './weeklyStickyNote.scss'

export default function WeeklyStickyNote({ date, day, content = false }) {
  function renderFood(data) {
    return (
      <div>
        <span>{data.breakfast}</span>
        <span>{data.lunch}</span>
        <span>{data.dinner}</span>
        <span>{data.snack}</span>
      </div>
    )
  }

  function renderContent() {
    if (content) {
      switch (content.type) {
        case 'food':
          return renderFood(content.value)
      }
    }
  }

  return (
    <div className="dayofWeekStyle">
      <div className="dateStyle">{date?.getDate()} </div>
      <div className="dayTitle">{day}</div>
      {renderContent()}
    </div>
  )
}
