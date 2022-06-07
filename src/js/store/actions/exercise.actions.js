import { exerciseConstants } from '../constants/exercise.constants'
import * as api from '../../api/exercise'

const getExerciseById = id => {
  return dispatch => {
    dispatch({ type: exerciseConstants.GET_EXERCISE_REQUEST })
    return api.getExerciseById(id).then(
      res => {
        const data = res.data()
        dispatch({
          type: exerciseConstants.GET_EXERCISE_SUCCESS,
          value: data
        })
      },
      error => {
        dispatch({ type: exerciseConstants.GET_EXERCISE_FAILURE, error })
      }
    )
  }
}

const changeExerciseAndSteps = data => {
  return dispatch => {
    dispatch({
      type: exerciseConstants.CHANGE_EXERCISE_AND_STEPS,
      value: data
    })
  }
}

const changeExercise = data => {
  return dispatch => {
    dispatch({ type: exerciseConstants.CHANGE_EXERCISE, value: data })
  }
}

const changeSteps = data => {
  return dispatch => {
    dispatch({ type: exerciseConstants.CHANGE_STEPS, value: data })
  }
}

const updateExercise = (id, value) => {
  return dispatch => {
    dispatch({ type: exerciseConstants.UPDATE_EXERCISE_REQUEST })
    return api.updateExercise(id, value).then(
      () => {
        dispatch({ type: exerciseConstants.UPDATE_EXERCISE_SUCCESS })
      },
      error => {
        dispatch({ type: exerciseConstants.UPDATE_EXERCISE_FAILURE, error })
      }
    )
  }
}

export const exerciseActions = {
  getExerciseById,
  changeExercise,
  changeSteps,
  changeExerciseAndSteps,
  updateExercise
}
