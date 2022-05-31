import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataActions } from '../../store/actions/data.actions'
import { exerciseActions } from '../../store/actions/exercise.actions'
import { foodActions } from '../../store/actions/food.actions'
import { moneyActions } from '../../store/actions/money.actions'
import { noteActions } from '../../store/actions/note.actions'
import { plansActions } from '../../store/actions/plans.actions'
import { prioritiesActions } from '../../store/actions/priorities.actions'
import { toDoActions } from '../../store/actions/toDo.actions'
import { waterActions } from '../../store/actions/water.actions'
import getDateWithoutHours from '../../utils/getDateWithoutHours'
import Exercise from './components/exercise/exercise'
import Food from './components/food/food'
import Money from './components/money/money'
import Plans from './components/plans/plans'
import ToDoList from './components/toDoList/toDoList'
import Water from './components/water/water'
import './dailyPlanner.scss'

export default function DailyPlanner() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const { money, food, waterDrink, exercise, plans, priorities, toDo, note } =
    useSelector(state => state)
  const dateRedux = useSelector(state => state.datePicker.date)

  const onSaveDaily = () => {
    const date = getDateWithoutHours(dateRedux)
    dispatch(dataActions.update('money', { ...money }, user.uid + date))
    dispatch(dataActions.update('food', { ...food }, user.uid + date))
    dispatch(
      dataActions.update('water', { water: waterDrink.water }, user.uid + date)
    )
    dispatch(dataActions.update('plans', { ...plans }, user.uid + date))
    dispatch(dataActions.update('exercise', { ...exercise }, user.uid + date))
    dispatch(
      dataActions.update('priorities', { ...priorities }, user.uid + date)
    )
    dispatch(dataActions.update('toDo', { ...toDo }, user.uid + date))
    dispatch(dataActions.update('note', { note: note.note }, user.uid + date))
  }

  useEffect(() => {
    if (user.uid && dateRedux) {
      dispatch(plansActions.getPlansById(user.uid + dateRedux))
      dispatch(moneyActions.getMoneyById(user.uid + dateRedux))
      dispatch(exerciseActions.getExerciseById(user.uid + dateRedux))
      dispatch(foodActions.getFoodById(user.uid + dateRedux))
      dispatch(waterActions.getWaterById(user.uid + dateRedux))
      dispatch(prioritiesActions.getPrioritiesById(user.uid + dateRedux))
      dispatch(toDoActions.getToDoById(user.uid + dateRedux))
      dispatch(noteActions.getNoteById(user.uid + dateRedux))
    }
  }, [dateRedux, user])

  return (
    <>
      <div className="dailyPlannerWrapper">
        <Plans plans={plans} />
        <div className="rightContainer">
          <div className="rightTopContainer">
            <div className="waterFodContainer">
              <Water water={waterDrink} />
              <Food food={food} />
            </div>
            <Money moneyIn={money.moneyIn} moneyOut={money.moneyOut} />
          </div>
          <div className="rightBottomContainer">
            <ToDoList priorities={priorities} toDo={toDo} />
            <div className="exerciseContainer">
              <Exercise exercise={exercise} />
            </div>
          </div>
        </div>
        <button className="saveBtn" onClick={onSaveDaily}>
          Save
        </button>
      </div>
    </>
  )
}
