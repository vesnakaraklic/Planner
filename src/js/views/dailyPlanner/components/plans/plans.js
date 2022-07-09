import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LineInput from '../../../../components/lineInput/lineInput'
import { changesToSaveActions } from '../../../../store/actions/changesToSave.actions'
import { plansActions } from '../../../../store/actions/plans.actions'
import './plans.scss'

const hours = {
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

const Plans = ({ plans }) => {
  const dispatch = useDispatch()
  const changesToSave = useSelector(state => state.changesToSave.changesToSave)

  const onChangeInput = (value, key) => {
    if (!changesToSave.includes('plans'))
      dispatch(changesToSaveActions.pushChanges('plans'))
    dispatch(plansActions.changePlans({ ...plans, [key]: value }))
  }

  return (
    <>
      <div className="plans-wrapper">
        <p className="title">Plans & Schedules</p>
        {Object.keys(plans).length > 0 &&
          Object.keys(plans).map((planKey, index) => (
            <div key={index} className="plan-input">
              <label className="hour-style">{hours[planKey]}</label>
              <LineInput
                withCheckbox={false}
                className="time-input"
                type="text"
                value={plans[planKey]}
                onChange={e => onChangeInput(e.target.value, planKey)}
                wrapperClass={'plans-line-input-wrapper'}
              />
            </div>
          ))}
      </div>
    </>
  )
}
export default Plans
