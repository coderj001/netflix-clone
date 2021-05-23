import React from "react";
import Header from "../components/header";
import * as ROUTER from "../constants/routes";

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTER.HOME}
          alt="NetFlix Logo"
          src="/logo.svg"
        ></Header.Logo>
        <Header.Button to={ROUTER.SIGN_IN}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}

export default HeaderContainer;
