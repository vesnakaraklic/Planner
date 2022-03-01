import React, { useEffect } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { getUsers } from "../api/users";

export default function Login() {
  const { register, handleSubmit } = useForm;

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    console.log(getUsers());
  }, []);

  return (
    <>
      <div className="login_form">
        <div className="login-title">
          <p
            style={{
              padding: "0px 89px",
              fontSize: "23px",
              fontWeight: "bold",
            }}
          >
            Login Form
          </p>
        </div>
        <form
          onSubmit={() => handleSubmit(onSubmit)}
          style={{ padding: "40px" }}
        >
          <div className="field-container">
            <span className="field-icon">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
            </span>
            <input ref={register} placeholder="Email" className="field-input" />
          </div>
          <div className="field-container password-field">
            <span className="field-icon">
              <FontAwesomeIcon icon={faLock} style={{ color: "white" }} />
            </span>
            <input
              ref={register}
              type="password"
              placeholder="Password"
              className="field-input"
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
          <p style={{ textAlign: "center", marginBottom: "0px" }}>
            Not a member?{" "}
            <Link to="/register" style={{ color: "lightpink" }}>
              Signup now
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
