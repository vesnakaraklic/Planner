import { moneyConstants } from '../constants/money.constants'

const initialState = {
  moneyIn: '0',
  moneyOut: '0'
}

export const money = (state = initialState, action) => {
  switch (action.type) {
    case moneyConstants.CHANGE_MONEY:
      if (!action?.money) return { ...state }
      return {
        moneyOut: action.money.moneyOut ?? '0',
        moneyIn: action.money.moneyIn ?? '0'
      }
    case moneyConstants.CHANGE_MONEYIN:
      if (!action.moneyIn) return { ...state }
      return {
        ...state,
        moneyIn: action.moneyIn
      }
    case moneyConstants.CHANGE_MONEYOUT:
      if (!action.moneyOut) return { ...state }
      return {
        ...state,
        moneyOut: action.moneyOut
      }
    default:
      return {
        ...state
      }
  }
}
