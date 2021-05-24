import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { FirebaseContext } from "../contexts/firebase";
import * as ROUTES from "../constants/routes";

function FormContainerSignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInValid = password === "" || emailAddress === "";
  const handleSignIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <div>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignIn} method="POST">
          <Form.Input
            type="email"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          ></Form.Input>
          <Form.Input
            type="password"
            autoComplete="off"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Input>
          <Form.Submit disabled={isInValid}>Sign In</Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Netflix?{" "}
          <Form.Link to={ROUTES.SIGN_UP}>Sign Up Now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page protected by google reCAPTURA. To ensure you are not bot.
        </Form.TextSmall>
      </Form>
    </div>
  );
}

export default FormContainerSignIn;
