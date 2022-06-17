import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changesToSaveActions } from '../../../../store/actions/changesToSave.actions'
import { waterActions } from '../../../../store/actions/water.actions'
import './water.scss'

export default function Water({ water }) {
  const waterImage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dispatch = useDispatch()
  const changesToSave = useSelector(state => state.changesToSave.changesToSave)

  const onChange = date => {
    if (!changesToSave.includes('water'))
      dispatch(changesToSaveActions.pushChanges('water'))
    dispatch(waterActions.changeWater(date))
  }

  return (
    <>
      <div className="water-wrapper">
        <div className="water-image-container">
          {waterImage.map(image => {
            if (waterImage[image] < water.water) {
              return <div key={'Key' + image} className="water-filled" />
            } else {
              return <div key={image} className="water-image" />
            }
          })}
        </div>
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          className="water-slider"
          value={water.water}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </>
  )
}
