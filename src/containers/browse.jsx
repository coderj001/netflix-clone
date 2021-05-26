import React, { useContext, useState } from "react";
import SelectProfileContainer from "./profile";
import { FirebaseContext } from "../contexts/firebase";

function BrowserContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  console.log(user);

  return (
    <div>
      <SelectProfileContainer user={user} setProfile={profile} />
    </div>
  );
}

export default BrowserContainer;
