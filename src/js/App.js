import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../js/views/Home";
import Login from "../js/views/Login";
import Header from "../js/components/header";
import Register from "../js/views/Register";
import PlannerHome from "./views/PlannerHome";
import UserHeader from "./components/userHeader";
import AddToPlanner from "./components/addToPlanner";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path={"/register"}>
            <Header />
            <Register />
          </Route>
          <Route exact path="/">
            <Header />
            <Home></Home>
          </Route>
          <Route exact path="/plannerHome">
            <UserHeader />
            <PlannerHome></PlannerHome>
          </Route>
          <Route exact path="/addToPlanner">
            <UserHeader />
            <AddToPlanner></AddToPlanner>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
