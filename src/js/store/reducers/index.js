import { combineReducers } from "redux";
import { user } from "./user.reducer";
import { money } from "./money.reducer";
import { food } from "./food.reducer";
import { datePicker } from "../reducers/date.reducer";
import { waterDrink } from "../reducers/water.reducer";
import { exercise } from "../reducers/exercise.reducer";

const appReducer = combineReducers({
  user,
  money,
  food,
  datePicker,
  waterDrink,
  exercise,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
