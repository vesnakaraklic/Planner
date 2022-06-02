import { foodConstants } from '../constants/food.constants'
import * as api from '../../api/food'

const getFoodById = id => {
  return dispatch => {
    dispatch({ type: foodConstants.GET_FOOD })
    return api.getFoodById(id).then(
      res => {
        const data = res.data()
        dispatch({ type: foodConstants.CHANGE_FOOD, value: data })
      },
      error => {
        console.log(error)
      }
    )
  }
}

const updateFood = value => {
  return dispatch => {
    dispatch({ type: foodConstants.CHANGE_FOOD, value: value })
  }
}

const getFoodForWeek = arrayOfIndex => {
  console.log(arrayOfIndex)
  return dispatch => {
    dispatch({ type: foodConstants.GET_FOOD_FOR_WEEK })
    return api.getFoodForWeek(arrayOfIndex).then(res => {
      res.forEach(el =>
        dispatch({ type: foodConstants.CHANGE_FOOD_FOR_WEEK, value: el.data() })
      )
    })
  }
}

export const foodActions = {
  getFoodById,
  updateFood,
  getFoodForWeek
}
