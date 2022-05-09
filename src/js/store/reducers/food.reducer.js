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
      console.log(action);
      return {
        ...state,
        breakfast: action.breakfast,
      };
    case foodConstants.CHANGE_LUNCH:
      console.log(action);
      return {
        ...state,
        lunch: action.lunch,
      };
    case foodConstants.CHANGE_DINNER:
      console.log(action);
      return {
        ...state,
        dinner: action.dinner,
      };
    case foodConstants.CHANGE_SNACK:
      console.log(action);
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
