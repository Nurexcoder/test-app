import React from "react";
import styled from "styled-components";
import Body from "./FirstPage/Body";
import Landing from "./FirstPage/Main";
import Navbar from "./FirstPage/Navbar";
import FourthMain from "./FourthPage/FourthMain";
import SecondMain from "./Second/Main";
import ThirdMain from "./ThirdPage/Main";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const RCMMain = () => {
  return (
    <Component>
      <Landing />
      <SecondMain />
      <ThirdMain />
      <FourthMain />
    </Component>
  );
};

export default RCMMain;
