import getDateWithoutHours from './getDateWithoutHours'

export default function getTimeByString(text) {
  const todayDate = new Date(getDateWithoutHours(new Date()))

  const splitedString = text.split('_')

  if (splitedString[0] === 'AM') {
    let res = splitedString[1]

    if (splitedString[1] === '12') {
      res = parseInt('24')
    }
    todayDate.setHours(res)
  } else {
    let res
    if (splitedString[1] === '12') {
      res = parseInt('12')
    } else {
      res = parseInt(splitedString[1]) + parseInt('12')
    }
    todayDate.setHours(res)
  }

  return todayDate
}
