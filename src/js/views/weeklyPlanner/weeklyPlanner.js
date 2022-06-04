import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WeeklyStickyNote from '../../components/weeklyStickyNote/weeklyStickyNote'
import getDateWithoutHours from '../../utils/getDateWithoutHours'
import getWeekFromDate from '../../utils/getWeekFromDate'
import './weeklyPlanner.scss'
import { weekDaysActions } from '../../store/actions/weekDays.action'
const NUMBER_OF_NOTES = 7

export default function WeeklyPlanner() {
  let arrayOfIdsForCurrentDate = []
  const [datesSticky, setDatesSticky] = useState({})

  const dateRedux = useSelector(state => state.datePicker.date)
  const user = useSelector(state => state.user.user)
  const weekDays = useSelector(state => state.weekDays.days)

  const dispatch = useDispatch()
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  const renderNotes = () => {
    const notes = []
    let i = 0
    while (i < NUMBER_OF_NOTES) {
      const selectedDate = Object.values(datesSticky)[i]
      notes.push(
        <div key={i + 'key'}>
          <WeeklyStickyNote
            day={days[i]}
            date={selectedDate}
            content={weekDays[getDateWithoutHours(selectedDate)]}
          />
        </div>
      )
      i++
    }
    return notes
  }

  useEffect(() => {
    let checkDate = new Date(dateRedux)
    setDatesSticky(getWeekFromDate(checkDate))
  }, [dateRedux])

  useEffect(() => {
    let i = 0
    while (i < NUMBER_OF_NOTES) {
      arrayOfIdsForCurrentDate.push(
        user.uid + getDateWithoutHours(Object.values(datesSticky)[i])
      )
      i++
    }
    dispatch(
      weekDaysActions.getWeekByDaysIds(
        'food',
        arrayOfIdsForCurrentDate,
        user.uid
      )
    )
  }, [datesSticky])

  return (
    <>
      <div className="weekFrame">{renderNotes()}</div>
    </>
  )
}
