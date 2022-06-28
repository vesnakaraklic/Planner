import React, { useState } from 'react'
import HomeHeader from '../../components/homeHeader/homeHeader'
import UserProfile from '../../components/userProfile/userProfile'
import DailyPlanner from '../dailyPlanner/dailyPlanner'
import MonthlyPlanner from '../monthlyPlanner/monthlyPlanner'
import WeeklyPlanner from '../weeklyPlanner/weeklyPlanner'
import './home.scss'

export default function Home() {
  const [currentActive, setCurrentActive] = useState(1)

  return (
    <>
      <div className="home-wrapper">
        <HomeHeader
          currentActive={currentActive}
          setCurrentActive={setCurrentActive}
        />

        <div className="view-container">
          {currentActive === 1 && <DailyPlanner />}
          {currentActive === 2 && (
            <WeeklyPlanner setCurrentActive={setCurrentActive} />
          )}
          {currentActive === 3 && (
            <MonthlyPlanner setCurrentActive={setCurrentActive} />
          )}
          {currentActive === 4 && (
            <UserProfile setCurrentActive={setCurrentActive} />
          )}
        </div>
      </div>
    </>
  )
}
