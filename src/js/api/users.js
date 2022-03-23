import firebase from "firebase";
import db from "../db/firestore";

const extractSnapshotData = (snapshot) =>
  snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

const createUserProfile = (userProfile) =>
  db.collection("users").doc(userProfile.uid).set(userProfile);

export const getUsers = () =>
  db.collection("users").get().then(extractSnapshotData);

export const getUserProfile = (uid) =>
  db
    .collection("users")
    .doc(uid)
    .get()
    .then((snanpshot) => snanpshot.data());

export const register = async ({ email, password, firstName, lastName }) => {
  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const userProfile = { uid: user.uid, firstName, lastName, email };
  await createUserProfile(userProfile);

  return userProfile;
};

export const login = async ({ email, password }) => {
  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  const userProfile = await getUserProfile(user.uid);
  return userProfile;
};

export const logout = () => firebase.auth().signOut();
