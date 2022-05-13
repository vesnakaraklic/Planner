import { dataConstants } from "./../constants/data.constants";
import * as apiMoney from "../../api/money";
import * as apiFood from "../../api/food";
import * as apiWater from "../../api/water";
import * as apiExercise from "../../api/exercise";

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
      case "water":
        apiWater.createWater(id, data);
        break;
      case "exercise":
        apiExercise.createExercise(id, data);
        break;

      default:
        break;
    }
  };
};

export const dataActions = {
  update,
};
