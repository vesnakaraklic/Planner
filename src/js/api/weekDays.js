import firebase from 'firebase'
import db from '../db/firestore'

export const getDataForWeek = (
  selectedFilter = 'food',
  arrayOfWeekDaysIds = []
) =>
  db
    .collection(selectedFilter)
    .where(firebase.firestore.FieldPath.documentId(), 'in', arrayOfWeekDaysIds)
    .get()
