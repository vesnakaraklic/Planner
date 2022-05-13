import { exerciseConstants } from "../constants/exercise.constants";
import * as api from "../../api/exercise";

const getExerciseById = (id) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.GET_EXERCISE });
    return api.getExerciseById(id).then(
      (res) => {
        const data = res.data();
        dispatch({
          type: exerciseConstants.CHANGE_EXERCISE_1,
          exercise_1: data ? data.exercise_1 : "",
        });
        dispatch({
          type: exerciseConstants.CHANGE_EXERCISE_2,
          exercise_2: data ? data.exercise_2 : "",
        });
        dispatch({
          type: exerciseConstants.CHANGE_EXERCISE_3,
          exercise_3: data ? data.exercise_3 : "",
        });
        dispatch({
          type: exerciseConstants.CHANGE_EXERCISE_4,
          exercise_4: data ? data.exercise_4 : "",
        });
        dispatch({
          type: exerciseConstants.CHANGE_EXERCISE_5,
          exercise_5: data ? data.exercise_5 : "",
        });
        dispatch({
          type: exerciseConstants.CHANGE_STEPS,
          steps: data ? data.steps : "",
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const updateExercise_1 = (exercise_1) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.CHANGE_EXERCISE_1, exercise_1 });
  };
};
const updateExercise_2 = (exercise_2) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.CHANGE_EXERCISE_2, exercise_2 });
  };
};
const updateExercise_3 = (exercise_3) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.CHANGE_EXERCISE_3, exercise_3 });
  };
};
const updateExercise_4 = (exercise_4) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.CHANGE_EXERCISE_4, exercise_4 });
  };
};
const updateExercise_5 = (exercise_5) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.CHANGE_EXERCISE_5, exercise_5 });
  };
};

const updateSteps = (steps) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.CHANGE_STEPS, steps });
  };
};

export const exerciseActions = {
  getExerciseById,
  updateExercise_1,
  updateExercise_2,
  updateExercise_3,
  updateExercise_4,
  updateExercise_5,
  updateSteps,
};
