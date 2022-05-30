import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { exerciseActions } from '../../../../store/actions/exercise.actions'
import './exercise.scss'

export default function Exercise({ exercise }) {
  const dispatch = useDispatch()

  const onChangeInput = (value, key) => {
    const newArray = [...exercise.exercises]
    newArray[key] = value
    dispatch(exerciseActions.updateExercise(newArray))
  }

  const onChangeSteps = value => {
    dispatch(exerciseActions.updateSteps(value))
  }

  return (
    <>
      <div className="exerciseWrapper">
        <div className="exerciseContentContainer">
          <div className="exerciseFormContainer">
            <label className="exerciseFormTitle">Exercise & Health </label>
            {exercise?.exercises?.map((exerciseValue, index) => (
              <div key={index} className="exerciseFormInputContainer">
                <span>
                  <FontAwesomeIcon
                    icon={faVolleyballBall}
                    style={{ color: 'rgb(79 2 0)' }}
                  />
                </span>
                <input
                  type={'text'}
                  className="exerciseFormInput"
                  value={exerciseValue}
                  onChange={e => onChangeInput(e.target.value, index)}
                />
              </div>
            ))}
          </div>
          <div className="exerciseStepContainer">
            <input
              type={'number'}
              value={exercise.steps}
              className="exerciseStepInput"
              onChange={e => onChangeSteps(e.target.value)}
            ></input>
            <label className="exerciseStepTitle">Steps</label>
          </div>
        </div>
      </div>
    </>
  )
}
