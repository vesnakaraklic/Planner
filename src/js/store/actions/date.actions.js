import { dateConstants } from "../constants/date.constants";

const getDate = () => {
  return (dispatch) => {
    dispatch({ type: dateConstants.GET_DATE });
  };
};

const updateDate = (date) => {
  return (dispatch) => {
    dispatch({ type: dateConstants.CHANGE_DATE, date });
  };
};

export const dateActions = {
  updateDate,
  getDate,
};
