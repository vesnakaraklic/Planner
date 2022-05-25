import { dataConstants } from "../constants/data.constants";

const initialState = {
  data: {},
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case dataConstants.DATA_UPDATE_REQUEST:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
