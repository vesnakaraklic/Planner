import { userConstants } from '../constants/user.constants'
import * as api from '../../api/users'
import { localStorageService } from '../../services/localStorage.service'
import { toastService } from '../../services/toast.service'
import { toast } from 'react-toastify'

const setUserList = data => {
  return dispatch => {
    dispatch({ type: userConstants.USER_LIST, data })
  }
}

const register = data => {
  return dispatch => {
    dispatch({ type: userConstants.AUTH_REGISTER_REQUEST })
    return api.register(data).then(
      user => {
        if (user) {
          dispatch({ type: userConstants.AUTH_REGISTER_SUCCESS, user })
        }
      },
      error => {
        dispatch({ type: userConstants.AUTH_REGISTER_ERROR, error })
      }
    )
  }
}

const login = data => {
  return dispatch => {
    dispatch({ type: userConstants.AUTH_LOGIN_REQUEST })
    return api.login(data).then(
      user => {
        if (user) {
          dispatch({ type: userConstants.AUTH_LOGIN_SUCCESS, user })
        }
      },
      error => {
        dispatch({ type: userConstants.AUTH_LOGIN_ERROR, error })
      }
    )
  }
}

const listenToAuthChanges = () => {
  return dispatch => {
    api.onAuthStateChanges(async user => {
      if (user) {
        const userData = await api.getUserProfile(user.uid)
        dispatch({ type: userConstants.AUTH_LOGIN_SUCCESS, user: userData })
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        dispatch({ type: userConstants.AUTH_LOGIN_ERROR, error: 'error' })
      }
    })
  }
}

const resetError = () => {
  return dispatch => {
    dispatch({ type: userConstants.AUTH_LOGIN_ERROR, error: {} })
  }
}

const resetPassword = email => {
  return dispatch => {
    dispatch({ type: userConstants.AUTH_RESET_PASSWORD_REQUEST })
    return api.resetPassword(email)
  }
}

const logout = () => dispatch =>
  api.logout().then(_ => {
    localStorageService.delete('user')
    dispatch({ type: 'AUTH_LOGOUT_SUCCESS' })
  })

const updateUser = data => {
  return dispatch => {
    dispatch({ type: userConstants.UPDATE_USER_REQUEST })
    return api
      .updateUserProfile(data)
      .then(() => {
        dispatch({ type: userConstants.UPDATE_USER_SUCCESS, value: data })
        toastService('success', 'Details updated!', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
      .catch(() => dispatch({ type: userConstants.UPDATE_USER_FAILURE }))
  }
}

const changeUser = data => {
  return dispatch => {
    dispatch({ type: userConstants.CHANGE_USER, value: data })
  }
}

const updateUserEmail = (data, oldPassword) => {
  return dispatch => {
    dispatch({ type: userConstants.UPDATE_USER_EMAIL_REQUEST })
    return api.updateUserEmail(data, oldPassword).then(
      res => {
        dispatch({ type: userConstants.UPDATE_USER_EMAIL_SUCCESS, value: res })
        toastService('success', 'Email updated!', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        return res
      },
      error => {
        dispatch({ type: userConstants.UPDATE_USER_EMAIL_FAILURE, error })

        return null
      }
    )
  }
}

const updateUserPassword = (newPassword, oldPassword) => {
  return dispatch => {
    dispatch({ type: userConstants.UPDATE_USER_PASSWORD_REQUEST })
    return api.updateUserPassword(newPassword, oldPassword).then(
      res => {
        dispatch({
          type: userConstants.UPDATE_USER_PASSWORD_SUCCESS,
          value: res
        })
        toastService('success', 'Pasword updated!', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        return res
      },
      error => {
        dispatch({ type: userConstants.UPDATE_USER_PASSWORD_FAILURE, error })

        return null
      }
    )
  }
}

export const userActions = {
  setUserList,
  register,
  login,
  logout,
  resetError,
  listenToAuthChanges,
  updateUser,
  changeUser,
  updateUserEmail,
  updateUserPassword,
  resetPassword
}
