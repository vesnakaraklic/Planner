import { foodConstants } from "../constants/food.constants";
import * as api from "../../api/food";

const getFoodById = (id) => {
  return (dispatch) => {
    dispatch({ type: foodConstants.GET_FOOD });
    return api.getFoodById(id).then(
      (res) => {
        const data = res.data();
        dispatch({
          type: foodConstants.CHANGE_BREAKFAST,
          breakfast: data.breakfast,
        });
        dispatch({
          type: foodConstants.CHANGE_LUNCH,
          lunch: data.lunch,
        });
        dispatch({ type: foodConstants.CHANGE_DINNER, dinner: data.dinner });
        dispatch({ type: foodConstants.CHANGE_SNACK, snack: data.snack });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const updateBreakfast = (breakfast) => {
  return (dispatch) => {
    dispatch({ type: foodConstants.CHANGE_BREAKFAST, breakfast });
  };
};

const updateLunch = (lunch) => {
  return (dispatch) => {
    dispatch({ type: foodConstants.CHANGE_LUNCH, lunch });
  };
};

const updateDinner = (dinner) => {
  return (dispatch) => {
    dispatch({ type: foodConstants.CHANGE_DINNER, dinner });
  };
};

const updateSnack = (snack) => {
  return (dispatch) => {
    dispatch({ type: foodConstants.CHANGE_SNACK, snack });
  };
};

export const foodActions = {
  getFoodById,
  updateBreakfast,
  updateLunch,
  updateDinner,
  updateSnack,
};
