import { prioritiesConstants } from "../constants/priorities.constants";

const initialState = {
  firstPriority: "",
  secondPriority: "",
  thirdPriority: "",
};

export const priorities = (state = initialState, action) => {
  switch (action.type) {
    case prioritiesConstants.CHANGE_FIRST_PRIORITY:
      return {
        ...state,
        firstPriority: action.value,
      };
    case prioritiesConstants.CHANGE_SECOND_PRIORITY:
      return {
        ...state,
        secondPriority: action.value,
      };
    case prioritiesConstants.CHANGE_THIRD_PRIORITY:
      return {
        ...state,
        thirdPriority: action.value,
      };
    default:
      return {
        ...state,
      };
  }
};
