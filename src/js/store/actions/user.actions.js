import { userConstants } from "../constants/user.constants";

const setUserList = (payload) => {
  return (dispatch) => {
    dispatch({ type: userConstants.USER_LIST, payload });
  };
};

export const userActions = {
  setUserList,
};
