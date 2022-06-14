import { monthDatesConstants } from '../constants/monthDates.constants'

const initialState = {
  dates: [],
  selectedDate: new Date()
}

export const monthDates = (state = initialState, action) => {
  switch (action.type) {
    case monthDatesConstants.GET_MONTH_DATES_SUCCESS:
    case monthDatesConstants.UPDATE_MONTH_DATES:
      if (!action.value) return { ...state }
      return {
        ...state,
        dates: action.value
      }
    case monthDatesConstants.UPDATE_SELECTED_DATE:
      if (!action.value) return { ...state }
      return {
        ...state,
        selectedDate: action.value
      }
    case monthDatesConstants.GET_MONTH_DATES_REQUEST:
    case monthDatesConstants.GET_MONTH_DATES_FAILURE:
    default:
      return {
        ...state
      }
  }
}
