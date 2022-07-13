import React from "react";
import styled, { keyframes } from "styled-components";

const bodyLoad = keyframes`
  
  0% {
    width:100%;
    height:550px;
    /* position:absolute; */
}
/* 50%{
    transform: translateY(-50%);
    opacity: 0.5;
}
75%{
  transform: translateY(-25%);
  opacity: 0.75;
} */
100% {
  width: 800px;
  opacity: 1;
  height: 440px;
    /* position:absolute;  */
  }

`;
const CircleContainer = styled.div`
  margin: 28px 0;
  width: 800px;
  height: 440px;

  align-items: center;
  animation: ${bodyLoad} 800ms ease-in;
  position: relative;
  @media (max-width: 860px) {
    width: 360px;
    height: 300px;
  }
`;
const Circle = styled.div`
  width: 260px;
  height: 260px;
  border: 2px solid #fad65d;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 30%;
  @media (max-width: 860px) {
    width: 180px;
    height: 180px;
  }
`;
const Circle2 = styled.div`
  width: 260px;
  height: 260px;
  border: 2px solid #fad65d;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 20%;
  @media (max-width: 860px) {
    width: 180px;
    height: 180px;
    top: 35%;
    left: 10%;
  }
`;
const Circle3 = styled.div`
  width: 260px;
  height: 260px;
  border: 2px solid #fad65d;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 40%;
  right: 20%;
  @media (max-width: 860px) {
    width: 180px;
    height: 180px;
    top: 35%;
    right: 10%;
  }
`;
const CircleText = styled.div`
  /* margin-top: 70px; */
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  color: #696a6a;
  text-align: justify;
  font-size: 1.2rem;
  position: absolute;
  top: 30%;
  right: 20%;
  text-align: center;
  @media (max-width: 860px) {
    font-size: 0.8rem;
  }
`;
const CircleText2 = styled(CircleText)`
  position: absolute;
  top: 40%;
  @media (max-width: 860px) {
    font-size: 0.8rem;
  }
  left: 10%;
`;
const CircleText3 = styled(CircleText)`
  position: absolute;
  top: 30%;
  right: 15%;
  @media (max-width: 860px) {
    font-size: 0.8rem;
  }
`;

const CircularContainer = () => {
  return (
    <CircleContainer>
      <Circle>
        <CircleText>
          Potholes and Bad <br /> Road Infrastructure
        </CircleText>
      </Circle>
      <Circle2>
        <CircleText2 align="left">Road Blockage</CircleText2>
      </Circle2>
      <Circle3>
        <CircleText3>
          Water Logging <br /> and Bad Weather <br /> Conditions
        </CircleText3>
      </Circle3>
    </CircleContainer>
  );
};

export default CircularContainer;
