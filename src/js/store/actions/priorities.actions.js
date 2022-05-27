import { prioritiesConstants } from "../constants/priorities.constants";
import * as api from "../../api/priorities";

const getPrioritiesById = (id) => {
  return (dispatch) => {
    dispatch({ type: prioritiesConstants.GET_PRIORITIES });
    return api.getPriorityById(id).then(
      (res) => {
        const data = res.data();
        dispatch({
          type: prioritiesConstants.CHANGE_PRIORITIES,
          value: data?.priorities,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const updatePriorities = (value) => {
  return (dispatch) => {
    dispatch({ type: prioritiesConstants.CHANGE_PRIORITIES, value: value });
  };
};

export const prioritiesActions = {
  getPrioritiesById,
  updatePriorities,
};
