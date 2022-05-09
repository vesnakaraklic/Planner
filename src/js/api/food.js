import db from "../db/firestore";

export const createFood = (id = "", data) => {
  db.collection("food")
    .doc(id !== "" ? id : null)
    .set(data);
};

export const getFoodById = (id) => db.collection("food").doc(id).get();
