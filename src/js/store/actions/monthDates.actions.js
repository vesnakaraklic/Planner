import { monthDatesConstants } from '../constants/monthDates.constants'
import * as api from '../../api/monthDates'

const getMonthDatesIds = (arrayOfMonthDatesIds, userId) => {
  return dispatch => {
    dispatch({ type: monthDatesConstants.GET_MONTH_DATES_REQUEST })
    return api.getPlansForMonthDates(arrayOfMonthDatesIds).then(
      res => {
        const response = {}
        res.forEach(({ id, data }) => {
          if (id)
            response[id.replace(userId, '')] = {
              ...data
            }
        })
        dispatch({
          type: monthDatesConstants.GET_MONTH_DATES_SUCCESS,
          value: response
        })
      },
      error => {
        dispatch({ type: monthDatesConstants.GET_MONTH_DATES_FAILURE, error })
      }
    )
  }
}

const updateMonthDates = data => {
  return dispatch => {
    dispatch({ type: monthDatesConstants.UPDATE_MONTH_DATES, value: data })
  }
}

export const monthDatesActions = {
  updateMonthDates,
  getMonthDatesIds
}
