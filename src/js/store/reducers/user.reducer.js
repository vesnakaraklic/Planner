import { userConstants } from '../constants/user.constants'

const initialState = {
  users: [],
  user: {},
  error: {},
  loading: true
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LIST:
      return {
        ...state,
        users: action.data.users
      }
    case userConstants.AUTH_REGISTER_REQUEST:
    case userConstants.AUTH_LOGIN_REQUEST:
      return {
        ...state
      }
    case userConstants.AUTH_REGISTER_SUCCESS:
    case userConstants.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false
      }
    case userConstants.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        user: {}
      }

    case userConstants.AUTH_LOGIN_ERROR:
    case userConstants.AUTH_REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case userConstants.UPDATE_USER_EMAIL_SUCCESS:
    case userConstants.UPDATE_USER_SUCCESS:
    case userConstants.CHANGE_USER:
      if (!action.value)
        return {
          ...state
        }
      return {
        ...state,
        user: action.value
      }
    case userConstants.UPDATE_USER_EMAIL_REQUEST:
    case userConstants.UPDATE_USER_EMAIL_FAILURE:
    case userConstants.UPDATE_USER_REQUEST:
    case userConstants.UPDATE_USER_FAILURE:
    default:
      return { ...state }
  }
}
