import React from "react";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import FormContainerSignUp from "../containers/formsignup";

function Signup() {
  return (
    <>
      <HeaderContainer>
        <FormContainerSignUp />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signup;
