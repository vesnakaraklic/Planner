import { waterConstants } from '../constants/water.constants'

const initialState = {
  water: 0
}

export const waterDrink = (state = initialState, action) => {
  switch (action.type) {
    case waterConstants.CHANGE_WATER:
      return {
        ...state,
        water: action.value
      }
    case waterConstants.GET_WATER_SUCCESS:
      return {
        ...state,
        water: action.water ?? 0
      }

    case waterConstants.UPDATE_WATER_REQUEST:
    case waterConstants.UPDATE_WATER_SUCCESS:
    case waterConstants.UPDATE_WATER_FAILURE:
    case waterConstants.GET_WATER_REQUEST:
    case waterConstants.GET_WATER_FAILURE:
    default:
      return {
        ...state
      }
  }
}
