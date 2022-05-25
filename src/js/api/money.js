import db from "../db/firestore";

export const createMoney = (id = "", data) => {
  db.collection("money")
    .doc(id !== "" ? id : null)
    .set(data);
};
export const createEvent = (data) => {
  db.collection("event").doc().set(data);
};

export const getAllMoney = () => db.collection("money").get();
export const getMoneyById = (id) => db.collection("money").doc(id).get();
