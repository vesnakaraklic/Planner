import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { createHashHistory } from "history";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/actions/user.actions";
import Home from "./views/home/home";
import Auth from "./views/auth/auth";

export default function App() {
  const history = createHashHistory();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userActions.listenToAuthChanges());
  }, []);

  useEffect(() => {}, [loading]);

  return (
    <>
      <div className="landingPage">
        {!loading && (
          <HashRouter history={history}>
            <Switch>
              <Route path="/">
                {user && Object.keys(user).length !== 0 ? <Home /> : <Auth />}
              </Route>
            </Switch>
          </HashRouter>
        )}
      </div>
    </>
  );
}
