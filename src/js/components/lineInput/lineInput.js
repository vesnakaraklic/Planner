import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free-solid";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
import "./lineInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LineInput({
  withCheckbox,
  className,
  onChange,
  value,
  notChecked,
}) {
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
    onChange && onChange(event);
  };

  useEffect(() => {
    {
      !checked ? { notChecked } : console.log("Not false");
    }
  }, [checked]);

  return (
    <>
      {withCheckbox && (
        // <input
        //   type="checkbox"
        //   checked={checked}
        //   onChange={() => setChecked(!checked)}
        // />
        <div className="checkboxFrame" onClick={() => setChecked(!checked)}>
          {checked && <FontAwesomeIcon className="iconStyle" icon={faCheck} />}
        </div>
      )}
      <input
        value={inputValue}
        className={`${className} ${checked ? "checkedText" : ""} `}
        onChange={onChangeHandler}
      ></input>
    </>
  );
}
