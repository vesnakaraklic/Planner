import React, { useEffect } from 'react'
import './weeklyStickyNote.scss'

export default function WeeklyStickyNote({ date, day }) {
  console.log('ttttt', date)
  return (
    <div className="dayofWeekStyle">
      <div className="dateStyle">{date?.getDate()} </div>
      <div className="dayTitle">{day}</div>
    </div>
  )
}
