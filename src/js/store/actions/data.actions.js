import { dataConstants } from "./../constants/data.constants";
import * as apiMoney from "../../api/money";

const update = (collection, data, id = "") => {
  return (dispatch) => {
    dispatch({ type: dataConstants.DATA_UPDATE_REQUEST });
    switch (collection) {
      case "money":
        apiMoney.createMoney(id, data);
        break;
      default:
        break;
    }
  };
};

export const dataActions = {
  update,
};
