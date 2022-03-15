import { useDispatch } from "react-redux";
import * as api from "../api/users";
import db from "../db/firestore";
import { userActions } from "../store/actions/user.actions";

export const getUsers = (dispatch) => {
  api.getUsers().then((response) => {
    dispatch(
      userActions.setUserList({
        users: response,
      })
    );
  });
};
