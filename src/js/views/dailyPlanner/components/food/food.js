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

const Food = ({ food }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const dateReudx = useSelector(state => state.datePicker)
  const foodIcons = [faPizzaSlice, faHamburger, faFish, faMugHot]

  const onChangeInput = (value, key) => {
    dispatch(foodActions.changeFood({ ...food, [key]: value }))
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
                maxLength={15}
                placeholder={foodKey}
                className="meal-input"
                onChange={e => onChangeInput(e.target.value, foodKey)}
              />
            </div>
          ))}
      </div>
    </>
  )
}

export default Food
