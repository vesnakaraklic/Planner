import { notificationConstants } from '../constants/notification.constants'
import cloneDeep from 'lodash/cloneDeep'

export const initialState = {
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
  AM_12: '',
  updated: false
}

export const notification = (state = initialState, action) => {
  switch (action.type) {
    case notificationConstants.GET_PLANS_FOR_NOTIFICATION_SUCCESS:
      const newState = cloneDeep(initialState)
      if (action.value && Object.keys(action.value).length > 0)
        Object.keys(newState).forEach(key => {
          if (action.value[key]) newState[key] = action.value[key]
        })
      return {
        ...newState,
        updated: true
      }

    case notificationConstants.GET_PLANS_FOR_NOTIFICATION_REQUEST:
    case notificationConstants.GET_PLANS_FOR_NOTIFICATION_FAILURE:
    default:
      return {
        ...state
      }
  }
}
