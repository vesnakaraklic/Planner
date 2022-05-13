import db from "../db/firestore";

export const createExercise = (id = "", data) => {
  db.collection("exercise")
    .doc(id !== "" ? id : null)
    .set(data);
};

export const getExerciseById = (id) => db.collection("exercise").doc(id).get();
