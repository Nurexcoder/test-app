import React from "react";
import styled from "styled-components";

const CircleContainer = styled.div`
  margin: 28px 0;
  width: 100%;
  height: 60vh;

  align-items: center;
  position: relative;
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
  left: 40%;
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
  top: 52%;
  left: 32%;
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
  top: 52%;
  right: 30%;
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
  text-align:center;
`;
const CircleText2 = styled(CircleText)`
  position: absolute;
  top: 40%;
  left: 10%;
`;
const CircleText3 = styled(CircleText)`
  position: absolute;
  top: 30%;
  right: 15%;
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
