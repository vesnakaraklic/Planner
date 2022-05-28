import { noteConstants } from "../constants/note.constants";

const initialState = {
  note: "",
};

export const note = (state = initialState, action) => {
  switch (action.type) {
    case noteConstants.CHANGE_NOTE:
      return {
        ...state,
        note: action.note,
      };
    default:
      return {
        ...state,
      };
  }
};
