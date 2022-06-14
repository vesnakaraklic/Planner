import firebase from 'firebase'
import db from '../db/firestore'

export async function getPlansForMonthDates(arrayOfMonthDaysIds = []) {
  if (!arrayOfMonthDaysIds || !arrayOfMonthDaysIds.length) return []
  const tempArray = []

  while (arrayOfMonthDaysIds.length) {
    const arrayOfTen = arrayOfMonthDaysIds.splice(0, 10)

    tempArray.push(
      db
        .collection('plans')
        .where(firebase.firestore.FieldPath.documentId(), 'in', [...arrayOfTen])
        .get()
        .then(results =>
          results.docs.map(result => ({ id: result.id, data: result.data() }))
        )
    )
  }
  return Promise.all(tempArray).then(content => content.flat())
}
