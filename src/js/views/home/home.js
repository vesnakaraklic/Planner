import React, { useEffect, useState } from 'react'
import HomeHeader from '../../components/homeHeader/homeHeader'
import UserProfile from '../../components/userProfile/userProfile'
import DailyPlanner from '../dailyPlanner/dailyPlanner'
import MonthlyPlanner from '../monthlyPlanner/monthlyPlanner'
import WeeklyPlanner from '../weeklyPlanner/weeklyPlanner'
import { ToastContainer } from 'react-toastify'
import { notificationsActions } from '../../store/actions/notifications.actions'
import { useDispatch, useSelector } from 'react-redux'
import getDateWithoutHours from '../../utils/getDateWithoutHours'
import getTimeByString from '../../utils/getTimeByString'
import 'react-toastify/dist/ReactToastify.css'
import '../../styles/toast.scss'
import './home.scss'
import firebase from 'firebase'
import { userActions } from '../../store/actions/user.actions'
import { useHistory } from 'react-router-dom'
import NormalButton from '../../components/normalButton/normalButton'

export default function Home() {
  const [currentActive, setCurrentActive] = useState(1)
  const user = useSelector(state => state.user.user)
  const notifications = useSelector(state => state.notifications)
  const todayDate = new Date()
  const dispatch = useDispatch()
  const history = useHistory()
  const [timeouts, setTimeouts] = useState([])

  const notificationsForPlans = (text, time) => {
    let timeForReminder = time.split('_')
    const NOTIFICATION_TITLE = 'REMINDER'
    new Notification(NOTIFICATION_TITLE, {
      body:
        text +
        '\n' +
        'at' +
        ' ' +
        timeForReminder[1] +
        ':00' +
        ' ' +
        timeForReminder[0]
    })
  }

  useEffect(() => {
    dispatch(
      notificationsActions.getPlansForNotificationsById(
        user.uid + getDateWithoutHours(todayDate)
      )
    )
  }, [])

  useEffect(() => {
    if (Object.keys(notifications).length > 0) {
      timeouts.forEach(timeout => {
        clearTimeout(timeout)
      })
      setTimeouts([])
      Object.keys(notifications).map(key => {
        if (notifications[key] !== '') {
          let res = getTimeByString(key)
          if (todayDate.getTime() < res.getTime() - 600000) {
            let time = res.getTime() - todayDate.getTime()
            const t = setTimeout(
              () => notificationsForPlans(notifications[key], key),
              time - 600000
            )
            setTimeouts(oldTimeouts => [...oldTimeouts, t])
          }
        }
      })
    }
  }, [notifications])
  const onLogoutClick = () => {
    dispatch(userActions.logout()).then(() => {
      history.push('/login')
    })
  }
  if (!firebase.auth().currentUser.emailVerified)
    return (
      <div className="message-container">
        <p className="message-text">
          Activation link successfully sent to your email address.
        </p>
        <p className="message-text">Activate the link and log in!</p>
        <NormalButton
          className="back-button"
          buttonName="Back"
          onClick={onLogoutClick}
        />
      </div>
    )

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
