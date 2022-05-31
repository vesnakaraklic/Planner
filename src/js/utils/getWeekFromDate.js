import React, { useState } from 'react'
import getDateWithoutHours from './getDateWithoutHours'

export default function getWeekFromDate(checkDate) {
  console.log('Funkcija', checkDate.getDay())
  const week = {}
  switch (checkDate.getDay()) {
    case 1: {
      week.monday = checkDate
      week.tuesday = new Date(
        getDateWithoutHours(checkDate) + 24 * 60 * 60 * 1000
      )
      week.wednesday = new Date(
        getDateWithoutHours(checkDate) + 48 * 60 * 60 * 1000
      )
      week.thursday = new Date(
        getDateWithoutHours(checkDate) + 72 * 60 * 60 * 1000
      )
      week.friday = new Date(
        getDateWithoutHours(checkDate) + 2 * 48 * 60 * 60 * 1000
      )
      week.saturday = new Date(
        getDateWithoutHours(checkDate) + 5 * 24 * 60 * 60 * 1000
      )
      week.sunday = new Date(
        getDateWithoutHours(checkDate) + 6 * 24 * 60 * 60 * 1000
      )
      break
    }
    case 2: {
      week.monday = new Date(
        getDateWithoutHours(checkDate) - 24 * 60 * 60 * 1000
      )
      week.tuesday = checkDate
      week.wednesday = new Date(
        getDateWithoutHours(checkDate) + 24 * 60 * 60 * 1000
      )
      week.thursday = new Date(
        getDateWithoutHours(checkDate) + 48 * 60 * 60 * 1000
      )
      week.friday = new Date(
        getDateWithoutHours(checkDate) + 72 * 60 * 60 * 1000
      )
      week.saturday = new Date(
        getDateWithoutHours(checkDate) + 4 * 24 * 60 * 60 * 1000
      )
      week.sunday = new Date(
        getDateWithoutHours(checkDate) + 5 * 24 * 60 * 60 * 1000
      )
      break
    }
    case 3: {
      week.monday = new Date(
        getDateWithoutHours(checkDate) - 48 * 60 * 60 * 1000
      )
      week.tuesday = new Date(
        getDateWithoutHours(checkDate) - 24 * 60 * 60 * 1000
      )
      week.wednesday = checkDate
      week.thursday = new Date(
        getDateWithoutHours(checkDate) + 24 * 60 * 60 * 1000
      )
      week.friday = new Date(
        getDateWithoutHours(checkDate) + 48 * 60 * 60 * 1000
      )
      week.saturday = new Date(
        getDateWithoutHours(checkDate) + 72 * 60 * 60 * 1000
      )
      week.sunday = new Date(
        getDateWithoutHours(checkDate) + 4 * 24 * 60 * 60 * 1000
      )
      break
    }
    case 4: {
      week.monday = new Date(
        getDateWithoutHours(checkDate) - 72 * 60 * 60 * 1000
      )
      week.tuesday = new Date(
        getDateWithoutHours(checkDate) - 48 * 60 * 60 * 1000
      )
      week.wednesday = new Date(
        getDateWithoutHours(checkDate) - 24 * 60 * 60 * 1000
      )
      week.thursday = checkDate
      week.friday = new Date(
        getDateWithoutHours(checkDate) + 24 * 60 * 60 * 1000
      )
      week.saturday = new Date(
        getDateWithoutHours(checkDate) + 48 * 60 * 60 * 1000
      )
      week.sunday = new Date(
        getDateWithoutHours(checkDate) + 72 * 60 * 60 * 1000
      )
      break
    }
    case 5: {
      week.monday = new Date(
        getDateWithoutHours(checkDate) - 4 * 24 * 60 * 60 * 1000
      )
      week.tuesday = new Date(
        getDateWithoutHours(checkDate) - 72 * 60 * 60 * 1000
      )
      week.wednesday = new Date(
        getDateWithoutHours(checkDate) - 47 * 60 * 60 * 1000
      )
      week.thursday = new Date(
        getDateWithoutHours(checkDate) - 24 * 60 * 60 * 1000
      )
      week.friday = checkDate
      week.saturday = new Date(
        getDateWithoutHours(checkDate) + 24 * 60 * 60 * 1000
      )
      week.sunday = new Date(
        getDateWithoutHours(checkDate) + 48 * 60 * 60 * 1000
      )
      break
    }
    case 6: {
      week.monday = new Date(
        getDateWithoutHours(checkDate) - 5 * 24 * 60 * 60 * 1000
      )
      week.tuesday = new Date(
        getDateWithoutHours(checkDate) - 4 * 24 * 60 * 60 * 1000
      )
      week.wednesday = new Date(
        getDateWithoutHours(checkDate) - 72 * 60 * 60 * 1000
      )
      week.thursday = new Date(
        getDateWithoutHours(checkDate) - 48 * 60 * 60 * 1000
      )
      week.friday = new Date(
        getDateWithoutHours(checkDate) - 24 * 60 * 60 * 1000
      )
      week.saturday = checkDate
      week.sunday = new Date(
        getDateWithoutHours(checkDate) + 24 * 60 * 60 * 1000
      )
      break
    }
    case 0: {
      week.monday = new Date(
        getDateWithoutHours(checkDate) - 6 * 24 * 60 * 60 * 1000
      )
      week.tuesday = new Date(
        getDateWithoutHours(checkDate) - 5 * 24 * 60 * 60 * 1000
      )
      week.wednesday = new Date(
        getDateWithoutHours(checkDate) - 4 * 24 * 60 * 60 * 1000
      )
      week.thursday = new Date(
        getDateWithoutHours(checkDate) - 72 * 60 * 60 * 1000
      )
      week.friday = new Date(
        getDateWithoutHours(checkDate) - 48 * 60 * 60 * 1000
      )
      week.saturday = new Date(
        getDateWithoutHours(checkDate) - 24 * 60 * 60 * 1000
      )
      week.sunday = checkDate
      break
    }
    default:
      return ''
  }

  return week
}
