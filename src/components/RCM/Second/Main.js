import React from "react";
import styled from "styled-components";
import MoreDetails from "./MoreDetails";
import Points from "./Points";

const Container = styled.div`
  width: 100%;
  /* height:80vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SecondMain = () => {
  return (
    <Container>
      <Points />
      <MoreDetails/>
    </Container>
  );
};

export default SecondMain;