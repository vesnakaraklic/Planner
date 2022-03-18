import firebase from "firebase";
import db from "../db/firestore";

const extractSnapshotData = (snapshot) =>
  snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

export const getUsers = () =>
  db.collection("users").get().then(extractSnapshotData);
export const register = async ({ email, password }) => {
  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return { id: user.uid, email: email, password: password };
};
