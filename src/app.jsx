import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTER from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { FirebaseContext } from "./contexts/firebase";
import IsUserRedirect from "./helpers/routes";

function App() {
  const user = {};
  // get firebase user
  // const { firebase } = useContext(FirebaseContext);
  // console.log(firebase.auth().currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTER.HOME}>
          <Home />
        </Route>

        <Route exact path={ROUTER.BROWSE}>
          <Browse />
        </Route>

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
