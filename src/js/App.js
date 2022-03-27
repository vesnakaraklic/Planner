import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./views/login/login";
import RegisterForm from "./views/register/register";
import PlannerHome from "./views/PlannerHome";
import UserHeader from "./components/userHeader/userHeader";
import DailyPlanner from "./views/dailyPlanner/dailyPlanner";
import Sidebar from "./components/sidebar/sidebar";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path={"/register"}>
            <RegisterForm />
          </Route>

          <Route exact path="/plannerHome">
            {/* <UserHeader /> */}
            {/* <Sidebar /> */}
            <PlannerHome></PlannerHome>
          </Route>

          <Route exact path="/dailyPlanner">
            {/* <UserHeader /> */}

            <DailyPlanner></DailyPlanner>
          </Route>

          <Route exact path="/">
            <LoginForm />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
