import { combineReducers } from "redux";
import { user } from "./user.reducer";
import { money } from "./money.reducer";
import { food } from "./food.reducer";
import { datePicker } from "../reducers/date.reducer";

const appReducer = combineReducers({
  user,
  money,
  food,
  datePicker,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
