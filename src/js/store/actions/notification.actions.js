import { notificationConstants } from './../constants/notification.constants'
import * as api from '../../api/plans'

const getPlansForNotificationById = id => {
  return dispatch => {
    dispatch({ type: notificationConstants.GET_PLANS_FOR_NOTIFICATION_REQUEST })
    return api.getPlansById(id).then(
      res => {
        const data = res.data()
        dispatch({
          type: notificationConstants.GET_PLANS_FOR_NOTIFICATION_SUCCESS,
          value: data
        })
      },
      error => {
        dispatch({
          type: notificationConstants.GET_PLANS_FOR_NOTIFICATION_FAILURE,
          error
        })
      }
    )
  }
}

export const notificationActions = {
  getPlansForNotificationById
}
