import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./views/login/login";
import RegisterForm from "./views/register/register";
import PlannerHome from "./views/plannerHome/plannerHome";
import { createHashHistory } from "history";
import { useDispatch } from "react-redux";
import { userActions } from "./store/actions/user.actions";

export default function App() {
  const history = createHashHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.listenToAuthChanges());
  }, []);
  return (
    <>
      <HashRouter history={history}>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>

          <Route exact path="/plannerHome">
            <PlannerHome></PlannerHome>
          </Route>

          <Route exact path="/">
            <LoginForm />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}
