import Lottie from "react-lottie";
import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import animationData from './hero.json'

const bodyLoad = keyframes`
  
  0% {
    transform: translateY(3%) ;

    opacity: 0;
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
    transform: translateY(1);
    opacity: 1;
    /* position:absolute;  */
  }

`;
const Component = styled.div`
  height: 85vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: none !important;
  z-index: 100;
  flex-direction: column;
  margin-top: 30px;
  min-height: 350px;
  @media (max-width: 1000px) {
    height: 40vh;
    min-height: 300px;
    justify-content: space-between;
  }
  
  @media (max-width: 560px) {
    height: 40vh;
    min-height: 20  0px;
    justify-content: space-between;
  }
  
  `;
const BoxContainer = styled.div`
  width: 62%;
  height: 90%;
  /* margin-top: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: ${bodyLoad} 900ms ease-in;
  /* animation-delay:200ms; */
  overflow: none !important;
  /* background-color: #fff; */
  @media(max-width:560px){
    height: 90%;
    width: 80%;
    br{
      display: none;
    }
  }
`;

const Message = styled.div`
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 25ch;
  font-size: 4rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
  /* @media (min-width: 1600px) {
    font-size: 4.8rem;
  }
  @media (min-width: 2000px) {
    font-size: 6.8rem;
  } */
  @media (max-width: 860px) {
    font-size: 1.2rem;
  }
`;
const ColoredMessage = styled(Message)`
  margin: 0;
  color: #fad65d;
`;
const SmallMessage = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  align-items: center;
  text-align: center;

  font-size: 3vh;
  letter-spacing: 1.2px;
  font-weight: 500;
  color: #fff;
  @media (max-width: 1000px) {
  color: #fff;
    margin-top: 20px;
    font-size: 1rem;
  }
  @media (max-width: 860px) {
    margin-top: 20px;
    font-size: 0.9rem;
  }
  /* @media (min-width: 1600px) {
    font-size: 1.8rem;
  }
  @media (min-width: 2000px) {
    font-size: 2.5rem;
  } */
`;

const Body = () => {
  return (
    <Component>
      <BoxContainer>
        <Message align="center">
          Why? <br />
          <ColoredMessage>Road Condition Mapper</ColoredMessage>
        </Message>
        <SmallMessage>
          Road Condition Mapper dedicated towards <br /> Preventing Accidents
          and Fastening the <br /> Commute
        </SmallMessage>
      </BoxContainer>
    </Component>
  );
};

export default Body;
