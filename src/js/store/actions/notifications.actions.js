import { notificationsConstants } from '../constants/notifications.constants'
import * as api from '../../api/plans'

const getPlansForNotificationsById = id => {
  return dispatch => {
    dispatch({
      type: notificationsConstants.GET_PLANS_FOR_NOTIFICATIONS_REQUEST
    })
    return api.getPlansById(id).then(
      res => {
        const data = res.data()
        dispatch({
          type: notificationsConstants.GET_PLANS_FOR_NOTIFICATIONS_SUCCESS,
          value: data
        })
      },
      error => {
        dispatch({
          type: notificationsConstants.GET_PLANS_FOR_NOTIFICATIONS_FAILURE,
          error
        })
      }
    )
  }
}

export const notificationsActions = {
  getPlansForNotificationsById
}
