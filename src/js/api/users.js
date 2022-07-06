import firebase from 'firebase'
import db from '../db/firestore'

const extractSnapshotData = snapshot =>
  snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

export const updateUserProfile = async userProfile =>
  await db.collection('users').doc(userProfile.uid).set(userProfile)

export const getUserById = id => db.collection('users').doc(id).get()

export const getUsers = () =>
  db.collection('users').get().then(extractSnapshotData)

export const getUserProfile = uid =>
  db
    .collection('users')
    .doc(uid)
    .get()
    .then(snanpshot => snanpshot.data())

export const register = async ({ email, password, firstName, lastName }) => {
  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
  const userProfile = { uid: user.uid, firstName, lastName, email }
  await updateUserProfile(userProfile)

  return userProfile
}

export const login = async ({ email, password }) => {
  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
  const userProfile = await getUserProfile(user.uid)
  return userProfile
}

export const logout = () => firebase.auth().signOut()

export const onAuthStateChanges = onAuth =>
  firebase.auth().onAuthStateChanged(onAuth)

export const updateUserEmail = async (newEmail, oldPassword) => {
  let user = firebase.auth().currentUser
  await firebase.auth().signInWithEmailAndPassword(user.email, oldPassword)

  let userObject = await (await getUserById(user.uid)).data()

  user.updateEmail(newEmail)
  const userProfile = {
    uid: userObject.uid,
    firstName: userObject.firstName,
    lastName: userObject.lastName,
    email: newEmail
  }
  updateUserProfile(userProfile)
  return userProfile
}

export const updateUserPassword = async (newPassword, oldPassword) => {
  let user = firebase.auth().currentUser
  await firebase.auth().signInWithEmailAndPassword(user.email, oldPassword)
  let userObject = await (await getUserById(user.uid)).data()

  user.updatePassword(newPassword)
  const userProfile = {
    uid: userObject.uid,
    firstName: userObject.firstName,
    lastName: userObject.lastName,
    email: userObject.email
  }
  updateUserProfile(userProfile)
  return userProfile
}

export const resetPassword = email => {
  let auth = firebase.auth()

  auth.sendPasswordResetEmail(email)
}
