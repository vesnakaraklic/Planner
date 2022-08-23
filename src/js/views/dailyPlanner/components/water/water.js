import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changesToSaveActions } from '../../../../store/actions/changesToSave.actions'
import { waterActions } from '../../../../store/actions/water.actions'
import './water.scss'

export default function Water({ water, user, dateRedux }) {
  const waterImage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [waterValue, setWaterValue] = useState(0)
  const dispatch = useDispatch()
  const changesToSave = useSelector(state => state.changesToSave.changesToSave)
  const waterSliderRef = useRef(null)

  const onChange = data => {
    console.log(data)
    waterSliderRef.current.focus()
    if (!changesToSave.includes('water'))
      dispatch(changesToSaveActions.pushChanges('water'))
    dispatch(waterActions.changeWater(data))
    setWaterValue(data)
  }

  const onFocusOutWaterSave = event => {
    if (event?.relatedTarget?.id === 'cancelId') {
      dispatch(waterActions.getWaterById(user.uid + dateRedux))
    } else {
      dispatch(waterActions.updateWater(user.uid + dateRedux, water))
    }
    dispatch(changesToSaveActions.clearArray())
  }

  useEffect(() => {
    setWaterValue(water.water)
  }, [water])

  return (
    <>
      <div className="water-wrapper">
        <div className="water-image-container">
          {waterImage.map(image => (
            <div
              key={'key' + image}
              onClick={e => onChange(image + 1, e)}
              className={
                waterImage[image] < waterValue ? 'water-filled' : 'water-image'
              }
            />
          ))}
        </div>

        <input
          ref={waterSliderRef}
          type="range"
          min={0}
          max={10}
          step={1}
          className="water-slider"
          value={waterValue}
          onChange={e => onChange(e.target.value)}
          onBlur={event => onFocusOutWaterSave(event)}
        />
      </div>
    </>
  )
}
