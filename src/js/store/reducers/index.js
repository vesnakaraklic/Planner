import { combineReducers } from "redux";
import { user } from "./user.reducer";
import { money } from "./money.reducer";

const appReducer = combineReducers({
  user,
  money,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
