import db from "../db/firestore";

export const createWater = (id = "", data) => {
  db.collection("water")
    .doc(id !== "" ? id : null)
    .set(data);
};

export const getWaterById = (id) => db.collection("water").doc(id).get();
