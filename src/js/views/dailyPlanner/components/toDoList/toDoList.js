import React from 'react'
import { useDispatch } from 'react-redux'
import LineInput from '../../../../components/lineInput/lineInput'
import { toDoActions } from '../../../../store/actions/toDo.actions'
import './toDoList.scss'

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

  return (
    <>
      <div className="checkboxForm">
        <div>
          <p className="title">To Do List</p>
          <div className="toDoInput">
            {toDo?.toDo?.map(({ value, finished }, index) => (
              <div key={index} className>
                <LineInput
                  className="checkboxInput"
                  withCheckbox={true}
                  onCheckChange={() => onCheckChangeToDo(index)}
                  isChecked={finished}
                  value={value}
                  onChange={e => onChangeToDo(e.target.value, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
