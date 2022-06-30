import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
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
  const menuDropdownRef = useRef(null)

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

  const onProfileClick = () => {
    setCurrentActive(4)
  }

  const handleClickOutside = event => {
    if (
      menuDropdownRef.current &&
      !menuDropdownRef.current.contains(event.target)
    ) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <>
      <div className="home-header-wrapper">
        <div className="switch-button-container">
          <Switchtab
            options={optionsArray}
            active={currentActive}
            setActive={setCurrentActive}
          />
          <div className="dropdown-container">
            <button
              id="menu"
              onClick={() => setOpen(!open)}
              className="drop-button"
            >
              <FontAwesomeIcon icon={faListUl} />
            </button>
            {open && (
              <div ref={menuDropdownRef} className="dropdown-content">
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
          displayDateAndNote={currentActive === 1 ? true : false}
          currentActive={currentActive}
          note={note}
        />
      </div>
    </>
  )
}
