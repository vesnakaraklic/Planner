import { noteConstants } from '../constants/note.constants'

const initialState = {
  note: ''
}

export const note = (state = initialState, action) => {
  switch (action.type) {
    case noteConstants.GET_NOTE_SUCCESS:
    case noteConstants.CHANGE_NOTE:
      return {
        ...state,
        note: action.note
      }
    case noteConstants.GET_NOTE_REQUEST:
    case noteConstants.GET_NOTE_FAILURE:
    case noteConstants.UPDATE_NOTE_REQUEST:
    case noteConstants.UPDATE_NOTE_SUCCESS:
    case noteConstants.UPDATE_NOTE_FAIlURE:
    default:
      return {
        ...state
      }
  }
}
