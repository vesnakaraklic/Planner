import React, { useEffect, useState } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getUsers } from "../../actions/users";

const form = { email: "", password: "", error: "" };
const Login = () => {
  const { register, handleSubmit } = useForm();
  const [loginForm, setLoginForm] = useState(form);
  const [listOfUsers, setListOfUsers] = useState();
  const history = useHistory();

  const onSubmit = (data) => {
    setListOfUsers(getUsers).then(
      listOfUsers.map((user) => {
        if (
          user.email === loginForm.email &&
          user.password === loginForm.password
        ) {
          loginForm.error = "Email od password is incorect!";
        } else {
          history.push("/plannerHome");
        }
      })
    );
  };

  let handleInputChange = (event, key) => {
    setLoginForm({ ...loginForm, [key]: event.target.value });
  };

  useEffect(() => {}, []);

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
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "40px" }}>
          <div className="field-container">
            <span className="field-icon">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
            </span>
            <input
              {...register("email")}
              name="email"
              id="email"
              placeholder="Email"
              className="field-input"
              onChange={(event) => handleInputChange(event, "email")}
            />
          </div>
          <div className="field-container password-field">
            <span className="field-icon">
              <FontAwesomeIcon icon={faLock} style={{ color: "white" }} />
            </span>
            <input
              {...register("password")}
              name="password"
              id="password"
              placeholder="Password"
              className="field-input"
              onChange={(event) => handleInputChange(event, "password")}
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
};
export default Login;
