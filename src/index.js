import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./app.jsx";
import GlobalStyle from "./global-style";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./contexts/firebase.jsx";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
