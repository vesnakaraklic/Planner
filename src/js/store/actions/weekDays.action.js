import * as api from '../../api/weekDays'
import { weekDaysConstants } from '../constants/weekDays.constants'

const getWeekByDaysIds = (selectedFilter, arrayOfWeekDaysIds, userId) => {
  return dispatch => {
    dispatch({ type: weekDaysConstants.GET_WEEK_DAYS_REQUEST })
    return api.getDataForWeek(selectedFilter, arrayOfWeekDaysIds).then(
      res => {
        const response = {}
        res.forEach(el => {
          if (el.id)
            response[el.id.replace(userId, '')] = {
              type: selectedFilter,
              value: el.data()
            }
        })
        dispatch({
          type: weekDaysConstants.GET_WEEK_DAYS_SUCCESS,
          value: response
        })
      },
      error => {
        dispatch({ type: weekDaysConstants.GET_WEEK_DAYS_FAILURE, error })
      }
    )
  }
}

export const weekDaysActions = {
  getWeekByDaysIds
}
