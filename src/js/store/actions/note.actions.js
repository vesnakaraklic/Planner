import { noteConstants } from "../constants/note.constants";
import * as api from "../../api/note";

const getNoteById = (id) => {
  return (dispatch) => {
    dispatch({ type: noteConstants.GET_NOTE });
    return api.getNoteById(id).then(
      (res) => {
        const data = res.data();
        dispatch({
          type: noteConstants.CHANGE_NOTE,
          note: data ? data.note : "",
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const updateNote = (value) => {
  return (dispatch) => {
    dispatch({ type: noteConstants.CHANGE_NOTE, note: value });
  };
};

export const noteActions = {
  getNoteById,
  updateNote,
};
