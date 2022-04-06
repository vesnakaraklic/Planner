import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./views/login/login";
import RegisterForm from "./views/register/register";
import PlannerHome from "./views/plannerHome/plannerHome";
import DailyPlanner from "./views/dailyPlanner/dailyPlanner";
import WeeklyPlanner from "./views/weeklyPlanner/weeklyPlanner";

export default function App() {
  return (
    <>
      <HashRouter>
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

          <Route exact path="/dailyPlanner">
            <DailyPlanner></DailyPlanner>
          </Route>

          <Route exact path="/weeklyPlanner">
            <WeeklyPlanner />
          </Route>

          <Route exact path="/">
            <LoginForm />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}
