import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { faUser, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { userActions } from '../../store/actions/user.actions'
import './sidebar.scss'

export default function Sidebar() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.user.user)

  const onClickLogout = () => {
    dispatch(userActions.logout()).then(() => {
      history.push('/login')
    })
  }

  const onClickNoticication = () => {
    const NOTIFICATION_TITLE = 'Notification'
    const NOTIFICATION_BODY = 'Welcome '
    // const CLICK_MESSAGE = "Notification clicked!";

    // new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick =
    //   () => (document.getElementById("notification").innerText = CLICK_MESSAGE);
    new Notification(NOTIFICATION_TITLE, {
      body: NOTIFICATION_BODY + ' ' + user.firstName + ' ' + user.lastName
    })
  }

  return (
    <>
      <div className="sidebar">
        <button
          id="notification"
          onClick={onClickNoticication}
          className="user-header-profile"
        >
          {' '}
          <FontAwesomeIcon icon={faBell} style={{ color: 'white' }} />
        </button>
        <button onClick={onClickLogout} className="user-header-profile">
          {' '}
          <FontAwesomeIcon icon={faUser} style={{ color: 'white' }} />
        </button>
      </div>
    </>
  )
}
