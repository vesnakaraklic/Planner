import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toDoActions } from '../../../../store/actions/toDo.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/fontawesome-free-solid'
import LineInput from '../../../../components/lineInput/lineInput'
import './toDoList.scss'
import FlexibleButton from '../../../../components/flexibleButton/flexibleButton'

export default function ToDoList({ toDo }) {
  const dispatch = useDispatch()

  const onCheckChangeToDo = key => {
    const newArray = [...toDo.toDo]
    newArray[key] = {
      value: newArray[key].value,
      finished: !newArray[key].finished
    }
    dispatch(toDoActions.updateToDo(newArray))
  }
  const onChangeToDo = (value, key) => {
    const newArray = [...toDo.toDo]
    newArray[key] = { value, finished: newArray[key].finished }
    dispatch(toDoActions.updateToDo(newArray))
  }

  const onToDoAddClick = () => {
    const newArray = [...toDo.toDo, { value: '', finished: false }]
    dispatch(toDoActions.updateToDo(newArray))
  }

  const onToDoMinusClick = index => {
    const newArray = [...toDo.toDo]
    newArray.splice(index, 1)
    dispatch(toDoActions.updateToDo(newArray))
  }

  return (
    <>
      <div className="checkboxForm">
        <div>
          <div className="toDoHeader">
            <p className="title">To Do List</p>
            <FlexibleButton
              onClick={onToDoAddClick}
              widht="1.2vw"
              height="1.3vw"
              sign={'+'}
            />
          </div>
          <div className={toDo.toDo.length > 11 ? 'scroll' : ''}>
            <div className={'toDoInput'}>
              {toDo?.toDo?.map(({ value, finished }, index) => (
                <div key={index}>
                  <LineInput
                    className="checkboxInput"
                    withCheckbox={true}
                    onCheckChange={() => onCheckChangeToDo(index)}
                    isChecked={finished}
                    value={value}
                    onChange={e => onChangeToDo(e.target.value, index)}
                  />
                  {index > 10 && (
                    <FlexibleButton
                      onClick={() => onToDoMinusClick(index)}
                      widht="1vw"
                      height="1vw"
                      sign="-"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
