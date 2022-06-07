import { combineReducers } from 'redux'
import { user } from './user.reducer'
import { money } from './money.reducer'
import { food } from './food.reducer'
import { datePicker } from '../reducers/date.reducer'
import { waterDrink } from '../reducers/water.reducer'
import { exercise } from '../reducers/exercise.reducer'
import { plans } from '../reducers/plans.reducer'
import { toDo } from '../reducers/toDo.reducer'
import { note } from '../reducers/note.reducer'
import { weekDays } from '../reducers/weekDays.reducer'

const appReducer = combineReducers({
  user,
  money,
  food,
  datePicker,
  waterDrink,
  exercise,
  plans,
  toDo,
  note,
  weekDays
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
