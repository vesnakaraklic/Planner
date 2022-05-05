import firebase from "firebase";
import db from "../db/firestore";

const extractSnapshotData = (snapshot) =>
  snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

export const createMoney = (id = "", data) =>
  // db.collection("money").doc(money.uid).set(money);
  {
    // var database = firebase.database();
    // var ref = database.ref("money");
    // ref.push(data);
    db.collection("money")
      .doc(id !== "" ? id : null)
      .set(data);
  };
export const createEvent = (data) =>
  // db.collection("money").doc(money.uid).set(money);
  {
    // var database = firebase.database();
    // var ref = database.ref("money");
    // ref.push(data);
    db.collection("event").doc().set(data);
  };

export const getAllMoney = () => db.collection("money").get();
export const getMoneyById = (id) => db.collection("money").doc(id).get();
