import React, { useEffect, useState } from "react";
import "./lineInput.scss";

export default function LineInput({
  withCheckbox,
  className,
  onChange,
  value,
}) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
    onChange && onChange(event);
  };

  return (
    <>
      {withCheckbox && <input type="checkbox" />}
      <input
        value={inputValue}
        className={className}
        onChange={onChangeHandler}
      ></input>
    </>
  );
}
