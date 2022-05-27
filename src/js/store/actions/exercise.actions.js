import { exerciseConstants } from "../constants/exercise.constants";
import * as api from "../../api/exercise";

const getExerciseById = (id) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.GET_EXERCISE });
    return api.getExerciseById(id).then(
      (res) => {
        const data = res.data();
        dispatch({
          type: exerciseConstants.CHANGE_EXERCISE_AND_STEPS,
          value: data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const updateExercise = (value) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.CHANGE_EXERCISE, value: value });
  };
};

const updateSteps = (value) => {
  return (dispatch) => {
    dispatch({ type: exerciseConstants.CHANGE_STEPS, value });
  };
};

export const exerciseActions = {
  getExerciseById,
  updateExercise,
  updateSteps,
};
