import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTER from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { ProtectRoute, IsUserRedirect } from "./helpers/routes";
import { useAuthListener } from "./hooks";

function App() {
  const user = useAuthListener();
  console.log(user);

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTER.HOME}>
          <Home />
        </Route>

        <ProtectRoute exact path={ROUTER.BROWSE} user={user}>
          <Browse />
        </ProtectRoute>

        <IsUserRedirect
          exact
          path={ROUTER.SIGN_IN}
          user={user}
          loginInPath={ROUTER.BROWSE}
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          exact
          path={ROUTER.SIGN_UP}
          user={user}
          loginInPath={ROUTER.BROWSE}
        >
          <Signup />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
