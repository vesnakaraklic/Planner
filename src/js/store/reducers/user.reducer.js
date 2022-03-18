import { userConstants } from "../constants/user.constants";

const initialState = {
  users: [],
  user: {},
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
    case userConstants.AUTH_REGISTER_ERROR:
      return {
        ...state,
      };
    case userConstants.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
