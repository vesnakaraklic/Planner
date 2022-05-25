import { toDoConstants } from "../constants/toDo.constants";
import * as api from "../../api/toDo";

const getToDoById = (id) => {
  return (dispatch) => {
    dispatch({ type: toDoConstants.GET_TODO });
    return api.getToDoById(id).then(
      (res) => {
        const data = res.data();

        dispatch({ type: toDoConstants.CHANGE_TODO, value: data });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const updateToDo = (value) => {
  return (dispatch) => {
    dispatch({ type: toDoConstants.CHANGE_TODO, value: value });
  };
};

export const toDoActions = {
  getToDoById,
  updateToDo,
};
