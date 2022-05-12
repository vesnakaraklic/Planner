import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { moneyActions } from "../../../../store/actions/money.actions";
import getDateWithoutHours from "../../../../utils/getDateWithoutHours";
import "./money.scss";
import { useDispatch, useSelector } from "react-redux";

export default function Money() {
  const [result, setResult] = useState("0");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const moneyIn = useSelector((state) => state.money.moneyIn);
  const moneyOut = useSelector((state) => state.money.moneyOut);
  const dateRedux = useSelector((state) => state.datePicker.date);

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
  // const setMoneyIn = (value) => {
  //   dispatch(moneyActions.updateMoneyIn(value));
  // };

  // const setMoneyOut = (value) => {
  //   dispatch(moneyActions.updateMoneyOut(value));
  // };

  useEffect(() => {
    const date = getDateWithoutHours(dateRedux);
    let idUser = user.uid + date;
    dispatch(moneyActions.getMoneyById(idUser));
  }, []);

  useEffect(() => {
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
