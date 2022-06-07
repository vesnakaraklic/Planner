import { noteConstants } from '../constants/note.constants'
import * as api from '../../api/note'

const getNoteById = id => {
  return dispatch => {
    dispatch({ type: noteConstants.GET_NOTE_REQUEST })
    return api.getNoteById(id).then(
      res => {
        const data = res.data()
        dispatch({
          type: noteConstants.GET_NOTE_SUCCESS,
          note: data ? data.note : ''
        })
      },
      error => {
        dispatch({ type: noteConstants.GET_NOTE_FAILURE, error })
      }
    )
  }
}

const changeNote = data => {
  return dispatch => {
    dispatch({ type: noteConstants.CHANGE_NOTE, note: data })
  }
}

const updateNote = (id, data) => {
  return dispatch => {
    dispatch({ type: noteConstants.UPDATE_NOTE_REQUEST })
    return api.updateNote(id, data).then(
      () => {
        dispatch({ type: noteConstants.UPDATE_NOTE_SUCCESS })
      },
      error => {
        dispatch({ type: noteConstants.UPDATE_NOTE_FAIlURE, error })
      }
    )
  }
}

export const noteActions = {
  getNoteById,
  changeNote,
  updateNote
}
