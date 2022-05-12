import { waterConstants } from "../constants/water.constants";

const initialState = {
  water: 0,
};

export const waterDrink = (state = initialState, action) => {
  switch (action.type) {
    case waterConstants.CHANGE_WATER:
      return {
        ...state,
        water: action.water,
      };
    default:
      return {
        ...state,
      };
  }
};
