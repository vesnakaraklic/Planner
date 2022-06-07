import { foodConstants } from '../constants/food.constants'
import cloneDeep from 'lodash/cloneDeep'

const initialState = {
  breakfast: '',
  lunch: '',
  dinner: '',
  snack: ''
}

export const food = (state = initialState, action) => {
  const newState = cloneDeep(initialState)
  switch (action.type) {
    case foodConstants.CHANGE_FOOD:
    case foodConstants.GET_FOOD_SUCCESS:
      if (action.value && Object.keys(action.value).length > 0)
        Object.keys(newState).forEach(key => {
          if (action.value[key]) newState[key] = action.value[key]
        })
      return {
        ...newState
      }
    case foodConstants.CHANGE_FOOD_FOR_WEEK:
      return {
        ...state,
        food: action.value
      }
    case foodConstants.GET_FOOD_REQUEST:
    case foodConstants.GET_FOOD_FAILURE:
    case foodConstants.UPDATE_FOOD_REQUEST:
    case foodConstants.UPDATE_FOOD_SUCCESS:
    case foodConstants.UPDATE_FOOD_FAILURE:
    default:
      return {
        ...state
      }
  }
}
