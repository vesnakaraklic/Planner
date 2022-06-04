import { weekDaysConstants } from '../constants/weekDays.constants'

const initialState = {
  days: {}
}

export const weekDays = (state = initialState, action) => {
  switch (action.type) {
    case weekDaysConstants.GET_WEEK_DAYS_SUCCESS:
      if (!action.value) return { ...state }
      return {
        ...state,
        days: action.value
      }
    case weekDaysConstants.GET_WEEK_DAYS_REQUEST:
    case weekDaysConstants.GET_WEEK_DAYS_FAILURE:
    default:
      return {
        ...state
      }
  }
}
