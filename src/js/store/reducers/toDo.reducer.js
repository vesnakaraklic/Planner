import { toDoConstants } from "../constants/toDo.constants";

export const toDoInitialState = {
  toDo: [
    { value: "", finished: false },
    { value: "", finished: false },
    { value: "", finished: false },
    { value: "", finished: false },
    { value: "", finished: false },
    { value: "", finished: false },
    { value: "", finished: false },
    { value: "", finished: false },
  ],
};

export const toDo = (state = toDoInitialState, action) => {
  switch (action.type) {
    case toDoConstants.CHANGE_TODO:
      if (!action.value)
        return {
          ...toDoInitialState,
        };
      return {
        toDo: action.value?.length < 8 ? toDoInitialState.toDo : action.value,
      };
    default:
      return {
        ...state,
      };
  }
};
