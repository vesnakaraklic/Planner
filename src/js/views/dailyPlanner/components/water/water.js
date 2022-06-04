import React from 'react'
import { useDispatch } from 'react-redux'
import { waterActions } from '../../../../store/actions/water.actions'
import './water.scss'

export default function Water({ water }) {
  const waterImage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dispatch = useDispatch()

  const onChange = date => {
    dispatch(waterActions.changeWater(date))
  }

  return (
    <>
      <div className="waterWrapper">
        <div className="waterImageContainer">
          {waterImage.map(image => {
            if (waterImage[image] < water.water) {
              return <div key={'Key' + image} className="waterFilled" />
            } else {
              return <div key={image} className="waterImage" />
            }
          })}
        </div>
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          className="waterSlider"
          value={water.water}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </>
  )
}
