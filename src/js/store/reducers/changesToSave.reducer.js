import { changesToSaveConstants } from '../constants/changesToSave.constants'

const initialState = {
  changesToSave: [],
  isSaved: false
}

export const changesToSave = (state = initialState, action) => {
  switch (action.type) {
    case changesToSaveConstants.PUSH_CHANGES_TO_SAVE:
      return {
        ...state,
        changesToSave: [...state.changesToSave, action.value],
        isSaved: false
      }
    case changesToSaveConstants.CLEAR_ARRAY:
      return {
        changesToSave: [],
        isSaved: true
      }
    default:
      return {
        ...state
      }
  }
}
