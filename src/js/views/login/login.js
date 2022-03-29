import React, { useEffect, useState } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Input from "../../components/inputWithIcon/Input";
import { useDispatch, useSelector } from "react-redux";
import NormalButton from "../../components/NormalButton/NormalButton";
import { getUsers } from "../../actions/users";
import { Link, useHistory } from "react-router-dom";
import { userActions } from "../../store/actions/user.actions";
import Header from "../../components/homeHeader/header";
import "./login.scss";

const defaultForm = { email: "", password: "" };
const defaultErrorMessages = { email: "", password: "" };

const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState(defaultForm);
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [errorMessages, setErrorMessages] = useState(defaultErrorMessages);

  const onSubmit = () => {
    const tempErrorMessages = { ...defaultErrorMessages };
    Object.keys(loginForm).map((key) => {
      tempErrorMessages[key] = validateField(key, loginForm[key]);
    });
    if (loginForm.email !== "") {
      tempErrorMessages.email = validateEmail(loginForm.email);
    }
    isFormValid(tempErrorMessages) && dispatch(userActions.login(loginForm));
  };

  const handleInputChange = (event, key) => {
    setLoginForm({ ...loginForm, [key]: event.target.value });
    validateField(key, event.target.value);
  };

  const validateField = (key, value) => {
    if (value === "") {
      setErrorMessages((oldErrorMessages) => ({
        ...oldErrorMessages,
        [key]: "Required",
      }));
      return "Required";
    } else {
      setErrorMessages((oldErrorMessages) => ({
        ...oldErrorMessages,
        [key]: "",
      }));
      return "";
    }
  };

  const validateEmail = (email) => {
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setErrorMessages({
        ...errorMessages,
        email: "",
      });
      return "";
    } else {
      setErrorMessages({
        ...errorMessages,
        email: "Email is badly formated",
      });
      return "Email is badly formated";
    }
  };

  const isFormValid = (errorMsgs) => {
    let tempValidForm = true;
    Object.values(errorMsgs).map((errorMsg) => {
      if (errorMsg !== "") {
        tempValidForm = false;
      }
    });
    return tempValidForm;
  };

  useEffect(() => {
    getUsers(dispatch);
    dispatch(userActions.resetError());
  }, []);

  useEffect(() => {
    if (Object.keys(user.user).length !== 0) {
      localStorage.setItem("user", user.user);
      history.push("plannerHome");
    }
  }, [user.user]);

  useEffect(() => {
    switch (user.error.code) {
      case "auth/invalid-email":
      case "auth/user-not-found":
      case "auth/wrong-password":
        return setErrorMessages({
          ...errorMessages,
          password: "Invalid email or password",
        });
      default:
        return setErrorMessages(defaultErrorMessages);
    }
  }, [user.error]);

  return (
    <>
      <div className="backgroundImg">
        <Header />

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
          <div style={{ padding: "40px" }}>
            <Input
              className="auth-input"
              icon={faEnvelope}
              name={"email"}
              placeholder={"Email"}
              type={"email"}
              onChange={(event) => handleInputChange(event, "email")}
              onBlur={(event) => validateEmail(event.target.value)}
              errorMsg={errorMessages.email}
            />
            <Input
              className="auth-input"
              icon={faLock}
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              onChange={(event) => handleInputChange(event, "password")}
              errorMsg={errorMessages.password}
            />
            <NormalButton buttonName={"Login"} onClick={onSubmit} />
            <p style={{ textAlign: "center", marginBottom: "0px" }}>
              Not a member?
              <Link to="/register" style={{ color: "#ae8b70" }}>
                {" Signup Now"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
