import db from "../../db/firestore";
import { moneyConstants } from "./../constants/money.constants";
import * as api from "../../api/money";

const getMoneyById = (id) => {
  return (dispatch) => {
    dispatch({ type: moneyConstants.GET_MONEY });
    return api.getMoneyById(id).then(
      (res) => {
        const data = res.data();
        dispatch({
          type: moneyConstants.CHANGE_MONEYIN,
          moneyIn: data.MoneyIn,
        });
        dispatch({
          type: moneyConstants.CHANGE_MONEYOUT,
          moneyOut: data.MoneyOut,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};
const updateMoneyIn = (moneyIn) => {
  return (dispatch) => {
    dispatch({ type: moneyConstants.CHANGE_MONEYIN, moneyIn });
  };
};
const updateMoneyOut = (moneyOut) => {
  return (dispatch) => {
    dispatch({ type: moneyConstants.CHANGE_MONEYOUT, moneyOut });
  };
};

export const moneyActions = {
  getMoneyById,
  updateMoneyIn,
  updateMoneyOut,
};
