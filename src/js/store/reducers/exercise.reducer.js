import { exerciseConstants } from '../constants/exercise.constants'

const initialState = {
  exercises: ['', '', '', '', '', '', ''],
  steps: ''
}

export const exercise = (state = initialState, action) => {
  switch (action.type) {
    case exerciseConstants.GET_EXERCISE_SUCCESS:
    case exerciseConstants.CHANGE_EXERCISE_AND_STEPS:
      if (!action.value)
        return {
          ...initialState
        }
      return {
        exercises:
          action.value.exercises?.length < 7
            ? initialState.exercises
            : action.value.exercises,
        steps: action.value.steps ?? initialState.steps
      }
    case exerciseConstants.CHANGE_EXERCISE:
      if (!action.value || action.value.length < 7)
        return {
          ...state,
          exercises: initialState.exercises
        }
      return {
        ...state,
        exercises: action.value
      }
    case exerciseConstants.CHANGE_STEPS:
      if (!action.value)
        return {
          ...state,
          steps: initialState.steps
        }
      return {
        ...state,
        steps: action.value
      }
    case exerciseConstants.GET_EXERCISE_REQUEST:
    case exerciseConstants.GET_EXERCISE_FAILURE:
    case exerciseConstants.UPDATE_EXERCISE_REQUEST:
    case exerciseConstants.UPDATE_EXERCISE_SUCCESS:
    case exerciseConstants.UPDATE_EXERCISE_FAILURE:
    default:
      return {
        ...state
      }
  }
}
