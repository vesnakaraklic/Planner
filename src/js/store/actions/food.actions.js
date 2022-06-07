import { foodConstants } from '../constants/food.constants'
import * as api from '../../api/food'

const getFoodById = id => {
  return dispatch => {
    dispatch({ type: foodConstants.GET_FOOD_REQUEST })
    return api.getFoodById(id).then(
      res => {
        const data = res.data()
        dispatch({ type: foodConstants.GET_FOOD_SUCCESS, value: data })
      },
      error => {
        dispatch({ type: foodConstants.GET_FOOD_FAILURE, error })
      }
    )
  }
}

const updateFood = (id, data) => {
  return dispatch => {
    dispatch({ type: foodConstants.UPDATE_FOOD_REQUEST })
    return api.updateFood(id, data).then(
      () => {
        dispatch({
          type: foodConstants.UPDATE_FOOD_SUCCESS
        })
      },
      error => {
        dispatch({ type: foodConstants.UPDATE_FOOD_FAILURE, error })
      }
    )
  }
}

const changeFood = data => {
  return dispatch => {
    dispatch({ type: foodConstants.CHANGE_FOOD, value: data })
  }
}

export const foodActions = {
  getFoodById,
  updateFood,
  changeFood
}
