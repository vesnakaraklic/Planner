import React, { useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'
import { useDispatch, useSelector } from 'react-redux'
import { dateActions } from '../../store/actions/date.actions'
import getDateWithoutHours from '../../utils/getDateWithoutHours'
import getDayFromDate from '../../utils/getDayFromDate'
import getPreviousDate from '../../utils/getPreviousDate'
import getNextDate from '../../utils/getNextDate'
import { monthDatesActions } from '../../store/actions/monthDates.actions'
import './monthlyPlanner.scss'
import { plansActions } from '../../store/actions/plans.actions'

export default function MonthlyPlanner({ setCurrentActive }) {
  const dateRedux = useSelector(state => state.datePicker.date)
  const plansForOneDayRedux = useSelector(state => state.plans)
  const user = useSelector(state => state.user.user)
  const datesOfMonthRedux = useSelector(state => state.monthDates.dates)
  const dispatch = useDispatch()
  const calendarRef = useRef(null)
  const [selectedDate, setSelectedDate] = useState(new Date(dateRedux))

  const plans = {
    AM_06: '06:00 AM',
    AM_07: '07:00 AM',
    AM_08: '08:00 AM',
    AM_09: '09:00 AM',
    AM_10: '10:00 AM',
    AM_11: '11:00 AM',
    PM_12: '12:00 PM',
    PM_01: '01:00 PM',
    PM_02: '02:00 PM',
    PM_03: '03:00 PM',
    PM_04: '04:00 PM',
    PM_05: '05:00 PM',
    PM_06: '06:00 PM',
    PM_07: '07:00 PM',
    PM_08: '08:00 PM',
    PM_09: '09:00 PM',
    PM_10: '10:00 PM',
    PM_11: '11:00 PM',
    AM_12: '12:00 AM'
  }

  const onChange = date => {
    setSelectedDate(new Date(getDateWithoutHours(date)))
    dispatch(dateActions.updateDate(getDateWithoutHours(date)))
  }

  const onButtonDateClick = () => {
    dispatch(dateActions.updateDate(getDateWithoutHours(dateRedux)))
    setCurrentActive && setCurrentActive(1)
  }

  function getAllDaysInMonth(date) {
    const month = new Date(date.getFullYear(), date.getMonth(), 1)
    const dates = []
    while (month.getMonth() === date.getMonth()) {
      dates.push(new Date(month))
      month.setDate(month.getDate() + 1)
    }
    return dates
  }

  const onPrevMonthClick = () => {
    updateMonthlyViewByDate('prev')
  }

  const onNextMonthClick = () => {
    updateMonthlyViewByDate('next')
  }

  const updateMonthlyViewByDate = (status = 'current') => {
    const date = new Date(dateRedux)
    const currentMonth = getAllDaysInMonth(date)
    let listOfDatesOfMonth = []
    switch (status) {
      case 'clicked':
      case 'current':
        listOfDatesOfMonth = currentMonth
        break
      case 'prev':
        dispatch(
          dateActions.updateDate(getPreviousDate(currentMonth[0].getTime()))
        )
        setSelectedDate(new Date(getPreviousDate(currentMonth[0].getTime())))
        break
      case 'next':
        dispatch(
          dateActions.updateDate(
            getNextDate(currentMonth[currentMonth.length - 1].getTime())
          )
        )
        setSelectedDate(
          new Date(getNextDate(currentMonth[currentMonth.length - 1].getTime()))
        )
        break
      default:
        break
    }
    if (status === 'clicked' || status === 'current') {
      let tempArray = []
      listOfDatesOfMonth.map(data =>
        tempArray.push(user.uid + getDateWithoutHours(data))
      )

      dispatch(monthDatesActions.getMonthDatesIds(tempArray, user.uid))
    }
  }

  const hideCalendarArrows = () => {
    if (calendarRef) {
      const prevButton = calendarRef.current.querySelector(
        '.react-calendar__navigation__prev-button'
      )
      const nextButton = calendarRef.current.querySelector(
        '.react-calendar__navigation__next-button'
      )
      const monthButton = calendarRef.current.querySelector(
        '.react-calendar__navigation__label'
      )
      const prev2Button = calendarRef.current.querySelector(
        '.react-calendar__navigation__arrow.react-calendar__navigation__prev2-button'
      )
      const next2Button = calendarRef.current.querySelector(
        '.react-calendar__navigation__arrow.react-calendar__navigation__next2-button'
      )
      const spanNotClickable = monthButton.querySelector('span')

      spanNotClickable.style.pointerEvents = 'none'
      monthButton.disabled = 'true'
      monthButton.style.backgroundColor = 'transparent'
      prev2Button.style.display = 'none'
      next2Button.style.display = 'none'
      prevButton.addEventListener('click', onPrevMonthClick)
      nextButton.addEventListener('click', onNextMonthClick)
    }
  }

  useEffect(() => {
    hideCalendarArrows()
    dispatch(plansActions.getPlansById(user.uid + dateRedux))
    updateMonthlyViewByDate('clicked')
  }, [dateRedux])

  useEffect(() => {
    if (Object.keys(datesOfMonthRedux).length > 0 && calendarRef) {
      const calendarDayTile = calendarRef.current.querySelectorAll(
        '.react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day abbr'
      )
      calendarDayTile.forEach(tile => {
        const tileDate = new Date(tile.ariaLabel)
        const tilePlans = datesOfMonthRedux[tileDate.getTime()]
        let nonEmptyPlansLenght = 0
        if (tilePlans && Object.keys(tilePlans)) {
          Object.values(tilePlans).forEach(value => {
            if (value && value !== '') nonEmptyPlansLenght++
          })
        }
        if (nonEmptyPlansLenght >= 1 && nonEmptyPlansLenght < 3)
          tile.parentElement.style.borderBottom = '3px solid #ebd28b'
        else if (nonEmptyPlansLenght > 3 && nonEmptyPlansLenght < 8)
          tile.parentElement.style.borderBottom = '3px solid #d9a462'
        else if (nonEmptyPlansLenght >= 8)
          tile.parentElement.style.borderBottom = '3px solid #d1372c'
      })
    }
  }, [datesOfMonthRedux])

  return (
    <>
      <div className="monthlyFrame">
        <button onClick={() => updateMonthlyViewByDate('prev')}>{'<'}</button>

        <Calendar
          // nextLabel=""
          next2Label=""
          // prevLabel=""
          prev2Label=""
          key={dateRedux}
          inputRef={calendarRef}
          onChange={onChange}
          defaultValue={selectedDate}
        />
        <div className="monthlyDayPreview">
          <button className="button-date" onClick={onButtonDateClick}>
            <p className="dateStyleMonthly">{new Date(dateRedux).getDate()}</p>
          </button>
          <p className="dayStyle">{getDayFromDate(new Date(dateRedux))}</p>

          {Object.keys(plans).map(
            (plan, index) =>
              plansForOneDayRedux[plan] && (
                <div key={'pl' + plan + index} className="plans-frame">
                  <label className="hour-style">{plans[plan]}</label>
                  <label className="data-style">
                    {plansForOneDayRedux[plan]}
                  </label>
                </div>
              )
          )}
        </div>
        <button onClick={() => updateMonthlyViewByDate('next')}>{'>'}</button>
      </div>
    </>
  )
}
