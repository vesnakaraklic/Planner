import React, { useState } from 'react'
import HomeHeader from '../../components/homeHeader/homeHeader'
import DailyPlanner from '../dailyPlanner/dailyPlanner'
import DatePicker from '../datePicker/datePicker'
import WeeklyPlanner from '../weeklyPlanner/weeklyPlanner'
import './home.scss'

export default function Home() {
  const [currentActive, setCurrentActive] = useState(1)

  return (
    <>
      <div className="homeWrapper">
        <HomeHeader
          currentActive={currentActive}
          setCurrentActive={setCurrentActive}
        />

        <div className="viewContainer">
          {currentActive === 1 && <DailyPlanner />}
          {currentActive === 2 && <WeeklyPlanner />}
          {currentActive === 3 && <DatePicker />}
        </div>
      </div>
    </>
  )
}
