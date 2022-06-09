import { monthDatesConstants } from '../constants/monthDates.constants'

const initialState = {
  dates: []
}

export const monthDates = (state = initialState, action) => {
  switch (action.type) {
    case monthDatesConstants.GET_MONTH_DATES_SUCCESS:
    case monthDatesConstants.UPDATE_MONTH_DATES:
      if (!action.type) return { ...state }
      return {
        dates: action.value
      }
    case monthDatesConstants.GET_MONTH_DATES_REQUEST:
    case monthDatesConstants.GET_MONTH_DATES_FAILURE:
    default:
      return {
        ...state
      }
  }
}
