import Lottie from "react-lottie";
import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import animationData from "./hero.json";

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
  max-height: 80vh;
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: none !important;
  z-index: 100;
  margin-bottom: 3%;
  @media (max-width: 1000px) {
    min-height: 450px;
  }
  @media (max-width: 560px) {
    min-height: 350px;
    margin-top: 2vh;
  }
`;
const BoxContainer = styled.div`
  width: 80%;
  /* margin-top: 40px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1000px) {
    font-size: 1.8rem;
    width: 90%;
  }
  @media (max-width: 560px) {
    font-size: 1.1rem;
    width: 90%;
  }

  animation: ${bodyLoad} 900ms ease-in;
  /* animation-delay:200ms; */
  overflow: none !important;
  /* background-color: #fff; */
`;

const Message = styled.div`
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 7vh;
  letter-spacing: 1px;
  font-weight: 700;
  color: #fff;

  /* @media (min-width: 1500px) {
    font-size: 3.8rem;
  } */
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  margin: 10px 0;
  @media (max-width: 1000px) {
    font-size: 2.8rem;
  }
  @media (max-width: 560px) {
    /* min-width:; */
    font-size: 2rem;
  }
  @media (max-width: 380px) {
    /* min-width:; */
    font-size: 1.8rem;
  }
`;

const ColoredMessage = styled(Message)`
  margin: 0;
  color: #fad65d;
`;
const MapComponent = styled.div`
  z-index: 10;
  width: max(35vw, 500px);

  min-width: calc(48ch);
  height: auto;
  /* margin-top: 5px; */
  background: #f5f5f5;
  /* -webkit-filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.13)); */
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.13));
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    /* min-width: 40%; */
    min-width: 540px;
    /* max-width: 280px; */
  }
  @media (max-width: 560px) {
    min-width: 250px;
    width: 100%;
  }
`;
const ButtonComponent = styled.div`
  margin-top: 5px;
  z-index: 100;
  min-width: 32vw;
  min-width: calc(40ch);
  display: flex;
  font-family: "Roboto";
  font-weight: 600;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;

  @media (max-width: 1000px) {
    min-width: 35%;
    /* background-color: #fff; */
    margin-top: 10px;
  }
  @media (max-width: 560px) {
    width: 85%;
    /* background-color: #fff; */
    margin-top: 10px;
  }
`;
const LeftButton = styled.div`
  width: 40%;
  /* border-left: 0.8px solid rgba(0, 0, 0, 0.5); */
`;
const RightButton = styled.div`
  width: 60%;
  /* paddg:0 5px */
  padding-left: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media (max-width: 1000px) {
    width: 70%;
  }
`;

const GetStartedButton = styled.button`
  z-index: 100;
  padding: 8px 5px;
  color: #fff;

  font-size: 2vh;
  height: 5.8vh;
  min-width: 18ch;
  /* width:100%; */
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display:inline-block; */
  background: #023047;
  border: 6px solid #023047;
  /* box-shadow: 0px 4px 58px rgba(2, 48, 71, 0.25); */
  border-radius: 4px;
  &:hover {
    font-size: 2vh;
    transform: scale(1.08);
    background-color: black;
    border: 3px solid #000;
    transition: ease;
    @media (max-width: 1000px) {
      /* padding: 8px 2px; */
      font-size: 1vh;
      /* width: 100%; */
      /* height: 2.8vh; */
      /* width: 10vw; */
    }
  }

  @media (max-width: 1000px) {
    padding: 4px 2px;
    font-size: 1vh;
    width: 100%;
    height: 2.8vh;
    /* width: 10vw; */
  }
`;
const Line = styled.div`
  padding: 4px 0px;
  height: 1vh;
  margin: 0 8px;
  border: 0.8px solid #696969;
`;
const Button = styled.button`
  margin-left: 10px;
  display: flex;
  /* width: 300px; */
  padding: 8px 0px;
  font-size: 2vh;
  height: 5.5vh;
  width: 10vw;
  min-width: 16ch;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1000px) {
    padding: 8px 2px;
    font-size: 1vh;
    width: 100%;
    height: 2.8vh;
    /* width: 10vw; */
  }
  /* @media (min-width: 1600px) {
    font-size: 1rem;
  } */

  font-weight: 600;
  color: #696969;

  /* box-shadow: 0px 4px 58px rgba(2, 48, 71, 0.25); */
  background-color: transparent;
  border-radius: 4px;
  /* letter-spacing: 0.15em; */

  /* display: inline-block; */
  /* padding: 15px 20px; */
  position: relative;
  &:hover {
    transform: scale(1.1);
    transition: ease-in-out;
  }

  &:hover {
    /* background-color: yellow; */
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const ButtonText = styled.h3`
  font-size: 2vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 25px;
  padding-bottom: 2px;
  background-image: linear-gradient(#fad65d, #fad65d);
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s; /*change after the size immediately*/
  @media (max-width: 1000px) {
    line-height: 2px;
    padding: 0px 2px;
    font-size: 1vh;
    width: 100%;
    height: 2.8vh;
    /* width: 10vw; */
  }
  :hover {
    background-position: 100% 100%; /*OR bottom right*/
    background-size: 100% 2px;
  }
`;
const Icon = styled.img`
  width: 15%;
  height: auto;
  margin-left: 4px;
  &:parent:hover {
    background-color: yellow;
  }
`;

const Body = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Component>
      <BoxContainer>
        <Message>
          Delivering Navigation
          <ColoredMessage>Intelligence</ColoredMessage>
        </Message>
        <MapComponent>
          <Lottie
            options={defaultOptions}
            width="100%"
            borderRadius="5px"
            height="auto"
            style={{
              borderRadius: "40px !important",
            }}
          />
        </MapComponent>
        <ButtonComponent>
          <LeftButton>
            <GetStartedButton>Get Started Now</GetStartedButton>
          </LeftButton>
          <Line />
          <RightButton>
            <Button>
              <ButtonText>
                Learn More{"  "} <Icon src="/images/rightArrow.png" />
              </ButtonText>
            </Button>
            <Button>
              <ButtonText>How we work</ButtonText>
            </Button>
          </RightButton>
        </ButtonComponent>
      </BoxContainer>
    </Component>
  );
};

export default Body;
