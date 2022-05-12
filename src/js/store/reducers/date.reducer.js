import getDateWithoutHours from "../../utils/getDateWithoutHours";
import { dateConstants } from "../constants/date.constants";

const initialState = {
  date: getDateWithoutHours(new Date()),
};

export const datePicker = (state = initialState, action) => {
  switch (action.type) {
    case dateConstants.CHANGE_DATE:
      return {
        ...state,
        date: action.date,
      };
    default:
      return {
        ...state,
      };
  }
};
