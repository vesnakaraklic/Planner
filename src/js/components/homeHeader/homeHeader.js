import React from 'react'
import { useSelector } from 'react-redux'
import DateHeader from '../../views/dailyPlanner/components/dateHeader/dateHeader'
import Switchtab from '../switchtab/switchtab'
import './homeHeader.scss'

export default function HomeHeader({ currentActive, setCurrentActive }) {
  const note = useSelector(state => state.note.note)
  const optionsArray = [
    { key: 1, label: 'Daily' },
    { key: 2, label: 'Weekly' },
    { key: 3, label: 'Monthly' }
  ]

  return (
    <>
      <div className="homeHeaderWrapper">
        <div className="switchButtonContainer">
          <Switchtab
            options={optionsArray}
            active={currentActive}
            setActive={setCurrentActive}
          />
          <p className="headerName">Vesnannananna</p>
        </div>
        <DateHeader note={note} />
      </div>
    </>
  )
}
