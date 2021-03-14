import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = ({ children, ...restProps }) => {
  // ERROR:  <14-03-21, coderj001> // Due to function name in captization
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
    </Header>
  );
};

Accordion.Body = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
