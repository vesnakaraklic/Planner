import { prioritiesConstants } from "../constants/priorities.constants";
import * as api from "../../api/priorities";

const getPrioritiesById = (id) => {
  return (dispatch) => {
    dispatch({ type: prioritiesConstants.GET_PRIORITIES });
    return api.getPriorityById(id).then((res) => {
      const data = res.data();
      dispatch({
        type: prioritiesConstants.CHANGE_FIRST_PRIORITY,
        firstPriority: data ? data.first : "",
      });
      dispatch({
        type: prioritiesConstants.CHANGE_SECOND_PRIORITY,
        secondPriority: data ? data.second : "",
      });
      dispatch({
        type: prioritiesConstants.CHANGE_THIRD_PRIORITY,
        thirdPriority: data ? data.third : "",
      });
    });
  };
};

const updateFirstPriority = (first) => {
  return (dispatch) => {
    dispatch({ type: prioritiesConstants.CHANGE_FIRST_PRIORITY, value: first });
  };
};

const updateSecondPriority = (second) => {
  return (dispatch) => {
    dispatch({
      type: prioritiesConstants.CHANGE_SECOND_PRIORITY,
      value: second,
    });
  };
};
const updateThirdPriority = (third) => {
  return (dispatch) => {
    dispatch({ type: prioritiesConstants.CHANGE_THIRD_PRIORITY, value: third });
  };
};

export const prioritiesActions = {
  getPrioritiesById,
  updateFirstPriority,
  updateSecondPriority,
  updateThirdPriority,
};
