import { notificationsConstants } from '../constants/notifications.constants'
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
  AM_12: ''
}

export const notifications = (state = initialState, action) => {
  switch (action.type) {
    case notificationsConstants.GET_PLANS_FOR_NOTIFICATIONS_SUCCESS:
      const newState = cloneDeep(initialState)
      if (action.value && Object.keys(action.value).length > 0)
        Object.keys(newState).forEach(key => {
          if (action.value[key]) newState[key] = action.value[key]
        })
      return {
        ...newState
      }

    case notificationsConstants.GET_PLANS_FOR_NOTIFICATIONS_REQUEST:
    case notificationsConstants.GET_PLANS_FOR_NOTIFICATIONS_FAILURE:
    default:
      return {
        ...state
      }
  }
}
