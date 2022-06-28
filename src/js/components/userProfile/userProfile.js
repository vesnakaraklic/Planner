import {
  faEnvelope,
  faLock,
  faPencilAlt,
  faUser
} from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../store/actions/user.actions'
import SaveAndCancelButtons from '../saveAndCancelButtons/saveAndCancelButtons'
import './userProfile.scss'

export default function UserProfile() {
  const user = useSelector(state => state.user.user)
  const [isClickedDetailsEdit, setIsClickedDetailsEdit] = useState(false)
  const [isClickedPasswordEddit, setIsClickedPasswordEdit] = useState(false)
  const [isClickedEmailEdit, setIsClickedEmailEdit] = useState(false)
  const [displayButton, setDisplayButton] = useState(false)
  const [userProfile, setUserProfile] = useState(user)
  const dispatch = useDispatch()

  const onEditDetailsClick = () => {
    setIsClickedDetailsEdit(true)
  }
  const onEditPasswordClick = () => {
    setIsClickedPasswordEdit(true)
  }

  const onEditEmailClick = () => {
    setIsClickedEmailEdit(true)
  }

  const onSaveClick = () => {
    if (isClickedDetailsEdit) {
      dispatch(userActions.updateUser(userProfile))
      setIsClickedDetailsEdit(false)
    }

    if (isClickedEmailEdit) {
      dispatch(userActions.updateUserEmail(userProfile.email))
      setIsClickedEmailEdit(false)
    }

    setIsClickedPasswordEdit(false)
  }

  const onCancelClick = () => {}

  const handleInputChange = (event, key) => {
    setUserProfile({ ...userProfile, [key]: event })
    dispatch(userActions.changeUser({ ...userProfile, [key]: event }))
  }

  useEffect(() => {
    if (isClickedDetailsEdit) {
      setDisplayButton(true)
    }

    if (isClickedPasswordEddit) {
      setDisplayButton(true)
    }

    if (isClickedEmailEdit) {
      setDisplayButton(true)
    }
  }, [isClickedDetailsEdit, isClickedPasswordEddit, isClickedEmailEdit])
  return (
    <>
      <div className="user-profile-container">
        {/* EDIT FIRSTNAME AND LASTNAME */}
        <div className="user-profile-box">
          <div className="user-profile-wrapper">
            <div className="user-profile-row">
              <FontAwesomeIcon icon={faUser} />
              <label>First Name:</label>
              {isClickedDetailsEdit && (
                <input
                  onChange={e => handleInputChange(e.target.value, 'firstName')}
                  value={userProfile.firstName}
                ></input>
              )}
              {!isClickedDetailsEdit && (
                <input value={userProfile.firstName} disabled></input>
              )}
            </div>
            <div className="user-profile-row">
              <FontAwesomeIcon icon={faUser} />
              <label>Last Name:</label>
              {isClickedDetailsEdit && (
                <input
                  onChange={e => handleInputChange(e.target.value, 'lastName')}
                  value={userProfile.lastName}
                ></input>
              )}
              {!isClickedDetailsEdit && (
                <input value={userProfile.lastName} disabled></input>
              )}
            </div>
          </div>

          <button
            onClick={onEditDetailsClick}
            className={
              isClickedDetailsEdit
                ? 'button-non-visible'
                : 'edit-profile-button'
            }
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>

        {/* EDIT EMAIL ADDRESS */}
        <div className="user-profile-box">
          <div className="user-profile-wrapper">
            <div className="user-profile-row">
              <FontAwesomeIcon icon={faEnvelope} />
              <label>Email:</label>
              {isClickedEmailEdit && (
                <input
                  onChange={e => handleInputChange(e.target.value, 'email')}
                  value={userProfile.email}
                ></input>
              )}
              {!isClickedEmailEdit && (
                <input value={userProfile.email} disabled></input>
              )}
            </div>
          </div>
          <button
            onClick={onEditEmailClick}
            className={
              isClickedEmailEdit ? 'button-non-visible' : 'edit-profile-button'
            }
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>

        {/* CHANGE PASSWORD */}
        <div className="user-profile-box">
          <div className="user-profile-wrapper">
            <div className="user-profile-row">
              <FontAwesomeIcon icon={faLock} />
              <label className="password-font-size"> New Password:</label>
              {isClickedPasswordEddit && <input value={user.password}></input>}
              {!isClickedPasswordEddit && (
                <input value={user.password} disabled></input>
              )}
            </div>
            <div className="user-profile-row">
              <FontAwesomeIcon icon={faLock} />
              <label className="password-font-size"> Confirm Password:</label>
              {isClickedPasswordEddit && <input value={user.password}></input>}
              {!isClickedPasswordEddit && (
                <input value={user.password} disabled></input>
              )}
            </div>
          </div>

          <button
            onClick={onEditPasswordClick}
            className={
              isClickedPasswordEddit
                ? 'button-non-visible'
                : 'edit-profile-button'
            }
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>
        <div>
          {displayButton && (
            <SaveAndCancelButtons
              onCancel={onCancelClick}
              onSave={onSaveClick}
            />
          )}
        </div>
      </div>
    </>
  )
}
