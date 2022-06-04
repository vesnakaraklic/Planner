import db from '../db/firestore'

export const updatePlans = (id = '', data) =>
  db
    .collection('plans')
    .doc(id !== '' ? id : null)
    .set(data)

export const getPlansById = id => db.collection('plans').doc(id).get()
