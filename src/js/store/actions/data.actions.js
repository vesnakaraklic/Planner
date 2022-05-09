import { dataConstants } from "./../constants/data.constants";
import * as apiMoney from "../../api/money";
import * as apiFood from "../../api/food";

const update = (collection, data, id = "") => {
  return (dispatch) => {
    dispatch({ type: dataConstants.DATA_UPDATE_REQUEST });
    switch (collection) {
      case "money":
        apiMoney.createMoney(id, data);
        break;
      case "food":
        apiFood.createFood(id, data);
        break;
      default:
        break;
    }
  };
};

export const dataActions = {
  update,
};
