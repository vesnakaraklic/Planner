import db from "../db/firestore";

export const createToDo = (id = "", data) => {
  db.collection("toDo")
    .doc(id !== "" ? id : null)
    .set(data);
};

export const getToDoById = (id) => db.collection("toDo").doc(id).get();
