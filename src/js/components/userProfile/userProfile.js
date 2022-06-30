import {
  faEnvelope,
  faLock,
  faPencilAlt,
  faUser
} from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toastService } from '../../services/toast.service'
import { userActions } from '../../store/actions/user.actions'
import SaveAndCancelButtons from '../saveAndCancelButtons/saveAndCancelButtons'
import { toast } from 'react-toastify'
import './userProfile.scss'

export default function UserProfile() {
  const user = useSelector(state => state.user.user)
  const [isClickedDetailsEdit, setIsClickedDetailsEdit] = useState(false)
  const [isClickedPasswordEddit, setIsClickedPasswordEdit] = useState(false)
  const [isClickedEmailEdit, setIsClickedEmailEdit] = useState(false)
  const [displayButton, setDisplayButton] = useState(false)
  const [userProfile, setUserProfile] = useState(user)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')
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

  const onSaveClick = async () => {
    if (isClickedDetailsEdit) {
      dispatch(userActions.updateUser(userProfile))
      setIsClickedDetailsEdit(false)
      setDisplayButton(false)
    }

    if (isClickedEmailEdit) {
      if (oldPassword !== '') {
        const res = await dispatch(
          userActions.updateUserEmail(userProfile.email, oldPassword)
        )
        console.log('res', res)
        if (res) {
          setIsClickedEmailEdit(false)
          setDisplayButton(false)
        } else {
          toastService('error', 'Current password incorect!', {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        }
      } else {
        toastService('error', 'Current password incorect!', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      }
    }

    if (isClickedPasswordEddit) {
      if (
        oldPassword !== '' &&
        newPassword === repeatNewPassword &&
        newPassword !== ''
      ) {
        dispatch(userActions.updateUserPassword(newPassword, oldPassword))
        // toast('Password updated!', { position: toast.POSITION.BOTTOM_RIGHT })
        setIsClickedPasswordEdit(false)
      }

      if (oldPassword === '') {
        // toast.warning('Current password incorect!', {
        //   position: toast.POSITION.BOTTOM_RIGHT
        // })
      }

      if (newPassword !== repeatNewPassword || newPassword === '') {
        // toast.warning('Incorect new password!', {
        //   position: toast.POSITION.BOTTOM_RIGHT
        // })
      }
    }

    // setIsClickedPasswordEdit(false)
  }

  const onCancelClick = () => {
    if (isClickedDetailsEdit) {
      setUserProfile(user)
      setIsClickedDetailsEdit(false)
    }

    if (isClickedEmailEdit) {
      userProfile.email = user.email
      setOldPassword('')
      setIsClickedEmailEdit(false)
    }

    if (isClickedPasswordEddit) {
      setNewPassword('')
      setOldPassword('')
      setIsClickedPasswordEdit(false)
    }

    setDisplayButton(false)
  }

  const handleInputChange = (event, key) => {
    setUserProfile({ ...userProfile, [key]: event })
    // dispatch(userActions.updateUser(userProfile))
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
        <h3 className="text-style">Profile Details</h3>
        {/* EDIT FIRSTNAME AND LASTNAME */}
        <div
          className={
            isClickedDetailsEdit
              ? 'user-profile-box-background'
              : 'user-profile-box'
          }
        >
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
              isClickedEmailEdit ||
              isClickedPasswordEddit ||
              isClickedDetailsEdit
                ? 'button-non-visible'
                : 'edit-profile-button'
            }
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>

        {/* EDIT EMAIL ADDRESS */}
        <div
          className={
            isClickedEmailEdit
              ? 'user-profile-box-background'
              : 'user-profile-box'
          }
        >
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
            {isClickedEmailEdit && (
              <div className="user-profile-row">
                <FontAwesomeIcon icon={faLock} />
                <label className="password-font-size">Current Password:</label>
                <input
                  value={oldPassword}
                  onChange={e => setOldPassword(e.target.value)}
                ></input>
              </div>
            )}
          </div>
          <button
            onClick={onEditEmailClick}
            className={
              isClickedEmailEdit ||
              isClickedPasswordEddit ||
              isClickedDetailsEdit
                ? 'button-non-visible'
                : 'edit-profile-button'
            }
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>

        {/* CHANGE PASSWORD */}
        <div
          className={
            isClickedPasswordEddit
              ? 'user-profile-box-background'
              : 'user-profile-box'
          }
        >
          <div className="user-profile-wrapper">
            {isClickedPasswordEddit && (
              <div className="user-profile-row">
                <FontAwesomeIcon icon={faLock} />
                <label className="password-font-size">Current Password:</label>
                <input
                  value={oldPassword}
                  onChange={e => setOldPassword(e.target.value)}
                ></input>
              </div>
            )}
            <div className="user-profile-row">
              <FontAwesomeIcon icon={faLock} />
              <label className="password-font-size"> New Password:</label>
              {isClickedPasswordEddit && (
                <input
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                ></input>
              )}
              {!isClickedPasswordEddit && <input disabled></input>}
            </div>
            <div className="user-profile-row">
              <FontAwesomeIcon icon={faLock} />
              <label className="password-font-size"> Confirm Password:</label>
              {isClickedPasswordEddit && (
                <input
                  value={repeatNewPassword}
                  onChange={e => setRepeatNewPassword(e.target.value)}
                ></input>
              )}
              {!isClickedPasswordEddit && (
                <input value={user.password} disabled></input>
              )}
            </div>
          </div>

          <button
            onClick={onEditPasswordClick}
            className={
              isClickedEmailEdit ||
              isClickedPasswordEddit ||
              isClickedDetailsEdit
                ? 'button-non-visible'
                : 'edit-profile-button'
            }
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>
        <div className="cancel-and-save-buttons-container">
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
