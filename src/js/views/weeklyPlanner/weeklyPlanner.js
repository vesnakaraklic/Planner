import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WeeklyStickyNote from '../../components/weeklyStickyNote/weeklyStickyNote'
import getDateWithoutHours from '../../utils/getDateWithoutHours'
import getWeekFromDate from '../../utils/getWeekFromDate'
import { foodActions } from '../../store/actions/food.actions'
import './weeklyPlanner.scss'

export default function WeeklyPlanner() {
  const dateRedux = useSelector(state => state.datePicker.date)
  const user = useSelector(state => state.user.user)
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
  let arrayForDisplay = []
  const dispatch = useDispatch()

  useEffect(() => {
    let checkDate = new Date(dateRedux)
    setDateSticky(getWeekFromDate(checkDate))
  }, [dateRedux])

  useEffect(() => {
    index.map(number =>
      arrayForDisplay.push(
        user.uid + getDateWithoutHours(Object.values(dateSticky)[number])
      )
    )
    dispatch(foodActions.getFoodForWeek(arrayForDisplay))
  }, [dateSticky])

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
