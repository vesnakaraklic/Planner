import { foodConstants } from "../constants/food.constants";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  breakfast: "",
  lunch: "",
  dinner: "",
  snack: "",
};

export const food = (state = initialState, action) => {
  switch (action.type) {
    case foodConstants.CHANGE_FOOD:
      const newState = cloneDeep(initialState);
      if (action.value && Object.keys(action.value).length > 0)
        Object.keys(newState).forEach((key) => {
          if (action.value[key]) newState[key] = action.value[key];
        });
      return {
        ...newState,
      };
    default:
      return {
        ...state,
      };
  }
};
