import { foodConstants } from "../constants/food.constants";

const initialState = {
  breakfast: "",
  lunch: "",
  dinner: "",
  snack: "",
};

export const food = (state = initialState, action) => {
  switch (action.type) {
    case foodConstants.CHANGE_BREAKFAST:
      return {
        ...state,
        breakfast: action.breakfast,
      };
    case foodConstants.CHANGE_LUNCH:
      return {
        ...state,
        lunch: action.lunch,
      };
    case foodConstants.CHANGE_DINNER:
      return {
        ...state,
        dinner: action.dinner,
      };
    case foodConstants.CHANGE_SNACK:
      return {
        ...state,
        snack: action.snack,
      };
    default:
      return {
        ...state,
      };
  }
};
