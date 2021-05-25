import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTER from "../constants/routes";

function IsUserRedirect({ user, loginInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (!user) return children;
        else
          return (
            <Redirect
              to={{ pathname: loginInPath, state: { from: location } }}
            />
          );
      }}
    />
  );
}

function ProtectRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) return children;
        else
          return (
            <Redirect
              to={{ pathname: ROUTER.SIGN_IN, state: { from: location } }}
            />
          );
      }}
    />
  );
}

export { ProtectRoute, IsUserRedirect };
