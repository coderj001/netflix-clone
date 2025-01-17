import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./style/jumbotron";

function Jumbotron({ children, direction = "row", ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

Jumbotron.protoTypes = {
  direction: PropTypes.string.isRequired,
};

Jumbotron.defaultProps = {
  direction: "row",
  children: null,
};

Jumbotron.Container.defaultProps = {
  children: null,
};

Jumbotron.Pane.defaultProps = {
  children: null,
};

Jumbotron.Title.defaultProps = {
  children: null,
};

Jumbotron.SubTitle.defaultProps = {
  children: null,
};

export default Jumbotron;
