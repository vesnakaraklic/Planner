import React, { useEffect, useState } from 'react'
import {
  faEnvelope,
  faLock,
  faUser,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import InputWithIcon from '../../../components/inputWithIcon/inputWithIcon'
import NormalButton from '../../../components/normalButton/normalButton'
import { getUsers } from '../../../api/users'
import { userActions } from '../../../store/actions/user.actions'
import './register.scss'
import { toastService } from '../../../services/toast.service'
import { toast, ToastContainer } from 'react-toastify'

const form = { firstName: '', lastName: '', email: '', password: '' }
const defaultErrorMessages = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

export default function RegisterForm({ setActive }) {
  const dispatch = useDispatch()
  const [registerForm, setRegisterForm] = useState(form)
  const [errorMessages, setErrorMessages] = useState(defaultErrorMessages)
  const user = useSelector(state => state.user)
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const onSubmit = () => {
    if (navigator.onLine) {
      const tempErrorMessages = { ...defaultErrorMessages }
      Object.keys(registerForm).map(key => {
        tempErrorMessages[key] = validateField(key, registerForm[key])
      })
      if (registerForm.email !== '') {
        tempErrorMessages.email = validateEmail(registerForm.email)
      }
      isFormValid(tempErrorMessages) &&
        dispatch(userActions.register(registerForm))
    } else {
      toastService('error', 'No internet connection!', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
  }

  const handleInputChange = (event, key) => {
    setRegisterForm({ ...registerForm, [key]: event.target.value })
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

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown)
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

  useEffect(() => {
    getUsers(dispatch)
    dispatch(userActions.resetError())
  }, [])

  useEffect(() => {
    switch (user.error.code) {
      case 'auth/invalid-email':
        return setErrorMessages({
          ...errorMessages,
          password: 'Email is badly formated'
        })
      case 'auth/weak-password':
        return setErrorMessages({
          ...errorMessages,
          password: 'Use at least 6 characers for password'
        })
      default:
        return setErrorMessages(defaultErrorMessages)
    }
  }, [user.error])

  return (
    <>
      <div className="register-form">
        <div className="register-title">
          <p>Registration Form</p>
        </div>
        <div style={{ padding: '3vh' }}>
          <InputWithIcon
            className="auth-input"
            icon={faUser}
            name={'firstName'}
            placeholder={'Firstname'}
            type={'text'}
            onChange={event => handleInputChange(event, 'firstName')}
            errorMsg={errorMessages.firstName}
          />
          <InputWithIcon
            className="auth-input"
            icon={faUser}
            name={'lastName'}
            placeholder={'Lastname'}
            type={'text'}
            onChange={event => handleInputChange(event, 'lastName')}
            errorMsg={errorMessages.lastName}
          />
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

          <NormalButton buttonName={'Register'} onClick={onSubmit} />
          <p className="redirect-text">
            Already have an account?
            <a onClick={() => setActive(1)} className="redirect-link">
              {' Login Now'}
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
