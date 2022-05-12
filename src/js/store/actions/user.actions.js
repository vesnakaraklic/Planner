import { userConstants } from "../constants/user.constants";
import * as api from "../../api/users";
import { localStorageService } from "../../services/localStorage.service";

const setUserList = (data) => {
  return (dispatch) => {
    dispatch({ type: userConstants.USER_LIST, data });
  };
};

const register = (data) => {
  return (dispatch) => {
    dispatch({ type: userConstants.AUTH_REGISTER_REQUEST });
    return api.register(data).then(
      (user) => {
        if (user) {
          dispatch({ type: userConstants.AUTH_REGISTER_SUCCESS, user });
        }
      },
      (error) => {
        dispatch({ type: userConstants.AUTH_REGISTER_ERROR, error });
      }
    );
  };
};

const login = (data) => {
  return (dispatch) => {
    dispatch({ type: userConstants.AUTH_LOGIN_REQUEST });
    return api.login(data).then(
      (user) => {
        if (user) {
          dispatch({ type: userConstants.AUTH_LOGIN_SUCCESS, user });
        }
      },
      (error) => {
        dispatch({ type: userConstants.AUTH_LOGIN_ERROR, error });
      }
    );
  };
};

const listenToAuthChanges = () => {
  return async (dispatch) => {
    api.onAuthStateChanges(async (user) => {
      if (user) {
        const userData = await api.getUserProfile(user.uid);
        dispatch({ type: userConstants.AUTH_LOGIN_SUCCESS, user: userData });
      } else {
        dispatch({ type: userConstants.AUTH_LOGIN_ERROR, error: "error" });
      }
    });
  };
};

const resetError = () => {
  return (dispatch) => {
    dispatch({ type: userConstants.AUTH_LOGIN_ERROR, error: {} });
  };
};

const logout = () => (dispatch) =>
  api.logout().then((_) => {
    localStorageService.delete("user");
    dispatch({ type: "AUTH_LOGOUT_SUCCESS" });
  });

export const userActions = {
  setUserList,
  register,
  login,
  logout,
  resetError,
  listenToAuthChanges,
};
