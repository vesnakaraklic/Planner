import { exerciseConstants } from '../constants/exercise.constants'
import cloneDeep from 'lodash/cloneDeep'

const initialState = {
  exercises: ['', '', '', '', '', '', '', '', '', '', ''],
  steps: ''
}

export const exercise = (state = initialState, action) => {
  switch (action.type) {
    case exerciseConstants.CHANGE_EXERCISE_AND_STEPS:
      if (!action.value)
        return {
          ...initialState
        }
      return {
        exercises:
          action.value.exercises?.length < 5
            ? initialState.exercises
            : action.value.exercises,
        steps: action.value.steps ?? initialState.steps
      }
    case exerciseConstants.CHANGE_EXERCISE:
      if (!action.value || action.value.length < 5)
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
    default:
      return {
        ...state
      }
  }
}
