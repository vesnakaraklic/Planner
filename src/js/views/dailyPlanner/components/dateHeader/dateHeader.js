import {
  faAngleLeft,
  faAngleRight,
  faCalendarCheck
} from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch, useSelector } from 'react-redux'
import { dateActions } from '../../../../store/actions/date.actions'
import { noteActions } from '../../../../store/actions/note.actions'
import getDateWithoutHours from '../../../../utils/getDateWithoutHours'
import getDayFromDate from '../../../../utils/getDayFromDate'
import getMonthFromDate from '../../../../utils/getMonthFromDate'
import getNextDate from '../../../../utils/getNextDate'
import getPreviousDate from '../../../../utils/getPreviousDate'
import getWeekFromDate from '../../../../utils/getWeekFromDate'
import './dateHeader.scss'

export default function DateHeader({
  note = '',
  displayDateAndNote = true,
  currentActive
}) {
  const dateRedux = useSelector(state => state.datePicker.date)
  const date = new Date(dateRedux)
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()
  const [week, setWeek] = useState({})

  const onClickDatePicker = () => {
    setClicked(!clicked)
  }

  const onChangeDatePicker = selectedDate => {
    setClicked(!clicked)
    dispatch(dateActions.updateDate(getDateWithoutHours(selectedDate)))
  }

  const onChangeNote = value => {
    dispatch(noteActions.updateNote(value))
  }

  const onClickRightArrowDaily = () => {
    dispatch(dateActions.updateDate(getNextDate(dateRedux)))
  }

  const onClickRightArrowWeekly = () => {
    setWeek(
      getWeekFromDate(
        new Date(getNextDate(getDateWithoutHours(Object.values(week)[6])))
      )
    )
    dispatch(
      dateActions.updateDate(
        new Date(getNextDate(getDateWithoutHours(Object.values(week)[6])))
      )
    )
  }

  const onClickLeftArrowDaily = () => {
    dispatch(dateActions.updateDate(getPreviousDate(dateRedux)))
  }

  const onClickLeftArrowWeekly = () => {
    setWeek(
      getWeekFromDate(
        new Date(getPreviousDate(getDateWithoutHours(Object.values(week)[0])))
      )
    )
    dispatch(
      dateActions.updateDate(
        new Date(getPreviousDate(getDateWithoutHours(Object.values(week)[0])))
      )
    )
  }

  useEffect(() => {
    setWeek(getWeekFromDate(date))
  }, [dateRedux])

  return (
    <>
      <div className="dateForm">
        <div className={`dateInputForm ${displayDateAndNote ? '' : 'hidden'}`}>
          <div className="dateStyle">
            {' '}
            <p>
              Date: {getMonthFromDate(date)} {date.getDate()} ,{' '}
              {date.getFullYear()}
            </p>
            <button onClick={onClickDatePicker} className="buttonDatePicker">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </button>
            <DatePicker
              selected={new Date(dateRedux)}
              open={clicked}
              onChange={selectedDate => onChangeDatePicker(selectedDate)}
              className="datePicker"
            />
          </div>
          <div className="noteContainer">
            <p>Note:</p>
            <input
              type="text"
              value={note}
              onChange={e => onChangeNote(e.target.value)}
              className="inputWithoutBorders"
            />
          </div>
        </div>

        <div className={`dateMain ${currentActive === 2 ? 'withWeek' : ''}`}>
          <button
            className="arrowButton"
            onClick={
              currentActive === 1
                ? onClickLeftArrowDaily
                : onClickLeftArrowWeekly
            }
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {currentActive === 1 && (
            <p className="dayName">{getDayFromDate(date)}</p>
          )}

          {currentActive === 2 && (
            <p className="week">
              {' '}
              {getMonthFromDate(Object.values(week)[0])},{' '}
              {Object.values(week)[0].getDate()} -{' '}
              {getMonthFromDate(Object.values(week)[6])},{' '}
              {Object.values(week)[6].getDate()},{' '}
              {Object.values(week)[0].getFullYear() ===
              Object.values(week)[6].getFullYear()
                ? Object.values(week)[0].getFullYear()
                : Object.values(week)[0].getFullYear -
                  Object.values(week)[6].getFullYear()}
            </p>
          )}

          <button
            className="arrowButton"
            onClick={
              currentActive === 1
                ? onClickRightArrowDaily
                : onClickRightArrowWeekly
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </>
  )
}
