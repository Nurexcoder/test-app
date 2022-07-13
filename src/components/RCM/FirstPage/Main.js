import React from "react";
import styled from "styled-components";
import Body from "./Body";
import CircularContainer from "./CircularContainer";
import Navbar from "./Navbar";

const MainComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Component = styled.div`
  width: 100%;
  height: 80vh;
  
  background-color: #367b9d;
  
/* background: radial-gradient(circle, rgba(54,123,157,1) 74%, rgba(255,255,255,1) 78%); */
  position: relative;
  border-bottom-left-radius: 35%;
    border-bottom-right-radius: 35%;
  /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  /* shape-outside: polygon(0 0, 100% 50%, 0, 100%); */
  /* clip-path: polygon(100% 100%, 100% 100%, 100% 100%); */

  @media (max-width: 1000px) {
    height: 60vh;
  }
`;

const Triangle = styled.div`
  /* width:100%;
    height: 20vh;
    background-color: #fff;
    position: absolute;
    bottom: 0; */
`;

const Main = () => {
  return (
    <MainComponent>
      <Component>
        <Navbar />
        <Body />
      </Component>
      <CircularContainer />
    </MainComponent>
  );
};

export default Main;
