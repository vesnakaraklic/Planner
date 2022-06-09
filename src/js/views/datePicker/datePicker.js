import React, { useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'
import { useDispatch, useSelector } from 'react-redux'
import { dateActions } from '../../store/actions/date.actions'
import getDateWithoutHours from '../../utils/getDateWithoutHours'
import getDayFromDate from '../../utils/getDayFromDate'
import { plansActions } from '../../store/actions/plans.actions'
import getPreviousDate from '../../utils/getPreviousDate'
import getNextDate from '../../utils/getNextDate'
import { monthDatesActions } from '../../store/actions/monthDates.actions'
import './datePicker.scss'
import { defaultStyles } from 'react-modal'

export default function DatePicker({ setCurrentActive }) {
  const dateRedux = useSelector(state => state.datePicker.date)
  const plansForOneDayRedux = useSelector(state => state.plans)
  const user = useSelector(state => state.user.user)
  const datesOfMonthRedux = useSelector(state => state.monthDates.dates)
  const [selectedDate, setSelectedDate] = useState(new Date(dateRedux))
  let [counter, setCounter] = useState(0)
  const dispatch = useDispatch()
  let day = getDayFromDate(selectedDate)
  const calendarRef = useRef(null)
  let listOfDatesOfMonth = []
  // const [listOfDatesOfMonth, setListOfDatesOfMonth] = useState([])

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
    setSelectedDate(date)
    dispatch(dateActions.updateDate(getDateWithoutHours(date)))
  }

  const onButtonDateClick = () => {
    dispatch(dateActions.updateDate(getDateWithoutHours(dateRedux)))
    setCurrentActive && setCurrentActive(1)
  }

  function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1)

    const dates = []

    while (date.getMonth() === month) {
      dates.push(new Date(date))
      date.setDate(date.getDate() + 1)
    }
    return dates
  }

  const onPrevMonthClick = () => {
    let tempDate = new Date(
      getPreviousDate(getDateWithoutHours(listOfDatesOfMonth[0]))
    )
    let tempArray = getAllDaysInMonth(
      tempDate.getFullYear(),
      tempDate.getMonth()
    )

    console.log('Uporedi', listOfDatesOfMonth, tempArray)
    listOfDatesOfMonth = tempArray
    getIdsFromListDatesOfMonth(listOfDatesOfMonth)
  }

  const onNextMonthClick = () => {
    let tempDate = new Date(
      getNextDate(getDateWithoutHours(listOfDatesOfMonth.pop()))
    )
    let tempArray = getAllDaysInMonth(
      tempDate.getFullYear(),
      tempDate.getMonth()
    )
    listOfDatesOfMonth = tempArray
    getIdsFromListDatesOfMonth(listOfDatesOfMonth)
  }

  const getIdsFromListDatesOfMonth = listOfDates => {
    let tempArray = []
    listOfDates.map(data =>
      tempArray.push(user.uid + getDateWithoutHours(data))
    )
    dispatch(monthDatesActions.getMonthDatesIds(tempArray, user.uid))
  }

  // const onPrevMonthClicked = () => {
  //   let tempDate = new Date(dateRedux)
  //   let tempArray = getAllDaysInMonth(
  //     tempDate.getFullYear(),
  //     tempDate.getMonth()
  //   )
  //   dispatch(
  //     dateActions.updateDate(getPreviousDate(getDateWithoutHours(tempArray[0])))
  //   )

  //   setSelectedDate(
  //     new Date(getPreviousDate(getDateWithoutHours(tempArray[0])))
  //   )
  // }

  // const getDatesOfMonth = date => {
  //   const tempDate = new Date(date)
  //   let tempArrayOfDates = []
  //   let arrayOdDates = getAllDaysInMonth(
  //     tempDate.getFullYear(),
  //     tempDate.getMonth()
  //   )
  //   arrayOdDates.forEach(dateOfList => {
  //     tempArrayOfDates.push(user.uid + getDateWithoutHours(dateOfList))
  //   })
  //   dispatch(monthDatesActions.getMonthDatesIds(tempArrayOfDates, user.uid))
  // }

  // useEffect(() => {
  //   getDatesOfMonth(dateRedux)
  //   if (calendarRef) {
  //     const prevButton = calendarRef.current.querySelector(
  //       '.react-calendar__navigation__prev-button'
  //     )
  //     prevButton.addEventListener('click', onPrevMonthClicked)
  //   }
  // }, [])

  // useEffect(() => {
  //   dispatch(plansActions.getPlansById(user.uid + dateRedux))
  //   dispatch(monthDatesActions.getMonthDatesIds(arrayDatesOfMonth, user.uid))
  //   setCounter(0)
  // }, [dateRedux])

  // useEffect(() => {
  //   let tempCounter = 0
  //   Object.values(plansFromRedux).forEach(plan =>
  //     plan !== '' ? tempCounter++ : null
  //   )
  //   setCounter(tempCounter)
  // }, [plansFromRedux])

  useEffect(() => {
    listOfDatesOfMonth = getAllDaysInMonth(
      new Date(dateRedux).getFullYear(),
      new Date(dateRedux).getMonth()
    )

    getIdsFromListDatesOfMonth(listOfDatesOfMonth)
    console.log('iz use effecta []'.listOfDatesOfMonth)
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
      monthButton.disabled = 'true'
      monthButton.style.backgroundColor = 'transparent'
      prev2Button.style.display = 'none'
      next2Button.style.display = 'none'
      prevButton.addEventListener('click', onPrevMonthClick)
      nextButton.addEventListener('click', onNextMonthClick)
    }
    console.log('Log', listOfDatesOfMonth)
  }, [])

  useEffect(() => {
    dispatch(plansActions.getPlansById(user.uid + dateRedux))
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
        <Calendar
          inputRef={calendarRef}
          onChange={onChange}
          defaultValue={new Date(dateRedux)}
        />
        <div className="monthlyDayPreview">
          <button className="button-date" onClick={onButtonDateClick}>
            <p className="dateStyleMonthly">{selectedDate.getDate()}</p>
          </button>
          <p className="dayStyle">{day}</p>

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
          <div>{counter}</div>
        </div>
      </div>
    </>
  )
}
