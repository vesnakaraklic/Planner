import { plansConstants } from '../constants/plans.constants'
import cloneDeep from 'lodash/cloneDeep'

export const plansInitialState = {
  AM_06: '',
  AM_07: '',
  AM_08: '',
  AM_09: '',
  AM_10: '',
  AM_11: '',
  PM_12: '',
  PM_01: '',
  PM_02: '',
  PM_03: '',
  PM_04: '',
  PM_05: '',
  PM_06: '',
  PM_07: '',
  PM_08: '',
  PM_09: '',
  PM_10: '',
  PM_11: '',
  AM_12: ''
}

export const plans = (state = plansInitialState, action) => {
  switch (action.type) {
    case plansConstants.GET_PLANS_SUCCESS:
    case plansConstants.CHANGE_PLANS:
      const newState = cloneDeep(plansInitialState)
      if (action.value && Object.keys(action.value).length > 0)
        Object.keys(newState).forEach(key => {
          if (action.value[key]) newState[key] = action.value[key]
        })
      return {
        ...newState
      }
    case plansConstants.GET_PLANS_REQUEST:
    case plansConstants.GET_PLANS_FAILURE:
    case plansConstants.UPDATE_PLANS_REQUEST:
    case plansConstants.UPDATE_PLANS_SUCCESS:
    case plansConstants.UPDATE_PLANS_FAILURE:
    default:
      return {
        ...state
      }
  }
}
