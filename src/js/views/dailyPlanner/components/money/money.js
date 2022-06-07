import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { moneyActions } from '../../../../store/actions/money.actions'
import { useDispatch } from 'react-redux'
import './money.scss'

export default function Money({ moneyOut = '0', moneyIn = '0' }) {
  const [result, setResult] = useState('0')
  const dispatch = useDispatch()

  const getOnlyNumbersFromString = value => {
    if (value === '') return '0'
    else if (value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
      if (
        value.charAt(0) === '0' &&
        value.charAt(1) !== '.' &&
        value.length > 1
      ) {
        return value.replace(/^0+/, '')
      } else {
        return value
      }
    }
  }

  const formatFloatNumbers = value => {
    if (value.charAt(1) === '.' && value.charAt(2) === '') {
      return value + '0'
    } else if (value.charAt(0) === '.' && value.charAt(1) !== '') {
      return '0' + value
    } else if (value === '') {
      return 0
    } else {
      return value
    }
  }
  const onMoneyInputChange = (type, value) => {
    const resultValue = getOnlyNumbersFromString(value)
    if (resultValue)
      if (type === 'moneyIn') {
        dispatch(moneyActions.changeMoneyIn(resultValue))
      } else if (type === 'moneyOut') {
        dispatch(moneyActions.changeMoneyOut(resultValue))
      }
  }
  const onMoneyInputBlur = (type, value) => {
    if (type === 'moneyIn') {
      dispatch(moneyActions.changeMoneyIn(formatFloatNumbers(value)))
    } else if (type === 'moneyOut') {
      dispatch(moneyActions.changeMoneyOut(formatFloatNumbers(value)))
    }
  }
  useEffect(() => {
    if (moneyIn && moneyOut) setResult(moneyIn - moneyOut)
  }, [moneyIn, moneyOut])

  return (
    <>
      <div className="money-wrapper">
        <div className="money-form first">
          <label className="money-label">Money In: </label>
          <input
            type={'text'}
            value={moneyIn}
            onChange={e => {
              onMoneyInputChange('moneyIn', e.target.value)
            }}
            onBlur={e => {
              onMoneyInputBlur('moneyIn', e.target.value)
            }}
            className="money-field input"
            maxLength={10}
          />
          <FontAwesomeIcon icon={faDollarSign} className="dolar-icon" />
        </div>
        <div className="money-form second">
          <label className="money-label">Money Out: </label>
          <input
            type={'text'}
            maxLength={10}
            value={moneyOut}
            onChange={e => {
              onMoneyInputChange('moneyOut', e.target.value)
            }}
            onBlur={e => {
              onMoneyInputBlur('moneyOut', e.target.value)
            }}
            className="money-field input"
          ></input>
          <FontAwesomeIcon icon={faDollarSign} className="dolar-icon" />
        </div>
        <div className="money-form third">
          <label className="money-label">Total: </label>
          <label className="money-field">{result}</label>{' '}
          <FontAwesomeIcon icon={faDollarSign} className="dolar-icon" />
        </div>
      </div>
    </>
  )
}
