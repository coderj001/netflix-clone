import React from "react";
import * as ROUTER from "../constants/routes";
import { Header, Profile } from "../components";

function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTER.HOME}
            alt="NetFlix Logo"
            src="/logo.svg"
          ></Header.Logo>
        </Header.Frame>
      </Header>
      <Profile>
        <Profile.Title>Who's is watching?</Profile.Title>
        <Profile.List>
          <Profile.User>
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}

export default SelectProfileContainer;
