import { userConstants } from "../constants/user.constants";
import * as api from "../../api/users";

const setUserList = (data) => {
  return (dispatch) => {
    dispatch({ type: userConstants.USER_LIST, data });
  };
};
const register = (data) => {
  console.log("Register fun", data);
  const request = () => {
    return { type: userConstants.AUTH_REGISTER_REQUEST };
  };
  const success = (user) => {
    return { type: userConstants.AUTH_REGISTER_SUCCESS, user };
  };
  const failure = (error) => {
    return { type: userConstants.AUTH_REGISTER_REQUEST, error };
  };
  return (dispatch) => {
    dispatch(request());
    return api.register(data).then(
      (user) => {
        if (user) {
          dispatch(success(user));
        }
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };
};

export const userActions = {
  setUserList,
  register,
};
