import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changesToSaveActions } from '../../store/actions/changesToSave.actions'
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
import SaveAndCancelButtons from '../../components/saveAndCancelButtons/saveAndCancelButtons'
import { notificationActions } from '../../store/actions/notification.actions'
import './dailyPlanner.scss'

export default function DailyPlanner() {
  const dispatch = useDispatch()
  const todayDate = new Date()
  const user = useSelector(state => state.user.user)
  const { money, food, waterDrink, exercise, plans, toDo, note } = useSelector(
    state => state
  )
  const changesToSave = useSelector(state => state.changesToSave.changesToSave)
  const dateRedux = useSelector(state => state.datePicker.date)

  const onSaveDaily = () => {
    const date = getDateWithoutHours(dateRedux)
    if (changesToSave.length > 0) {
      changesToSave.map(word => {
        if (word === 'plans') {
          dispatch(plansActions.updatePlans(user.uid + date, { ...plans }))
          if (user.uid + date === user.uid + getDateWithoutHours(todayDate)) {
            dispatch(
              notificationActions.getPlansForNotificationById(user.uid + date)
            )
          }
        } else if (word === 'money') {
          dispatch(moneyActions.updateMoney(user.uid + date, { ...money }))
        } else if (word === 'food') {
          dispatch(foodActions.updateFood(user.uid + date, { ...food }))
        } else if (word === 'water') {
          dispatch(
            waterActions.updateWater(user.uid + date, {
              water: waterDrink.water
            })
          )
        } else if (word === 'exercise') {
          dispatch(
            exerciseActions.updateExercise(user.uid + date, { ...exercise })
          )
        } else if (word === 'toDo') {
          dispatch(toDoActions.updateToDo(user.uid + date, { ...toDo }))
        } else if (word === 'note') {
          dispatch(noteActions.updateNote(user.uid + date, { note: note.note }))
        }
      })
    }

    dispatch(changesToSaveActions.clearArray())
  }

  const onCancelClick = () => {
    changesToSave.map(word => {
      if (word === 'plans') {
        dispatch(plansActions.getPlansById(user.uid + dateRedux))
      } else if (word === 'money') {
        dispatch(moneyActions.getMoneyById(user.uid + dateRedux))
      } else if (word === 'food') {
        dispatch(foodActions.getFoodById(user.uid + dateRedux))
      } else if (word === 'water') {
        dispatch(waterActions.getWaterById(user.uid + dateRedux))
      } else if (word === 'exercise') {
        dispatch(exerciseActions.getExerciseById(user.uid + dateRedux))
      } else if (word === 'toDo') {
        dispatch(toDoActions.getToDoById(user.uid + dateRedux))
      } else if (word === 'note') {
        dispatch(noteActions.getNoteById(user.uid + dateRedux))
      }
    })
    dispatch(changesToSaveActions.clearArray())
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
            <div className="form-with-buttons">
              <ToDoList toDo={toDo} />
              <div
                className={`buttons-wrapper ${
                  changesToSave.length > 0 ? 'visible' : ''
                }`}
              >
                <SaveAndCancelButtons
                  onCancel={onCancelClick}
                  onSave={onSaveDaily}
                />
                {/* <button className="cancel-button" onClick={onCancleClick}>
                  Cancel
                </button>
                <button className="save-button" onClick={onSaveDaily}>
                  Save
                </button> */}
              </div>
            </div>

            <div className="exercise-container">
              <Exercise exercise={exercise} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
