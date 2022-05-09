import { dataConstants } from "../constants/data.constants";

const initialState = {
  data: {},
};

export const money = (state = initialState, action) => {
  switch (action.type) {
    case dataConstants.DATA_UPDATE_REQUEST:
      console.log(action);
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export const food = (state = initialState, action) => {
  switch (action.type) {
    case dataConstants.DATA_UPDATE_REQUEST:
      console.log(action);
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
