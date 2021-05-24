import React, { useState } from "react";
import { Form } from "../components";

function FormContainer() {
  const [emailAddress, setEmailAddress] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const isInValid = password === "" || emailAddress === "";
  const handleSignIn = (e) => {
    e.preventDefault();
    // Firebase work
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
          New to Netflix? <Form.Link to="/signup">Sign Up Now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page protected by google reCAPTURA. To ensure you are not bot.
        </Form.TextSmall>
      </Form>
    </div>
  );
}

export default FormContainer;
