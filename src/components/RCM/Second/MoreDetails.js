import { useState } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import roadBlock from "./RoadBlock.json";
import roadObstruction from "./RoadObstruction.json";
import waterLogging from "./WaterLogging.json";
const Component = styled.div`
  width: 80%;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: ; */
  margin-top: 50px;

  @media (max-width: 1000px) {
    height: 45vh;
    flex-direction: column;
  }
`;
const LeftComponent = styled.div`
  /* flex: 3;? */
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1000px) {
    height: 60%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const MapComponent = styled.div`
  height: auto;
  width: 70%;
  /* background:#000; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1000px) {
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const RightComponent = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: row;
    width: 100%;
  }
`;
const ColoredRightBox = styled.div`
  width: 80%;
  height: 29%;
  margin: 0 0;
  background-color: ${(props) => (props.isActive ? "#023047" : "#f5f5f5")};
  padding: 10px 16px;
  border: ${(props) => (props.isActive ? "none" : " 2px solid #367b9d")};
  /* box-shadow: 0px 4px 44px rgba(54, 123, 157, 0.25); */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 8px;
  transition: 1s ease;

  @media (max-width: 1000px) {
    height: 30%;
    width: 25%;
    padding: 10px 6px;
    /* justify-content: space-between; */
  }

  /* letter-spacing:1px; */
`;
const RightBox = styled(ColoredRightBox)`
  /* background-color: ; */
`;

const ColoredBoxHeader = styled.div`
  color: ${(props) => (props.isActive ? "#FAD65D" : "#464646")};
  font-size: 1rem;
  font-weight: 700;
  margin-top: 7px;
  font-family: "Inter";
  @media (max-width: 1000px) {
    /* justify-content: space-between; */
    font-size: 0.6rem;
  }
  @media (max-width: 560px) {
    /* justify-content: space-between; */
    font-size: 0.4rem;
  }
`;
const ColoredBoxText = styled.div`
  margin-top: 7px;
  font-family: "Montserrat";
  font-weight: 500;
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#838383")};
  @media (max-width: 1000px) {
    justify-content: space-between;
    font-size: 0.6rem;
  }
  @media (max-width: 560px) {
    justify-content: space-between;
    font-size: 0.4rem;
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
  const [animationData, setAnimationData] = useState(roadBlock);

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
      <LeftComponent>
        <MapComponent>
          <Lottie options={defaultOptions} width="auto" height="100%" />
        </MapComponent>
      </LeftComponent>
      <RightComponent>
        <ColoredRightBox
          isActive={activeDiv === 0}
          onClick={() => setActiveDiv(0)}
          onMouseOver={() => {
            setActiveDiv(0);
            setAnimationData(roadBlock);
          }}
        >
          <ColoredBoxHeader isActive={activeDiv === 0}>
            Abnormal road terrain / <br /> potholes not identified by <br />{" "}
            maps/navigation
          </ColoredBoxHeader>
          <ColoredBoxText isActive={activeDiv === 0}>
            Mapping of different road terrains <br /> and abnormalities like:
            Off Road,
            <br />
            Steep Road, potholes etc.
          </ColoredBoxText>
        </ColoredRightBox>
        <ColoredRightBox
          isActive={activeDiv === 1}
          onClick={() => setActiveDiv(1)}
          onMouseOver={() => {
            setActiveDiv(1);
            setAnimationData(waterLogging);
          }}
        >
          <ColoredBoxHeader isActive={activeDiv === 1}>
            Temporary Road Blocks,
            <br /> Barricades, Blockages,
            <br /> Closed Roads during Night
            <br /> Time
          </ColoredBoxHeader>
          <ColoredBoxText isActive={activeDiv === 1}>
            Real time, Mapping of different Blockages along with time.
          </ColoredBoxText>
        </ColoredRightBox>
        <ColoredRightBox
          isActive={activeDiv === 2}
          onClick={() => setActiveDiv(2)}
          onMouseOver={() => {
            setActiveDiv(2);
            setAnimationData(roadObstruction);
          }}
        >
          <ColoredBoxHeader isActive={activeDiv === 2}>
            Water logging detection
          </ColoredBoxHeader>
          <ColoredBoxText isActive={activeDiv === 2}>
            For bringing awareness to driver for <br /> taking the better route
            in rainy
            <br /> seasons and avoids heavy logged
            <br /> routes
          </ColoredBoxText>
        </ColoredRightBox>
      </RightComponent>
    </Component>
  );
};

export default MoreDetails;
