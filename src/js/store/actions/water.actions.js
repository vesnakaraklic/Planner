import { waterConstants } from "../constants/water.constants";
import * as api from "../../api/water";

const getWaterById = (id) => {
  return (dispatch) => {
    dispatch({ type: waterConstants.GET_WATER });
    return api.getWaterById(id).then(
      (res) => {
        const data = res.data();
        dispatch({
          type: waterConstants.CHANGE_WATER,
          water: data ? data.water : 0,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const updateWater = (water) => {
  return (dispatch) => {
    dispatch({ type: waterConstants.CHANGE_WATER, water });
  };
};

export const waterActions = {
  getWaterById,
  updateWater,
};
