import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { moneyActions } from "../../../../store/actions/money.actions";
import "./money.scss";
import { useDispatch, useSelector } from "react-redux";

export default function Money() {
  const [result, setResult] = useState("0");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const moneyIn = useSelector((state) => state.money.moneyIn);
  const moneyOut = useSelector((state) => state.money.moneyOut);

  const setMoneyInHandle = (value) => {
    if (value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
      if (
        value.charAt(0) === "0" &&
        value.charAt(1) !== "." &&
        value.length > 1
      ) {
        dispatch(moneyActions.updateMoneyIn(value.replace(/^0+/, "")));
        // setMoneyIn(value.replace(/^0+/, ""));
      } else {
        dispatch(moneyActions.updateMoneyIn(value));
        // setMoneyIn(value);
      }
    }
  };

  const setMoneyOutHandle = (value) => {
    if (value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
      if (
        value.charAt(0) === "0" &&
        value.charAt(1) !== "." &&
        value.length > 1
      ) {
        dispatch(moneyActions.updateMoneyOut(value.replace(/^0+/, "")));
        // setMoneyOut(value.replace(/^0+/, ""));
      } else {
        dispatch(moneyActions.updateMoneyOut(value));
        // setMoneyOut(value);
      }
    }
  };

  const handleFloatMoneyIn = () => {
    if (moneyIn.charAt(1) === "." && moneyIn.charAt(2) === "") {
      dispatch(moneyActions.updateMoneyIn(moneyIn + "0"));
      // setMoneyIn(moneyIn + "0");
    } else if (moneyIn.charAt(0) === "." && moneyIn.charAt(1) !== "") {
      dispatch(moneyActions.updateMoneyIn("0" + moneyIn));
      // setMoneyIn("0" + moneyIn);
    } else if (moneyIn === "") {
      dispatch(moneyActions.updateMoneyIn(0));
      // setMoneyIn(0);
    } else {
      dispatch(moneyActions.updateMoneyIn(parseFloat(moneyIn) || ""));
      // setMoneyIn(parseFloat(moneyIn) || "");
    }
  };

  const handleFloatMoneyOut = () => {
    if (moneyOut.charAt(1) === "." && moneyOut.charAt(2) === "") {
      dispatch(moneyActions.updateMoneyOut(moneyOut + "0"));
      // setMoneyOut(moneyOut + "0");
    } else if (moneyOut.charAt(0) === "." && moneyOut.charAt(1) !== "") {
      dispatch(moneyActions.updateMoneyOut("0" + moneyOut));
      // setMoneyOut("0" + moneyOut);
    } else if (moneyOut === "") {
      dispatch(moneyActions.updateMoneyOut(0));
      // setMoneyOut(0);
    } else {
      dispatch(moneyActions.updateMoneyOut(parseFloat(moneyOut) || ""));
      // setMoneyOut(parseFloat(moneyOut) || "");
    }
  };

  // useEffect(() => {
  //   dispatch(moneyActions.updateMoneyIn(moneyIn));
  // }, [moneyIn]);

  // useEffect(() => {
  //   dispatch(moneyActions.updateMoneyOut(moneyOut));
  // }, [moneyOut]);
  useEffect(() => {
    const date = new Date();
    console.log(date.getTime());
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    console.log(date.getTime());
    let idUser = user.uid + date.getTime();
    console.log(idUser);
    dispatch(moneyActions.getMoneyById(idUser));
  }, []);

  useEffect(() => {
    console.log(moneyIn);
    console.log(moneyOut);
    setResult(moneyIn - moneyOut);
  }, [moneyIn, moneyOut]);
  return (
    <>
      <div className="money">
        <div className="moneyForm">
          <label className="moneyLabel">Money In: </label>
          <input
            type={"text"}
            value={moneyIn}
            onChange={(e) => {
              setMoneyInHandle(e.target.value);
            }}
            onBlur={handleFloatMoneyIn}
            className="moneyInput"
            maxLength={10}
          />
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <div className="moneyForm">
          <label className="moneyLabel">Money Out: </label>
          <input
            type={"text"}
            maxLength={10}
            value={moneyOut}
            onChange={(e) => {
              setMoneyOutHandle(e.target.value);
            }}
            onBlur={handleFloatMoneyOut}
            className="moneyInput"
          ></input>
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <div className="moneyForm">
          <label className="moneyLabel">Total: </label>
          <label style={{ background: "#f5efe3" }}>{result}</label>{" "}
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
      </div>
    </>
  );
}
