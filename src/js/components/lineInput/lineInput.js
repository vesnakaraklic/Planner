import React from "react";
import "./lineInput.scss";

export default function LineInput({ withCheckbox, className, onChange }) {
  return (
    <>
      {withCheckbox && <input type="checkbox" />}
      <input className={className} onChange={onChange}></input>
    </>
  );
}
