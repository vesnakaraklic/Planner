import { moneyConstants } from "../constants/money.constants";

const initialState = {
  moneyIn: "0",
  moneyOut: "0",
};

export const money = (state = initialState, action) => {
  switch (action.type) {
    case moneyConstants.CHANGE_MONEYIN:
      return {
        ...state,
        moneyIn: action.moneyIn,
      };
    case moneyConstants.CHANGE_MONEYOUT:
      return {
        ...state,
        moneyOut: action.moneyOut,
      };
    default:
      return {
        ...state,
      };
  }
};
