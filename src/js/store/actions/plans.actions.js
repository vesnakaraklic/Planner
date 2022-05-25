import { plansConstants } from "../constants/plans.constants";
import * as api from "../../api/plans";

const getPlansById = (id) => {
  return (dispatch) => {
    dispatch({ type: plansConstants.GET_PLANS });
    return api.getPlansById(id).then(
      (res) => {
        const data = res.data();
        dispatch({ type: plansConstants.CHANGE_PLANS, value: data });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const updatePlan = (value) => {
  return (dispatch) => {
    dispatch({ type: plansConstants.CHANGE_PLANS, value: value });
  };
};

export const plansActions = {
  getPlansById,
  updatePlan,
};
