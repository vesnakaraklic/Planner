import firebase from 'firebase'
import db from '../db/firestore'

export const updateFood = (id = '', data) =>
  db.collection('food').doc(id).set(data)

export const getFoodById = id => db.collection('food').doc(id).get()

export const getFoodForWeek = arrayOfIndex =>
  db
    .collection('food')
    .where(firebase.firestore.FieldPath.documentId(), 'in', arrayOfIndex)
    .get()
