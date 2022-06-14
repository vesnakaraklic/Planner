import React, { useEffect, useRef } from 'react'
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
import getAllDaysInMonth from '../../utils/getAllDaysInMonth'

export const updateMonthlyViewByDate = (
  status = 'current',
  dateFromRedux,
  user,
  dispatch
) => {
  const date = new Date(dateFromRedux)
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
      dispatch(
        monthDatesActions.updateSelectedDate(
          new Date(getPreviousDate(currentMonth[0].getTime()))
        )
      )
      break
    case 'next':
      dispatch(
        dateActions.updateDate(
          getNextDate(currentMonth[currentMonth.length - 1].getTime())
        )
      )
      dispatch(
        monthDatesActions.updateSelectedDate(
          new Date(getNextDate(currentMonth[currentMonth.length - 1].getTime()))
        )
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

export default function MonthlyPlanner({ setCurrentActive }) {
  const dateRedux = useSelector(state => state.datePicker.date)
  const plansForOneDayRedux = useSelector(state => state.plans)
  const user = useSelector(state => state.user.user)
  const datesOfMonthRedux = useSelector(state => state.monthDates.dates)
  const dispatch = useDispatch()
  const calendarRef = useRef(null)
  const selectedDateFromRedux = useSelector(
    state => state.monthDates.selectedDate
  )

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
    dispatch(dateActions.updateDate(getDateWithoutHours(date)))
    dispatch(
      monthDatesActions.updateSelectedDate(new Date(getDateWithoutHours(date)))
    )
  }

  const onButtonDateClick = () => {
    dispatch(dateActions.updateDate(getDateWithoutHours(dateRedux)))
    setCurrentActive && setCurrentActive(1)
  }

  useEffect(() => {
    dispatch(plansActions.getPlansById(user.uid + dateRedux))
    dispatch(monthDatesActions.updateSelectedDate(new Date(dateRedux)))
    updateMonthlyViewByDate('clicked', dateRedux, user, dispatch)
  }, [dateRedux])

  useEffect(() => {
    if (Object.keys(datesOfMonthRedux ?? {}).length > 0 && calendarRef) {
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
        console.log('eee', nonEmptyPlansLenght)
        if (nonEmptyPlansLenght >= 1 && nonEmptyPlansLenght < 5)
          tile.parentElement.style.borderBottom = '3px solid #77DD77'
        else if (nonEmptyPlansLenght > 5 && nonEmptyPlansLenght < 12)
          tile.parentElement.style.borderBottom = '3px solid #d9a462'
        else if (nonEmptyPlansLenght >= 12)
          tile.parentElement.style.borderBottom = '3px solid #ff6961'
      })
    }
  }, [datesOfMonthRedux])

  useEffect(() => {
    dispatch(monthDatesActions.updateSelectedDate(new Date(dateRedux)))
  }, [])

  return (
    <>
      <div className="monthlyFrame">
        <Calendar
          key={dateRedux}
          inputRef={calendarRef}
          onChange={onChange}
          value={selectedDateFromRedux}
        />
        <div className="monthlyDayPreview">
          <button className="button-date" onClick={onButtonDateClick}>
            <p className="dateStyleMonthly">{new Date(dateRedux).getDate()}</p>
          </button>
          <p className="dayStyle">{getDayFromDate(new Date(dateRedux))}</p>
          <div className="plans-wrapper-in-monthly-planner ">
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
        </div>
      </div>
    </>
  )
}
