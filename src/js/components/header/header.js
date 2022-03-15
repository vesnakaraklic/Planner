import React from "react";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  return (
    <>
      <div className="header">
        <p className="logo_planner">Planner</p>
        <button
          onClick={() => history.push("/login")}
          className="buttons login_btn"
        >
          Login
        </button>
        <button
          onClick={() => history.push("/register")}
          className="buttons registration_btn"
        >
          Registration
        </button>
      </div>
    </>
  );
}
