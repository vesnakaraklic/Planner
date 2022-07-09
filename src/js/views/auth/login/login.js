import React, { useEffect, useState } from 'react'
import {
  faLock,
  faEnvelope,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../../store/actions/user.actions'
import InputWithIcon from '../../../components/inputWithIcon/inputWithIcon'
import NormalButton from '../../../components/normalButton/normalButton'
import { toastService } from '../../../services/toast.service'
import { toast, ToastContainer } from 'react-toastify'
import './login.scss'

const defaultForm = { email: '', password: '' }
const defaultErrorMessages = { email: '', password: '' }

const LoginForm = ({ setActive }) => {
  const dispatch = useDispatch()
  const [loginForm, setLoginForm] = useState(defaultForm)
  const user = useSelector(state => state.user)
  const [errorMessages, setErrorMessages] = useState(defaultErrorMessages)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isForgetPasswordClicked, setIsForgetPasswordClicked] = useState(false)
  const [emailForResetPassword, setEmailForResetPassword] = useState('')

  const onSubmit = () => {
    const tempErrorMessages = { ...defaultErrorMessages }
    Object.keys(loginForm).map(key => {
      tempErrorMessages[key] = validateField(key, loginForm[key])
    })
    if (loginForm.email !== '') {
      tempErrorMessages.email = validateEmail(loginForm.email)
    }
    isFormValid(tempErrorMessages) && dispatch(userActions.login(loginForm))
  }

  const handleInputChange = (event, key) => {
    setLoginForm({ ...loginForm, [key]: event.target.value })
    validateField(key, event.target.value)
  }

  const validateField = (key, value) => {
    if (value === '') {
      setErrorMessages(oldErrorMessages => ({
        ...oldErrorMessages,
        [key]: 'Required'
      }))
      return 'Required'
    } else {
      setErrorMessages(oldErrorMessages => ({
        ...oldErrorMessages,
        [key]: ''
      }))
      return ''
    }
  }

  const validateEmail = email => {
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setErrorMessages({
        ...errorMessages,
        email: ''
      })
      return ''
    } else {
      setErrorMessages({
        ...errorMessages,
        email: 'Email is badly formated'
      })
      return 'Email is badly formated'
    }
  }

  const isFormValid = errorMsgs => {
    let tempValidForm = true
    Object.values(errorMsgs).map(errorMsg => {
      if (errorMsg !== '') {
        tempValidForm = false
      }
    })
    return tempValidForm
  }

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown)
  }

  const onForgetClick = () => {
    setIsForgetPasswordClicked(true)
  }

  const onSendEmailClick = () => {
    dispatch(userActions.resetPassword(emailForResetPassword))
    toastService('success', 'Email sent! Check your inbox.', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
    setIsForgetPasswordClicked(false)
  }

  const handleResetEmailChange = event => {
    setEmailForResetPassword(event.target.value)
  }

  const onCancelClick = () => {
    setIsForgetPasswordClicked(false)
  }

  useEffect(() => {
    dispatch(userActions.resetError())
  }, [])

  useEffect(() => {
    switch (user.error.code) {
      case 'auth/invalid-email':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return setErrorMessages({
          ...errorMessages,
          password: 'Invalid email or password'
        })
      default:
        return setErrorMessages(defaultErrorMessages)
    }
  }, [user.error])

  return (
    <>
      <div className="login-form">
        <div className="login-title">
          <p>Login Form</p>
        </div>
        {!isForgetPasswordClicked && (
          <div style={{ padding: '3vh' }}>
            <InputWithIcon
              className="auth-input"
              icon={faEnvelope}
              name={'email'}
              placeholder={'Email'}
              type={'email'}
              onChange={event => handleInputChange(event, 'email')}
              onBlur={event => validateEmail(event.target.value)}
              errorMsg={errorMessages.email}
            />
            <InputWithIcon
              className="auth-input"
              icon={faLock}
              name={'password'}
              placeholder={'Password'}
              type={isPasswordShown ? 'text' : 'password'}
              iconEye={!isPasswordShown ? faEye : faEyeSlash}
              onEyeClick={togglePasswordVisibility}
              onChange={event => handleInputChange(event, 'password')}
              errorMsg={errorMessages.password}
            />
            <a onClick={() => onForgetClick()} className="reset-password-link">
              {' Forgot your password?'}
            </a>
            <NormalButton buttonName={'Login'} onClick={onSubmit} />
            <p className="redirect-text">
              Not a member?
              <a onClick={() => setActive(2)} className="redirect-link">
                {' Signup Now'}
              </a>
            </p>
          </div>
        )}
        {isForgetPasswordClicked && (
          <div style={{ padding: '3vh' }}>
            <p className="enter-email-for-reset">
              Enter email for reset password
            </p>
            <InputWithIcon
              className="auth-input"
              icon={faEnvelope}
              name={'email'}
              placeholder={'Email'}
              type={'email'}
              onChange={event => handleResetEmailChange(event)}
              onBlur={event => validateEmail(event.target.value)}
              errorMsg={errorMessages.email}
            />{' '}
            <div className="reset-password-buttons">
              <NormalButton
                className="reset-buttons"
                buttonName={'Send email'}
                onClick={onSendEmailClick}
              />
              <NormalButton buttonName={'Cancel'} onClick={onCancelClick} />{' '}
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  )
}
export default LoginForm
