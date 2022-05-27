import { prioritiesConstants } from "../constants/priorities.constants";

const initialState = {
  priorities: [
    { value: "", finished: false },
    { value: "", finished: false },
    { value: "", finished: false },
  ],
};

export const priorities = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case prioritiesConstants.CHANGE_PRIORITIES:
      if (!action.value)
        return {
          ...initialState,
        };
      return {
        priorities:
          action.value?.length < 3 ? initialState.priorities : action.value,
      };
    default:
      return {
        ...state,
      };
  }
};
