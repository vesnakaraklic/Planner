import {
  faAngleLeft,
  faAngleRight,
  faCalendarCheck
} from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
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
import './dateHeader.scss'

export default function DateHeader({ note = '' }) {
  const dateRedux = useSelector(state => state.datePicker.date)
  const date = new Date(dateRedux)
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()

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

  const onClickRightArrow = () => {
    dispatch(dateActions.updateDate(getNextDate(dateRedux)))
  }

  const onClickLeftArrow = () => {
    dispatch(dateActions.updateDate(getPreviousDate(dateRedux)))
  }

  return (
    <>
      <div className="dateForm">
        <div className="dateInputForm">
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
        <div className="dateMain">
          <button className="arrowButton" onClick={onClickLeftArrow}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>

          <p className="dayName">{getDayFromDate(date)}</p>

          <button className="arrowButton" onClick={onClickRightArrow}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </>
  )
}
