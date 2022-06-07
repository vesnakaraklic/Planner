import { waterConstants } from '../constants/water.constants'
import * as api from '../../api/water'

const getWaterById = id => {
  return dispatch => {
    dispatch({ type: waterConstants.GET_WATER_REQUEST })
    return api.getWaterById(id).then(
      res => {
        const data = res.data()
        dispatch({
          type: waterConstants.GET_WATER_SUCCESS,
          water: data ? data.water : 0
        })
      },
      error => {
        dispatch({ type: waterConstants.GET_WATER_FAILURE, error })
      }
    )
  }
}

const updateWater = (id, data) => {
  return dispatch => {
    dispatch({ type: waterConstants.UPDATE_WATER_REQUEST })
    return api.updateWater(id, data).then(
      () => {
        dispatch({ type: waterConstants.UPDATE_WATER_SUCCESS })
      },
      error => {
        dispatch({ type: waterConstants.UPDATE_WATER_FAILURE, error })
      }
    )
  }
}

const changeWater = data => {
  return dispatch => {
    dispatch({ type: waterConstants.CHANGE_WATER, value: data })
  }
}

export const waterActions = {
  getWaterById,
  updateWater,
  changeWater
}
