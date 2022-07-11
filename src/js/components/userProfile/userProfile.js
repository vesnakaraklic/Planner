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
  const [isClickedPasswordEdit, setIsClickedPasswordEdit] = useState(false)
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
    setOldPassword('')
  }

  const onEditEmailClick = () => {
    setIsClickedEmailEdit(true)
    setOldPassword('')
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
        if (res) {
          setIsClickedEmailEdit(false)
          setDisplayButton(false)
        } else {
          toastService('error', 'Current password incorrect!', {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        }
      } else {
        toastService('error', 'Current password incorrect!', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      }
    }

    if (isClickedPasswordEdit) {
      if (
        oldPassword !== '' &&
        newPassword === repeatNewPassword &&
        newPassword !== ''
      ) {
        const res = await dispatch(
          userActions.updateUserPassword(newPassword, oldPassword)
        )
        if (res) {
          setIsClickedPasswordEdit(false)
          setDisplayButton(false)
        } else {
          toastService('error', 'Incorrect current password!', {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        }
      } else {
        if (oldPassword === '' && newPassword === '') {
          toastService('error', 'Please, fill in all fields.', {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        } else if (oldPassword === '') {
          toastService('error', 'Please, enter the current password.', {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        } else if (newPassword !== repeatNewPassword || newPassword === '') {
          toastService('error', 'New password incorrect!', {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        } else {
          toastService('error', 'Incorrect data!', {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        }
      }
    }
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

    if (isClickedPasswordEdit) {
      setNewPassword('')
      setOldPassword('')
      setRepeatNewPassword('')
      setIsClickedPasswordEdit(false)
    }

    setDisplayButton(false)
  }

  const handleInputChange = (event, key) => {
    setUserProfile({ ...userProfile, [key]: event })
  }

  useEffect(() => {
    if (isClickedDetailsEdit) {
      setDisplayButton(true)
    }

    if (isClickedPasswordEdit) {
      setDisplayButton(true)
    }

    if (isClickedEmailEdit) {
      setDisplayButton(true)
    }
  }, [isClickedDetailsEdit, isClickedPasswordEdit, isClickedEmailEdit])

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
              isClickedPasswordEdit ||
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
              isClickedPasswordEdit ||
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
            isClickedPasswordEdit
              ? 'user-profile-box-background'
              : 'user-profile-box'
          }
        >
          <div className="user-profile-wrapper">
            {isClickedPasswordEdit && (
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
              {isClickedPasswordEdit && (
                <input
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                ></input>
              )}
              {!isClickedPasswordEdit && <input disabled></input>}
            </div>
            <div className="user-profile-row">
              <FontAwesomeIcon icon={faLock} />
              <label className="password-font-size"> Confirm Password:</label>
              {isClickedPasswordEdit && (
                <input
                  value={repeatNewPassword}
                  onChange={e => setRepeatNewPassword(e.target.value)}
                ></input>
              )}
              {!isClickedPasswordEdit && (
                <input value={user.password} disabled></input>
              )}
            </div>
          </div>

          <button
            onClick={onEditPasswordClick}
            className={
              isClickedEmailEdit ||
              isClickedPasswordEdit ||
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
