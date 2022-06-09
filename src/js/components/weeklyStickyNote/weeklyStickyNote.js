import React, { useEffect } from 'react'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { dateActions } from '../../store/actions/date.actions'
import getDateWithoutHours from '../../utils/getDateWithoutHours'
import './weeklyStickyNote.scss'

export default function WeeklyStickyNote({
  date,
  day,
  content = {},
  setCurrentActive
}) {
  const dispatch = useDispatch()

  function renderFood(data) {
    return (
      <div className={`content ${'food-content'} `}>
        <div className="first-letter-style">
          <label className="letter-color">B </label>
          <label>{data?.breakfast}</label>
        </div>
        <div className="first-letter-style">
          <label className="letter-color">L </label>
          <label>{data?.lunch}</label>
        </div>
        <div className="first-letter-style">
          <label className="letter-color">D </label>
          <label>{data?.dinner}</label>
        </div>
        <div className="first-letter-style">
          <label className="letter-color">S </label>
          <label>{data?.snack}</label>
        </div>
      </div>
    )
  }

  function renderMoney(data) {
    return (
      <div className={`content ${'money-position'}`}>
        <div className="first-letter-style">
          <label className="letter-color font-size-steps">In: </label>
          <label className="data-color center-money">
            {data?.moneyIn ?? 0}$
          </label>
        </div>
        <div className="first-letter-style">
          <label className="letter-color font-size-steps">Out: </label>
          <label className="data-color">{data?.moneyOut ?? 0}$</label>
        </div>
      </div>
    )
  }

  function renderExercise(data) {
    return (
      <div
        className={`content ${
          data?.exercises?.length > 4 ? 'scroll-for-sticky' : ''
        }`}
      >
        <div className="first-letter-style">
          <label className="letter-color font-size-steps">Steps: </label>
          <label className="data-color">{data.steps ? data.steps : '0'}</label>
        </div>
        {/* <div className="steps">Steps: {data?.steps}</div> */}
        {data?.exercises?.map(
          (el, index) =>
            el !== '' && (
              <div key={el + index} className="first-letter-style">
                <label className="letter-color">•</label>
                <label className="text_size">{el}</label>
              </div>
            )
        )}
      </div>
    )
  }

  function renderToDo(data) {
    return (
    //sa odradjenim to do
    // <div
    //   className={`content ${data.toDo.length > 4 ? 'scrollForSticky' : ''}`}
    // >
    //   {data.toDo.map((el, index) => (
    //     <div key={el.value + index} className="first-letter-style">
    //       {el.value !== '' && <label className="letter-color">•</label>}
    //       {el.value !== '' && (
    //         <div className={el.finished ? 'done' : ''}>{el.value}</div>
    //       )}
    //     </div>
    //   ))}
    // </div>

      //bez odradjenih to do
      <div
        className={`content ${
          data?.toDo?.length > 4 ? 'scroll-for-sticky' : ''
        }`}
      >
        {data?.toDo?.map(
          (el, index) =>
            el.value !== '' &&
            !el.finished && (
              <div key={el.value + index} className="first-letter-style">
                <label className="letter-color">•</label>

                <label className="text_size">{el.value}</label>
              </div>
            )
        )}
      </div>
    )
  }

  function renderPlans(data) {
    const plans = {
      AM_06: '06:00 AM',
      AM_07: '07:00 AM',
      AM_08: '08:00 AM',
      AM_09: '09:00 AM',
      AM_10: '10:00 AM',
      AM_11: '11:00 AM',
      PM_12: '12:00 PM',
      PM_01: '01:00 PM',
      PM_02: '02:00 PM',
      PM_03: '03:00 PM',
      PM_04: '04:00 PM',
      PM_05: '05:00 PM',
      PM_06: '06:00 PM',
      PM_07: '07:00 PM',
      PM_08: '08:00 PM',
      PM_09: '09:00 PM',
      PM_10: '10:00 PM',
      PM_11: '11:00 PM',
      AM_12: '12:00 AM'
    }

    return (
      <div className="content plans-content">
        {Object.keys(plans).map(
          key =>
            data[key] && (
              <div
                key={key}
                className={
                  'first-letter-style ' +
                  (content.type === 'plans' ? 'brown-border-bottom' : '')
                }
              >
                <label className="hour-style">{plans[key]}</label>
                <label className="text_size_plans">{data?.[key]}</label>
              </div>
            )
        )}
      </div>
    )
  }

  function renderContent() {
    switch (content?.type) {
      case 'food':
        return renderFood(content?.value)
      case 'money':
        return renderMoney(content?.value)
      case 'exercise':
        return renderExercise(content?.value)
      case 'toDo':
        return renderToDo(content?.value)
      case 'plans':
        return renderPlans(content?.value)
    }
  }

  const onEditClick = () => {
    dispatch(dateActions.updateDate(getDateWithoutHours(date)))
    setCurrentActive && setCurrentActive(1)
  }

  useEffect(() => {
    console.log('Content', content)
  }, [])

  return (
    <div className="day-of-week">
      <div className="date-style">{date?.getDate()} </div>
      <div className="day-title">{day}</div>

      <button onClick={() => onEditClick()} className="edit-button">
        <FontAwesomeIcon className="pencil" icon={faPencilAlt} />
      </button>

      {renderContent()}
    </div>
  )
}
