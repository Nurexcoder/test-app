import { useState } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import roadBlock from "./RoadBlockNew1.json";
import roadObstruction from "./RoadObstruction.json";
import waterLogging from "./WaterLogging.json";
const Component = styled.div`
  width: 70%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: ; */
  margin-top: 50px;
  
  min-height: 800px;  
  @media (max-width: 1000px) {
    max-height: 60vh;
    /* height: auto; */
    width: 90%;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    min-height: 200px;
  }
`;
const LeftComponent = styled.div`
  /* flex: 3;? */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 1000px){
      /* height: 800px; */
  }
  @media (max-width: 1000px) {
    /* height: 60%; */
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;
const MapComponent = styled.div`
  height: 100%;
  width: 100%;
  /* background:#000; */
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1000px) {
    /* height: 100%; */
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;
const RightComponent = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 400px;
  @media (max-width: 1000px) {
    overflow: scroll !important;
    overflow-y: visible;
    margin-top: 10px;
    width: 95vw;
    flex-direction: row;
    height: fit-content;
    min-height: 200px;
    /* width: 100vw; */
  }
`;
const ColoredRightBox = styled.div`
  width: 30%;
  /* min-height:150px; */
  margin: 5px 0;
  background-color: ${(props) => (props.isActive ? "#023047" : "#f5f5f5")};
  padding: 10px 8px;
  border: ${(props) =>
    props.isActive ? "0.5vh solid transparent" : " 0.5vh solid #367b9d"};
  /* box-shadow: 0px 4px 44px rgba(54, 123, 157, 0.25); */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 8px;
  transition: 1s ease;
  min-height: 200px;
  height: 30vh;
  &:hover {
    background-color: #023047;
  }
  @media (max-width: 1000px) {
    /* max-height: 20%; */
    border-radius: 4px;
    min-width:300px;

    width: 40%;
    min-height: 180px;
  
    height: fit-content;
    padding: 10px 12px;
    margin: 0 10px;
    border: ${(props) =>
      props.isActive ? "1px solid transparent" : " 1px solid #367b9d"};

    /* height: 54%; */
    /* justify-content: space-between; */
  }
  @media (max-width: 560px) {
    /* max-height: 20%; */
    margin-top: 10px;
    min-width: 250px;
    min-height: 150px;
    height: 25%;
    padding: 10px 12px;
    margin: 0 10px;
    border: ${(props) =>
      props.isActive ? "1px solid transparent" : " 1px solid #367b9d"};

    /* height: 54%; */
    /* justify-content: space-between; */
  }

  /* letter-spacing:1px; */
`;
const RightBox = styled(ColoredRightBox)`
  /* background-color: ; */
`;

const ColoredBoxHeader = styled.div`
  color: ${(props) =>
    props.isActive ? "#FAD65D" : props.isHover ? "#FAD65D" : "#464646"};
  font-size: 2.6vh;
  font-weight: 700;
  margin-top: 7px;
  font-family: "Inter";
  margin: 0.6em 0;
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
  @media (max-width: 560px) {
    font-size: 0.9rem;
  }
`;
const ColoredBoxText = styled.div`
  margin-top: 7px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 2.2vh;

  color: ${(props) =>
    props.isActive || props.isHover ? "#FFFFFF" : "#838383"};

  @media (max-width: 1000px) {
    justify-content: space-between;
    font-size: 0.9rem;
  }
  @media (max-width: 560px) {
    justify-content: space-between;
    font-size: 0.8rem;
  }
`;
const BoxHeader = styled.div`
  color: #464646;
  font-size: 1rem;
  font-weight: 700;
`;
const BoxText = styled.div`
  margin-top: 10px;
  color: #838383;
`;

const MoreDetails = () => {
  const [activeDiv, setActiveDiv] = useState(0);
  const [isHover, setIsHover] = useState(5);
  const [animationData, setAnimationData] = useState(roadBlock);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  console.log(isHover);

  return (
    <Component>
      <LeftComponent>
        <MapComponent>
          <Lottie options={defaultOptions} width="100%" height="auto" />
        </MapComponent>
      </LeftComponent>
      <RightComponent>
          <ColoredRightBox
            isActive={activeDiv === 0}
            onClick={() => {
              setActiveDiv(0);
              setAnimationData(roadBlock);
            }}
            isHover={isHover === 0}
            onMouseOver={() => {
              setIsHover(0);
            }}
            onMouseLeave={() => {
              setIsHover(4);
            }}
          >
            <ColoredBoxHeader
              isHover={isHover === 0}
              isActive={activeDiv === 0}
            >
              Abnormal road terrain / potholes not identified by maps/navigation
            </ColoredBoxHeader>
            <ColoredBoxText isHover={isHover === 0} isActive={activeDiv === 0}>
              Mapping of different road terrains and abnormalities like: Off
              Road, Steep Road, potholes etc.
            </ColoredBoxText>
          </ColoredRightBox>
          <ColoredRightBox
            isActive={activeDiv === 1}
            onClick={() => {
              setActiveDiv(1);
              setAnimationData(waterLogging);
            }}
            isHover={isHover === 1}
            onMouseOver={() => {
              setIsHover(1);
            }}
            onMouseLeave={() => {
              setIsHover(4);
            }}
            // onMouseOver={() => {
            //   setActiveDiv(1);
            // }}
          >
            <ColoredBoxHeader
              isHover={isHover === 1}
              isActive={activeDiv === 1}
            >
              Temporary Road Blocks, Barricades, Blockages, Closed Roads during
              Night Time
            </ColoredBoxHeader>
            <ColoredBoxText isActive={activeDiv === 1} isHover={isHover === 1}>
              Real time, Mapping of different Blockages along with time.
            </ColoredBoxText>
          </ColoredRightBox>
          <ColoredRightBox
            isActive={activeDiv === 2}
            onClick={() => {
              setActiveDiv(2);
              setAnimationData(roadObstruction);
            }}
            isHover={isHover === 2}
            onMouseOver={() => {
              setIsHover(2);
            }}
            onMouseLeave={() => {
              setIsHover(4);
            }}
            // onMouseOver={() => {
            //   setActiveDiv(2);
            //   setAnimationData(roadObstruction);
            // }}
          >
            <ColoredBoxHeader
              isActive={activeDiv === 2}
              isHover={isHover === 2}
            >
              Water logging detection
            </ColoredBoxHeader>
            <ColoredBoxText isActive={activeDiv === 2} isHover={isHover === 2}>
              For bringing awareness to driver for taking the better route in
              rainy seasons and avoids heavy logged routes
            </ColoredBoxText>
          </ColoredRightBox>
      </RightComponent>
    </Component>
  );
};

export default MoreDetails;
