import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import WeeklyStickyNote from '../../components/weeklyStickyNote/weeklyStickyNote'
import getWeekFromDate from '../../utils/getWeekFromDate'
import './weeklyPlanner.scss'

export default function WeeklyPlanner() {
  const dateRedux = useSelector(state => state.datePicker.date)
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  const [dateSticky, setDateSticky] = useState({})
  const index = [0, 1, 2, 3, 4, 5, 6]

  useEffect(() => {
    let checkDate = new Date(dateRedux)
    setDateSticky(getWeekFromDate(checkDate))
  }, [dateRedux])

  return (
    <>
      <div className="weekFrame">
        {index.map(number => (
          <div key={number + 'key'}>
            <WeeklyStickyNote
              day={days[number]}
              date={Object.values(dateSticky)[number]}
            />
          </div>
        ))}
      </div>
    </>
  )
}
