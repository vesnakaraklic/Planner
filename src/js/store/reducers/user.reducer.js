import { userConstants } from "../constants/user.constants";

const initialState = {
  users: [],
  user: {},
  error: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LIST:
      console.log(action);
      return {
        ...state,
        users: action.data.users,
      };
    case userConstants.AUTH_REGISTER_REQUEST:
    case userConstants.AUTH_LOGIN_REQUEST:
      return {
        ...state,
      };
    case userConstants.AUTH_REGISTER_SUCCESS:
    case userConstants.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case userConstants.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
      };

    case userConstants.AUTH_LOGIN_ERROR:
    case userConstants.AUTH_REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
