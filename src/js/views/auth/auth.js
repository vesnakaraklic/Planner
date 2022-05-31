import React, { useState } from "react";
import AuthHeader from "../../components/authHeader/authHeader";
import LoginForm from "./login/login";
import RegisterForm from "./register/register";

export default function Auth() {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="authWrapper">
        <AuthHeader active={active} setActive={setActive} />
        {active === 1 && <LoginForm setActive={setActive} />}
        {active === 2 && <RegisterForm setActive={setActive} />}
      </div>
    </>
  );
}
