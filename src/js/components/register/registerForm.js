import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../actions/users";
import { userActions } from "../../store/actions/user.actions";
import Input from "../Input/Input";
import NormalButton from "../NormalButton/NormalButton";
import "./register.scss";

const form = { firstName: "", lastName: "", email: "", password: "" };

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState(form);
  const history = useHistory();

  const onSubmit = () => {
    console.log(registerForm);
    dispatch(userActions.register(registerForm)).then(() => {
      history.push("/plannerHome");
    });
  };

  const handleInputChange = (event, key) => {
    setRegisterForm({ ...registerForm, [key]: event.target.value });
  };

  useEffect(() => {
    getUsers(dispatch);
  }, []);
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
        <div style={{ padding: "40px" }}>
          <Input
            icon={faUser}
            name={"firstName"}
            placeholder={"FirstName"}
            onChange={(event) => handleInputChange(event, "firstName")}
          ></Input>
          <Input
            icon={faUser}
            name={"lastName"}
            placeholder={"LastName"}
            onChange={(event) => handleInputChange(event, "lastName")}
          ></Input>
          <Input
            icon={faEnvelope}
            name={"email"}
            placeholder={"Email"}
            onChange={(event) => handleInputChange(event, "email")}
          ></Input>
          <Input
            icon={faLock}
            name={"password"}
            placeholder={"password"}
            onChange={(event) => handleInputChange(event, "password")}
          ></Input>
          <NormalButton
            buttonName={"Register"}
            linkName={"Login Now"}
            linkText={"Already have an account? "}
            onClick={onSubmit}
          />
        </div>
      </div>
    </>
  );
}
