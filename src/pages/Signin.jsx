import React from "react";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import FormContainerSignIn from "../containers/formsignin";

function Signin() {
  return (
    <>
      <HeaderContainer>
        <FormContainerSignIn />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signin;
