import { moneyConstants } from './../constants/money.constants'
import * as api from '../../api/money'

const getMoneyById = id => {
  return dispatch => {
    dispatch({ type: moneyConstants.GET_MONEY_REQUEST })
    return api.getMoneyById(id).then(
      res => {
        const data = res.data()
        dispatch({
          type: moneyConstants.GET_MONEY_SUCCESS,
          money: data ?? {}
        })
      },
      error => {
        dispatch({ type: moneyConstants.GET_MONEY_FAILURE, error })
      }
    )
  }
}
const changeMoney = money => {
  return dispatch => {
    dispatch({ type: moneyConstants.CHANGE_MONEY, money })
  }
}
const changeMoneyIn = moneyIn => {
  return dispatch => {
    dispatch({ type: moneyConstants.CHANGE_MONEYIN, moneyIn })
  }
}
const changeMoneyOut = moneyOut => {
  return dispatch => {
    dispatch({ type: moneyConstants.CHANGE_MONEYOUT, moneyOut })
  }
}

const updateMoney = (id, data) => {
  return dispatch => {
    dispatch({ type: moneyConstants.UPDATE_MONEY_REQUEST })
    return api.updateMoney(id, data).then(
      () => {
        dispatch({ type: moneyConstants.UPDATE_MONEY_SUCCESS })
      },
      error => {
        dispatch({ type: moneyConstants.UPDATE_MONEY_FAILURE, error })
      }
    )
  }
}

export const moneyActions = {
  getMoneyById,
  changeMoney,
  changeMoneyIn,
  changeMoneyOut,
  updateMoney
}
