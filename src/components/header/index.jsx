import React from "react";
import { Link } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./style/header.jsx";

function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.Button = function HeaderButton({ to, children, ...restProps }) {
  return <ButtonLink to={to}>{children}</ButtonLink>;
};

export default Header;
