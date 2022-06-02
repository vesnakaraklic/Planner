import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { faBell, faListUl, faUser } from '@fortawesome/fontawesome-free-solid'
import { userActions } from '../../store/actions/user.actions'
import { useHistory } from 'react-router-dom'
import DateHeader from '../../views/dailyPlanner/components/dateHeader/dateHeader'
import Switchtab from '../switchtab/switchtab'
import './homeHeader.scss'

export default function HomeHeader({ currentActive, setCurrentActive }) {
  const note = useSelector(state => state.note.note)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const history = useHistory()
  const [open, setOpen] = useState(false)

  const optionsArray = [
    { key: 1, label: 'Daily' },
    { key: 2, label: 'Weekly' },
    { key: 3, label: 'Monthly' }
  ]

  const onNotificationClick = () => {
    const NOTIFICATION_TITLE = 'Notification'
    const NOTIFICATION_BODY = 'Welcome '
    new Notification(NOTIFICATION_TITLE, {
      body: NOTIFICATION_BODY + ' ' + user.firstName + ' ' + user.lastName
    })
  }

  const onLogoutClick = () => {
    dispatch(userActions.logout()).then(() => {
      history.push('/login')
    })
  }

  const onProfileClick = () => {}

  return (
    <>
      <div className="homeHeaderWrapper">
        <div className="switchButtonContainer">
          <Switchtab
            options={optionsArray}
            active={currentActive}
            setActive={setCurrentActive}
          />
          <div className="dropdownContainer">
            <button onClick={() => setOpen(!open)} className="dropbtn">
              <FontAwesomeIcon icon={faListUl} />
            </button>
            {open && (
              <div className="dropdownContent">
                <button className="buttonInMenu" onClick={onProfileClick}>
                  Profile
                  <FontAwesomeIcon icon={faUser} />
                </button>
                <button
                  className="buttonInMenu"
                  id="notification"
                  onClick={onNotificationClick}
                >
                  {' '}
                  <label>Notification</label>
                  <FontAwesomeIcon icon={faBell} />
                </button>
                <button className="buttonInMenu" onClick={onLogoutClick}>
                  Logout
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
            )}
          </div>
        </div>
        <DateHeader
          displayDateAndNote={currentActive === 2 ? false : true}
          currentActive={currentActive}
          note={note}
        />
      </div>
    </>
  )
}
