import db from '../db/firestore'

export const updateWater = (id = '', data) =>
  db
    .collection('water')
    .doc(id !== '' ? id : null)
    .set(data)

export const getWaterById = id => db.collection('water').doc(id).get()
