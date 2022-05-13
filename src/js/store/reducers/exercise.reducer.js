import { exerciseConstants } from "../constants/exercise.constants";

const initialState = {
  exercise_1: "",
  exercise_2: "",
  exercise_3: "",
  exercise_4: "",
  exercise_5: "",
  steps: "",
};

export const exercise = (state = initialState, action) => {
  switch (action.type) {
    case exerciseConstants.CHANGE_EXERCISE_1:
      return {
        ...state,
        exercise_1: action.exercise_1,
      };
    case exerciseConstants.CHANGE_EXERCISE_2:
      return {
        ...state,
        exercise_2: action.exercise_2,
      };
    case exerciseConstants.CHANGE_EXERCISE_3:
      return {
        ...state,
        exercise_3: action.exercise_3,
      };
    case exerciseConstants.CHANGE_EXERCISE_4:
      return {
        ...state,
        exercise_4: action.exercise_4,
      };
    case exerciseConstants.CHANGE_EXERCISE_5:
      return {
        ...state,
        exercise_5: action.exercise_5,
      };
    case exerciseConstants.CHANGE_STEPS:
      return {
        ...state,
        steps: action.steps,
      };
    default:
      return {
        ...state,
      };
  }
};
