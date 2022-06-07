import db from '../db/firestore'

export const updateToDo = (id = '', data) =>
  db
    .collection('toDo')
    .doc(id !== '' ? id : null)
    .set(data)

export const getToDoById = id => db.collection('toDo').doc(id).get()
