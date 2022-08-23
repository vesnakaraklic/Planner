import React from 'react'
import {
  faFish,
  faMugHot,
  faPizzaSlice,
  faHamburger
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { foodActions } from '../../../../store/actions/food.actions'
import './food.scss'
import { changesToSaveActions } from '../../../../store/actions/changesToSave.actions'

const Food = ({ food, user, dateRedux}) => {
  const dispatch = useDispatch()
  const changesToSave = useSelector(state => state.changesToSave.changesToSave)
  const foodIcons = [faPizzaSlice, faHamburger, faFish, faMugHot]

  const onChangeInput = (value, key) => {
    if (!changesToSave.includes('food'))
      dispatch(changesToSaveActions.pushChanges('food'))
    dispatch(foodActions.changeFood({ ...food, [key]: value }))
  }

  const onFocusOutFoodSave = (event) => {
    if(event?.relatedTarget?.id === "cancelId") {
      dispatch(foodActions.getFoodById(user.uid + dateRedux))
    } else {
      dispatch(foodActions.updateFood(user.uid + dateRedux, { ...food }))
    }
    dispatch(changesToSaveActions.clearArray())
  }

  return (
    <>
      <div className="food-form">
        {Object.keys(food).length > 0 &&
          Object.keys(food).map((foodKey, index) => (
            <div key={index} className="food-border">
              <FontAwesomeIcon className="meal-icon" icon={foodIcons[index]} />
              <input
                type={'text'}
                value={food[foodKey]}
                maxLength={30}
                placeholder={foodKey}
                className="meal-input"
                onChange={e => onChangeInput(e.target.value, foodKey)}
                onBlur={event => onFocusOutFoodSave(event)}
              />
            </div>
          ))}
      </div>
    </>
  )
}

export default Food
