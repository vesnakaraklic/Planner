import db from '../db/firestore'

export const updateNote = (id = '', data) =>
  db
    .collection('note')
    .doc(id !== '' ? id : null)
    .set(data)

export const getNoteById = id => db.collection('note').doc(id).get()
