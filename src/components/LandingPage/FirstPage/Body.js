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
  height: 85vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: none !important;
  z-index: 100;
`;
const BoxContainer = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  font-size: 3.3rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: #fff;
`;
const ColoredMessage = styled(Message)`
  margin: 0;
  color: #fad65d;
`;
const MapComponent = styled.div`
  z-index: 10;
  width: 62%;
  height: 299px;
  margin-top: 15px;
  background: #f5f5f5;
  -webkit-filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.13));
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.13));
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonComponent = styled.div`
  margin-top: 10px;
  z-index: 100;
  width: 60%;
  display: flex;
  justify-content: center;
`;
const LeftButton = styled.div`
  width: 40%;
`;
const RightButton = styled.div`
  width: 60%;
  /* padding:0 5px */
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 0.5px solid rgba(0, 0, 0, 0.5);
  position: relative;
`;

const GetStartedButton = styled.button`
  z-index: 100;
  padding: 8px 15px;
  color: #fff;

  font-weight: 600;
  background: #023047;
  border: 3px solid #023047;
  box-shadow: 0px 4px 58px rgba(2, 48, 71, 0.25);
  border-radius: 4px;
  &:hover {
    transform: scale(1.1);
    background-color: black;
    border: 3px solid #000;
    transition: ease;
  }
`;

const Button = styled.button`
  margin-left: 10px;
  display: flex;
  /* width: 300px; */
  padding: 8px 0px;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-weight: 600;
  color: #696969;

  /* box-shadow: 0px 4px 58px rgba(2, 48, 71, 0.25); */
  background-color: transparent;
  border-radius: 4px;
  /* letter-spacing: 0.15em; */

  /* display: inline-block; */
  /* padding: 15px 20px; */
  position: relative;
  &:hover{
    transform:scale(1.1);
    transition: ease-in-out;
  }
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: yellow;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
  &:hover {
    /* background-color: yellow; */
  }
`;
const Icon = styled.img`
  width: 15%;
  height: auto;
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
            width="96%"
            radius="5px"
            height="96%"
            style={{
              borderRadius: "40px !important",
            }}
          />
        </MapComponent>
        <ButtonComponent>
          <LeftButton>
            <GetStartedButton>Get Started Now</GetStartedButton>
          </LeftButton>
          <RightButton>
            <Button>
              Learn More <Icon src="/images/rightArrow.png" />
            </Button>
            <Button>How we work</Button>
          </RightButton>
        </ButtonComponent>
      </BoxContainer>
    </Component>
  );
};

export default Body;