import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toDoActions } from '../../../../store/actions/toDo.actions'
import { changesToSaveActions } from '../../../../store/actions/changesToSave.actions'
import LineInput from '../../../../components/lineInput/lineInput'
import FlexibleButton from '../../../../components/flexibleButton/flexibleButton'
import './toDoList.scss'

export default function ToDoList({ toDo }) {
  const dispatch = useDispatch()
  const changesToSave = useSelector(state => state.changesToSave.changesToSave)

  const addToDoOnChanges = () => {
    if (!changesToSave.includes('toDo'))
      dispatch(changesToSaveActions.pushChanges('toDo'))
  }

  const onCheckChangeToDo = key => {
    const newArray = [...toDo.toDo]
    newArray[key] = {
      value: newArray[key].value,
      finished: !newArray[key].finished
    }
    dispatch(toDoActions.changeToDo(newArray))
    addToDoOnChanges()
  }
  const onChangeToDo = (value, key) => {
    const newArray = [...toDo.toDo]
    newArray[key] = { value, finished: newArray[key].finished }
    dispatch(toDoActions.changeToDo(newArray))
    addToDoOnChanges()
  }

  const onToDoAddClick = () => {
    const newArray = [...toDo.toDo, { value: '', finished: false }]
    dispatch(toDoActions.changeToDo(newArray))
    addToDoOnChanges()
  }

  const onToDoMinusClick = index => {
    const newArray = [...toDo.toDo]
    newArray.splice(index, 1)
    dispatch(toDoActions.changeToDo(newArray))
    addToDoOnChanges()
  }

  return (
    <>
      <div className="checkbox-form">
        <div className="to-do-header">
          <p className="title">To Do List</p>
          <FlexibleButton
            onClick={onToDoAddClick}
            widht="1.2vw"
            height="1.3vw"
            sign={'+'}
          />
        </div>
        <div className={toDo.toDo.length > 10 ? 'scroll' : ''}>
          <div className={'to-do-input'}>
            {toDo?.toDo?.map(({ value, finished }, index) => (
              <div key={index}>
                <LineInput
                  className="checkbox-input"
                  withCheckbox={true}
                  onCheckChange={() => onCheckChangeToDo(index)}
                  isChecked={finished}
                  value={value}
                  onChange={e => onChangeToDo(e.target.value, index)}
                />
                {index > 9 && (
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
    </>
  )
}
