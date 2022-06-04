import { toDoConstants } from '../constants/toDo.constants'
import * as api from '../../api/toDo'

const getToDoById = id => {
  return dispatch => {
    dispatch({ type: toDoConstants.GET_TODO_REQUEST })
    return api.getToDoById(id).then(
      res => {
        const data = res.data()
        dispatch({ type: toDoConstants.GET_TODO_SUCCESS, value: data?.toDo })
      },
      error => {
        dispatch({ type: toDoConstants.GET_TODO_FAILURE, error })
      }
    )
  }
}

const changeToDo = data => {
  return dispatch => {
    dispatch({ type: toDoConstants.CHANGE_TODO, value: data })
  }
}

const updateToDo = (id, data) => {
  return dispatch => {
    dispatch({ type: toDoConstants.UPDATE_TODO_REQUEST })
    return api.updateToDo(id, data).then(
      () => {
        dispatch({ type: toDoConstants.UPDATE_TODO_SUCCESS })
      },
      error => {
        dispatch({ type: toDoConstants.UPDATE_TODO_FAILURE, error })
      }
    )
  }
}

export const toDoActions = {
  getToDoById,
  updateToDo,
  changeToDo
}
