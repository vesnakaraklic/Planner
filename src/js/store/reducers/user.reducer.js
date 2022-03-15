import { userConstants } from "../constants/user.constants";

const initialState = {
  users: [],
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LIST:
      console.log(action);
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
};
