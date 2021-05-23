import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTER from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTER.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTER.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTER.SIGN_IN}>
          <Signin />
        </Route>
        <Route exact path={ROUTER.SIGN_UP}>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
