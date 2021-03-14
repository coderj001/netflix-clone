import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>;
};

Footer.defaultProps = {
  children: null,
};

Footer.Row.defaultProps = {
  children: null,
};

Footer.Column.defaultProps = {
  children: null,
};

Footer.Title.defaultProps = {
  children: null,
};

Footer.Text.defaultProps = {
  children: null,
};

Footer.Break.defaultProps = {
  children: null,
};

export default Footer;
