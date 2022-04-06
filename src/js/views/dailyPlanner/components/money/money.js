import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./money.scss";

export default function Money() {
  const [result, setResult] = useState("0");
  const [moneyIn, setMoneyIn] = useState("0");
  const [moneyOut, setMoneyOut] = useState("0");

  const setMoneyInHandle = (value) => {
    console.log(value + "Valueee");
    const test = value + "";
    const onlyNumbers = test.replace(/^(0+|[1-9]\d*)$/, "");
    console.log("Number without chars" + onlyNumbers);
    if (
      onlyNumbers.charAt(0) === "0" &&
      onlyNumbers.charAt(1) !== "." &&
      onlyNumbers.length > 1
    ) {
      console.log("Zero at the start" + onlyNumbers);
      setMoneyIn(onlyNumbers.replace(/^0+/, ""));
    } else {
      console.log("Not zero at the start" + onlyNumbers);
      // setMoneyIn(onlyNumbers === "" ? "0" : onlyNumbers);
      setMoneyIn(onlyNumbers);
    }
  };

  const setMoneyOutHandle = (value) => {
    const onlyNumbers = value.replace(/^(0|[1-9]\d*)$/, "");
    setMoneyOut(onlyNumbers === "" ? "0" : onlyNumbers);
  };
  useEffect(() => {
    setResult(moneyIn - moneyOut);
  }, [moneyIn, moneyOut]);

  useEffect(() => {
    console.log(moneyIn);
  }, [moneyIn]);

  // useEffect(() => {
  //   setResult(0);
  //   setMoneyIn(0);
  //   setMoneyOut(0);
  // }, []);

  return (
    <>
      <div className="money">
        <div className="moneyForm">
          <label style={{ fontWeight: "bold", color: "#4f0000" }}>
            Money In:{" "}
          </label>
          <input
            type={"number"}
            step="0.1"
            value={moneyIn}
            onChange={(e) => {
              setMoneyInHandle(e.target.value);
            }}
            className="moneyInput"
          />
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <div className="moneyForm">
          <label style={{ fontWeight: "bold", color: "#4f0000" }}>
            Money Out:{" "}
          </label>
          <input
            type={"number"}
            step="0.1"
            maxLength={12}
            value={moneyOut}
            onChange={(e) => {
              setMoneyOutHandle(e.target.value);
            }}
            className="moneyInput"
          ></input>
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <div className="moneyForm">
          <label style={{ fontWeight: "bold", color: "#4f0000" }}>
            Total:{" "}
          </label>
          <label style={{ background: "#f5efe3" }}>{result}</label>{" "}
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
      </div>
    </>
  );
}
