import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Input from "../Input/Input";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useState } from "react";
import NormalButton from "../NormalButton/NormalButton";
import { getUsers } from "../../actions/users";
import "./register.scss";
import { useDispatch } from "react-redux";

const form = { firstName: "", lastName: "", email: "", password: "" };

export default function RegisterForm() {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState(form);
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("/plannerHome");
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
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "40px" }}>
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
          />
        </form>
      </div>
    </>
  );
}
