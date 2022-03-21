import React, { useEffect, useState } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import NormalButton from "../NormalButton/NormalButton";
import { getUsers } from "../../actions/users";
import { useHistory } from "react-router-dom";
import "./login.scss";
import { userActions } from "../../store/actions/user.actions";

const form = { email: "", password: "" };

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [loginForm, setLoginForm] = useState(form);
  const dispatch = useDispatch();
  const history = useHistory();
  const userList = useSelector((state) => state.user.users);
  let isSame = false;

  const onSubmit = (data) => {
    // console.log(loginForm.email);
    // userList.map((user) => {
    //   if (loginForm.email === user.email && !isSame) {
    //     console.log("Same email!");
    //     history.push("/login");
    //     isSame = true;
    //   } else {
    //     console.log("Jeej!!!");
    //     history.push("/plannerHome");
    //   }
    // });
    dispatch(userActions.login(loginForm)).then(() => {
      history.push("plannerHome");
    });
  };

  const handleInputChange = (event, key) => {
    setLoginForm({ ...loginForm, [key]: event.target.value });
  };

  useEffect(() => {
    getUsers(dispatch);
  }, []);

  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

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
          <NormalButton
            buttonName={"Login"}
            linkName={"Signup Now"}
            linkText={"Not a member? "}
          />
        </form>
      </div>
    </>
  );
};
export default LoginForm;
