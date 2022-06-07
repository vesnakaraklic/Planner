import { plansConstants } from '../constants/plans.constants'
import * as api from '../../api/plans'

const getPlansById = id => {
  return dispatch => {
    dispatch({ type: plansConstants.GET_PLANS_REQUEST })
    return api.getPlansById(id).then(
      res => {
        const data = res.data()
        dispatch({ type: plansConstants.GET_PLANS_SUCCESS, value: data })
      },
      error => {
        dispatch({ type: plansConstants.GET_PLANS_FAILURE, error })
      }
    )
  }
}

const changePlans = data => {
  return dispatch => {
    dispatch({ type: plansConstants.CHANGE_PLANS, value: data })
  }
}

const updatePlans = (id, data) => {
  return dispatch => {
    dispatch({ type: plansConstants.UPDATE_PLANS_REQUEST })
    return api.updatePlans(id, data).then(
      () => {
        dispatch({ type: plansConstants.UPDATE_PLANS_SUCCESS })
      },
      error => {
        dispatch({ type: plansConstants.UPDATE_PLANS_FAILURE, error })
      }
    )
  }
}

export const plansActions = {
  getPlansById,
  changePlans,
  updatePlans
}
