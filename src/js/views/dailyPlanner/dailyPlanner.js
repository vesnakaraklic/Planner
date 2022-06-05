import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { exerciseActions } from '../../store/actions/exercise.actions'
import { foodActions } from '../../store/actions/food.actions'
import { moneyActions } from '../../store/actions/money.actions'
import { noteActions } from '../../store/actions/note.actions'
import { plansActions } from '../../store/actions/plans.actions'
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
  const { money, food, waterDrink, exercise, plans, toDo, note } = useSelector(
    state => state
  )
  const dateRedux = useSelector(state => state.datePicker.date)

  const onSaveDaily = () => {
    const date = getDateWithoutHours(dateRedux)
    dispatch(moneyActions.updateMoney(user.uid + date, { ...money }))
    dispatch(foodActions.updateFood(user.uid + date, { ...food }))
    dispatch(
      waterActions.updateWater(user.uid + date, { water: waterDrink.water })
    )
    dispatch(plansActions.updatePlans(user.uid + date, { ...plans }))
    dispatch(exerciseActions.updateExercise(user.uid + date, { ...exercise }))

    dispatch(toDoActions.updateToDo(user.uid + date, { ...toDo }))
    dispatch(noteActions.updateNote(user.uid + date, { note: note.note }))
  }

  useEffect(() => {
    if (user.uid && dateRedux) {
      dispatch(plansActions.getPlansById(user.uid + dateRedux))
      dispatch(moneyActions.getMoneyById(user.uid + dateRedux))
      dispatch(exerciseActions.getExerciseById(user.uid + dateRedux))
      dispatch(foodActions.getFoodById(user.uid + dateRedux))
      dispatch(waterActions.getWaterById(user.uid + dateRedux))
      dispatch(toDoActions.getToDoById(user.uid + dateRedux))
      dispatch(noteActions.getNoteById(user.uid + dateRedux))
    }
  }, [dateRedux, user])

  return (
    <>
      <div className="daily-planner-wrapper">
        <Plans plans={plans} />
        <div className="right-container">
          <div className="right-top-container">
            <div className="water-food-container">
              <Water water={waterDrink} />
              <Food food={food} />
            </div>
            <Money moneyIn={money.moneyIn} moneyOut={money.moneyOut} />
          </div>
          <div className="right-bottom-container">
            <ToDoList toDo={toDo} />
            <div className="exercise-container">
              <Exercise exercise={exercise} />
            </div>
          </div>
        </div>
        <button className="save-button" onClick={onSaveDaily}>
          Save
        </button>
      </div>
    </>
  )
}
