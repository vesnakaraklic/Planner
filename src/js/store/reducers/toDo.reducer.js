import { toDoConstants } from '../constants/toDo.constants'

export const toDoInitialState = {
  toDo: [
    { value: '', finished: false },
    { value: '', finished: false },
    { value: '', finished: false },
    { value: '', finished: false },
    { value: '', finished: false },
    { value: '', finished: false },
    { value: '', finished: false },
    { value: '', finished: false },
    { value: '', finished: false },
    { value: '', finished: false },
    { value: '', finished: false }
  ]
}

export const toDo = (state = toDoInitialState, action) => {
  switch (action.type) {
    case toDoConstants.GET_TODO_SUCCESS:
    case toDoConstants.CHANGE_TODO:
      if (!action.value)
        return {
          ...toDoInitialState
        }
      return {
        toDo: action.value?.length < 8 ? toDoInitialState.toDo : action.value
      }
    case toDoConstants.GET_TODO_REQUEST:
    case toDoConstants.GET_TODO_FAILURE:
    case toDoConstants.UPDATE_TODO_REQUEST:
    case toDoConstants.UPDATE_TODO_SUCCESS:
    case toDoConstants.UPDATE_TODO_FAILURE:
    default:
      return {
        ...state
      }
  }
}
