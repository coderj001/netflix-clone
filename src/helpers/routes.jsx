import React from "react";
import { Route, Redirect } from "react-router-dom";

function IsUserRedirect({ user, loginInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) return children;
        else return <Redirect to={{ pathname: loginInPath }} />;
      }}
    />
  );
}

export default IsUserRedirect;
