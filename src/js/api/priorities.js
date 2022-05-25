import db from "../db/firestore";

export const createPriorities = (id = "", data) => {
  db.collection("priorities")
    .doc(id !== "" ? id : null)
    .set(data);
};

export const getPriorityById = (id) =>
  db.collection("priorities").doc(id).get();
