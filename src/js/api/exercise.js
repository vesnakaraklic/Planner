import db from '../db/firestore'

export const updateExercise = (id = '', data) =>
  db
    .collection('exercise')
    .doc(id !== '' ? id : null)
    .set(data)

export const getExerciseById = id => db.collection('exercise').doc(id).get()
