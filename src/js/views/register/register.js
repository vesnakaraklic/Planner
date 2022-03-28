import React, { useEffect, useState } from "react";
import {
  faEnvelope,
  faLock,
  faUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/inputWithIcon/Input";
import NormalButton from "../../components/NormalButton/NormalButton";
import Header from "../../components/homeHeader/header";
import { getUsers } from "../../api/users";
import { userActions } from "../../store/actions/user.actions";
import { Link, useHistory } from "react-router-dom";
import "./register.scss";

const form = { firstName: "", lastName: "", email: "", password: "" };
const defaultErrorMessages = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState(form);
  const [errorMessages, setErrorMessages] = useState(defaultErrorMessages);
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const onSubmit = () => {
    const tempErrorMessages = { ...defaultErrorMessages };
    Object.keys(registerForm).map((key) => {
      tempErrorMessages[key] = validateField(key, registerForm[key]);
    });
    if (registerForm.email !== "") {
      tempErrorMessages.email = validateEmail(registerForm.email);
    }
    isFormValid(tempErrorMessages) &&
      dispatch(userActions.register(registerForm));
  };

  const handleInputChange = (event, key) => {
    setRegisterForm({ ...registerForm, [key]: event.target.value });
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

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
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
    console.log(user.error);
    switch (user.error.code) {
      case "auth/invalid-email":
        return setErrorMessages({
          ...errorMessages,
          password: "Email is badly formated",
        });
      case "auth/weak-password":
        return setErrorMessages({
          ...errorMessages,
          password: "Use at least 6 characers for password",
        });
      default:
        return setErrorMessages(defaultErrorMessages);
    }
  }, [user.error]);

  return (
    <>
      <Header />
      <div className="register_form">
        <div className="register-title">
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
        <div style={{ padding: "40px" }}>
          <Input
            className="auth-input"
            icon={faUser}
            name={"firstName"}
            placeholder={"Firstname"}
            type={"text"}
            onChange={(event) => handleInputChange(event, "firstName")}
            errorMsg={errorMessages.firstName}
          ></Input>
          <Input
            className="auth-input"
            icon={faUser}
            name={"lastName"}
            placeholder={"Lastname"}
            type={"text"}
            onChange={(event) => handleInputChange(event, "lastName")}
            errorMsg={errorMessages.lastName}
          ></Input>
          <Input
            className="auth-input"
            icon={faEnvelope}
            name={"email"}
            placeholder={"Email"}
            type={"email"}
            onChange={(event) => handleInputChange(event, "email")}
            onBlur={(event) => validateEmail(event.target.value)}
            errorMsg={errorMessages.email}
          ></Input>
          <Input
            className="auth-input"
            icon={faLock}
            name={"password"}
            placeholder={"Password"}
            type={isPasswordShown ? "text" : "password"}
            iconEye={!isPasswordShown ? faEye : faEyeSlash}
            onEyeClick={togglePasswordVisibility}
            onChange={(event) => handleInputChange(event, "password")}
            errorMsg={errorMessages.password}
          ></Input>

          <NormalButton buttonName={"Register"} onClick={onSubmit} />
          <p style={{ textAlign: "center", marginBottom: "0px" }}>
            Already have an account?
            <Link to="/login" style={{ color: "#56DDD2" }}>
              {" Login Now"}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

// code: 'auth/invalid-email', message: 'The email address is badly formatted.'
// code: 'auth/weak-password', message: 'The password must be 6 characters long or more.'
// code: 'auth/email-already-in-use', message: 'The email address is already in use by another account.'
