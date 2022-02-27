import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const form = { firstName: "", lastName: "", email: "", password: "" };

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [registerForm, setRegisterForm] = useState(form);
  const history = useHistory();

  const onSubmit = (data) => {
    if (registerForm.firstName != "" && registerForm.lastName != "") {
      history.push("/plannerHome");
    } else {
      history.push("/login");
    }
  };

  const handleInputChange = (event, key) => {
    setRegisterForm({ ...registerForm, [key]: event.target.value });
  };

  return (
    <>
      <div className="login_form">
        <div className="login-title">
          <p
            style={{
              padding: "0px 57px",
              fontSize: "23px",
              fontWeight: "bold",
            }}
          >
            Registration Form
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "40px" }}>
          <div className="field-container">
            <span className="field-icon">
              <FontAwesomeIcon icon={faUser} style={{ color: "white" }} />
            </span>
            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
              className="field-input"
              value={registerForm.firstName}
              onChange={(event) => handleInputChange(event, "firstName")}
            />
          </div>
          <div className="field-container">
            <span className="field-icon">
              <FontAwesomeIcon icon={faUser} style={{ color: "white" }} />
            </span>
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className="field-input"
              value={registerForm.lastName}
              onChange={(event) => handleInputChange(event, "lastName")}
            />
          </div>
          <div className="field-container">
            <span className="field-icon">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
            </span>
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="field-input"
              value={registerForm.email}
              onChange={(event) => handleInputChange(event, "email")}
            />
          </div>
          <div className="field-container password-field">
            <span className="field-icon">
              <FontAwesomeIcon icon={faLock} style={{ color: "white" }} />
            </span>
            <input
              {...register("password")}
              type="password"
              className="field-input"
              placeholder="Password"
              value={registerForm.password}
              onChange={(event) => handleInputChange(event, "password")}
            />
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
          <p style={{ textAlign: "center", marginBottom: "0px" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "lightpink" }}>
              Login now
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
