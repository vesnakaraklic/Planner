import React, { useEffect, useState } from 'react'
import HomeHeader from '../../components/homeHeader/homeHeader'
import UserProfile from '../../components/userProfile/userProfile'
import DailyPlanner from '../dailyPlanner/dailyPlanner'
import MonthlyPlanner from '../monthlyPlanner/monthlyPlanner'
import WeeklyPlanner from '../weeklyPlanner/weeklyPlanner'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../styles/toast.scss'
import './home.scss'
import { notificationActions } from '../../store/actions/notification.actions'
import { useDispatch, useSelector } from 'react-redux'
import getDateWithoutHours from '../../utils/getDateWithoutHours'
import getTimeByString from '../../utils/getTimeByString'

export default function Home() {
  const [currentActive, setCurrentActive] = useState(1)
  const user = useSelector(state => state.user.user)
  const plans = useSelector(state => state.plans)
  const notification = useSelector(state => state.notification)
  const [flag, setFlag] = useState(false)
  const todayDate = new Date()
  const dispatch = useDispatch()

  const notificationForPlans = text => {
    console.log('jjjjjjjj')
    const NOTIFICATION_TITLE = 'Notification'
    const NOTIFICATION_BODY = 'do not forget '
    new Notification(NOTIFICATION_TITLE, {
      body: NOTIFICATION_BODY + text
    })
  }

  useEffect(() => {
    dispatch(
      notificationActions.getPlansForNotificationById(
        user.uid + getDateWithoutHours(todayDate)
      )
    )
  }, [])

  useEffect(() => {
    if (notification.updated && !flag) {
      setFlag(true)
      Object.keys(notification).map(key => {
        if (notification[key] !== '') {
          let res = getTimeByString(key)
          if (todayDate.getTime() < res.getTime()) {
            let time = res.getTime() - todayDate.getTime()
            setTimeout(() => notificationForPlans(notification[key]), time)
          }
        }
      })
    }
  }, [notification])

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
        <ToastContainer
          className="toast"
          toastClassName="toast-wrapper"
          bodyClassName="toast-body"
        />
      </div>
    </>
  )
}
