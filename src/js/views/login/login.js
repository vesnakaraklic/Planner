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

const form = { email: "", password: "" };

const LoginForm = () => {
  const { handleSubmit } = useForm();
  const [loginForm, setLoginForm] = useState(form);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    dispatch(userActions.login(loginForm));
  };

  const handleInputChange = (event, key) => {
    setLoginForm({ ...loginForm, [key]: event.target.value });
  };

  useEffect(() => {
    setMessage("");
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
      case "auth/wrong-password":
        return setMessage("Invalid email or password");
      case "auth/user-not-found":
        return setMessage("User not found!");
      default:
        return setMessage("");
    }
  }, [user.error]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  return (
    <>
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
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "40px" }}>
          <Input
            // {...register("email")}
            icon={faEnvelope}
            name={"email"}
            placeholder={"Email"}
            onChange={(event) => handleInputChange(event, "email")}
          />
          <Input
            // {...register("password")}
            icon={faLock}
            name={"password"}
            placeholder={"Password"}
            onChange={(event) => handleInputChange(event, "password")}
          />
          {message}
          <NormalButton buttonName={"Login"} onClick={onSubmit} />
          <p style={{ textAlign: "center", marginBottom: "0px" }}>
            Not a member?
            <Link to="/register" style={{ color: "lightpink" }}>
              Signup Now
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
