import db from "../db/firestore";

const extractSnapshotData = (snapshot) =>
  snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

export const getUsers = () =>
  db.collection("users").get().then(extractSnapshotData);
