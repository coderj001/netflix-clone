import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { FirebaseContext } from "../contexts/firebase";
import * as ROUTES from "../constants/routes";

function FormContainerSignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInValid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: firstName,
            // ERROR:  <26-05-21, coderj001> // Not working
            photoURl: `${Math.floor(Math.random() * 5) + 1}`,
          })
          .then(() => history.push(ROUTES.BROWSE))
          .catch((err) => setError(err.message));
      })
      .catch((err) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <div>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignUp} method="POST">
          <Form.Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Input>
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
          <Form.Submit disabled={isInValid}>Sign Up</Form.Submit>
        </Form.Base>
        <Form.Text>
          Already a user.{" "}
          <Form.Link to={ROUTES.SIGN_IN}>Sign Up Now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page protected by google reCAPTURA. To ensure you are not bot.
        </Form.TextSmall>
      </Form>
    </div>
  );
}

export default FormContainerSignUp;
