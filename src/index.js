import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./app.jsx";
import GlobalStyle from "./global-style";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
