import { changesToSaveConstants } from '../constants/changesToSave.constants'

const pushChanges = data => {
  return dispatch => {
    dispatch({
      type: changesToSaveConstants.PUSH_CHANGES_TO_SAVE,
      value: data
    })
  }
}

const clearArray = () => {
  return dispatch => {
    dispatch({ type: changesToSaveConstants.CLEAR_ARRAY })
  }
}

export const changesToSaveActions = {
  pushChanges,
  clearArray
}
