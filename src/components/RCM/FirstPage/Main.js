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
  overflow: hidden;
  margin-bottom: 20px;

  `;
const Component = styled.div`
  width: 100%;
  height: 80vh;
  margin-bottom: 20px;
  /* min-height:500px; */
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  
  /* min-height: 600px; */
  
  /* background-color: #367b9d; */
  
/* background: radial-gradient(circle, rgba(54,123,157,1) 74%, rgba(255,255,255,1) 78%); */
  position: relative;
  border-bottom-left-radius: 35%;
    border-bottom-right-radius: 35%;
    min-height: 500px;
  /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  /* shape-outside: polygon(0 0, 100% 50%, 0, 100%); */
  /* clip-path: polygon(100% 100%, 100% 100%, 100% 100%); */

  @media (max-width: 1000px) {
    height: 50vh;
  }

  @media (max-width: 560px) {
    height: 40vh;
    min-height: 300px;

  }
`;

const Circle = styled.div`
  width: 150vw;
  height: 150vh;
  border-radius: 50%;
  background-color: #367b9d;
  position: absolute;
  top: -90%;
  /* bottom: 25%; */
  left: -27%;
  z-index: -11;
  @media (max-width: 1000px) {
    height: 600px;
    height: 600px;
    top: -40%;
    left: -25%;
    z-index: -11;
  }
  @media (max-width: 590px) {
    height: 600px;
    height: 600px;
    top: -95%;
    left: -25%;
    z-index: -11;
  }
`;

const Main = () => {
  return (
    <MainComponent>
      <Component>
        <Navbar />
        <Body />
        <Circle/>
      </Component>
      <CircularContainer/>
    </MainComponent>
  );
};

export default Main;
