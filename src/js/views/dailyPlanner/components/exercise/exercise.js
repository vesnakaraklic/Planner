import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faVolleyballBall } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { exerciseActions } from '../../../../store/actions/exercise.actions'
import './exercise.scss'
import FlexibleButton from '../../../../components/flexibleButton/flexibleButton'
import { changesToSaveActions } from '../../../../store/actions/changesToSave.actions'

export default function Exercise({ exercise }) {
  const dispatch = useDispatch()
  const changesToSave = useSelector(state => state.changesToSave.changesToSave)

  const addExerciseOnChanges = () => {
    if (!changesToSave.includes('exercise'))
      dispatch(changesToSaveActions.pushChanges('exercise'))
  }
  const onChangeInput = (value, key) => {
    const newArray = [...exercise.exercises]
    newArray[key] = value
    dispatch(exerciseActions.changeExercise(newArray))
    addExerciseOnChanges()
  }

  const onExerciseAddClick = () => {
    const newArray = [...exercise.exercises, '']
    dispatch(exerciseActions.changeExercise(newArray))
    addExerciseOnChanges()
  }

  const onExerciseMinusClick = index => {
    const newArray = [...exercise.exercises]
    newArray.splice(index, 1)
    dispatch(exerciseActions.changeExercise(newArray))
    addExerciseOnChanges()
  }

  const onChangeSteps = value => {
    dispatch(exerciseActions.changeSteps(value))
    addExerciseOnChanges()
  }

  return (
    <>
      <div className="exercise-wrapper">
        <div className="exercise-content-container ">
          <div className="exercise-form-container">
            <div className="exercise-header ">
              <label className="exercise-form-title">Exercise & Health </label>

              <FlexibleButton
                onClick={onExerciseAddClick}
                widht="1.2vw"
                height="1.3vw"
                sign={'+'}
              />
            </div>

            <div
              className={exercise.exercises.length > 7 ? 'scroll-exercise' : ''}
            >
              {exercise?.exercises?.map((exerciseValue, index) => (
                <div key={index} className="exercise-form-input-container">
                  <span>
                    <FontAwesomeIcon
                      icon={faVolleyballBall}
                      style={{ color: 'rgb(79 2 0)' }}
                    />
                  </span>
                  <input
                    type={'text'}
                    className="exercise-form-input"
                    value={exerciseValue}
                    onChange={e => onChangeInput(e.target.value, index)}
                  />

                  {index > 6 && (
                    <FlexibleButton
                      onClick={() => onExerciseMinusClick(index)}
                      widht="1vw"
                      height="1vw"
                      sign="-"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="exercise-step-container">
            <input
              type={'number'}
              value={exercise.steps}
              className="exercise-step-input"
              onChange={e => onChangeSteps(e.target.value)}
            ></input>
            <label className="exercise-step-title">Steps</label>
          </div>
        </div>
      </div>
    </>
  )
}
