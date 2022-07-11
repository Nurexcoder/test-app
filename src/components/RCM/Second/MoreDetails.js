import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import roadBlock from './RoadBlock.json'
const Component = styled.div`
  width: 90%;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
const LeftComponent = styled.div`
  /* flex: 3;? */
  width: 70%;
  height: 100%;
`;
const MapComponent = styled.div`
  width: 100%;
  height: 100%;
`;
const RightComponent = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: space-between;
`;
const ColouredRightBox = styled.div`
  width: 100%;
  height: 32%;
  background-color: #023047;
  padding: 10px 15px;
  /* box-shadow: 0px 4px 44px rgba(54, 123, 157, 0.25); */
  border-radius: 8px;
`;
const RightBox = styled(ColouredRightBox)`
  background-color: #f5f5f5; 
`;

const ColoredBoxHeader = styled.div`
  color: #fad65d;
  font-size: 1rem;
  font-weight: 700;
`;
const ColoredBoxText = styled.div`
  margin-top: 10px;
  color: #ffffff;
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: roadBlock,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Component>
      <LeftComponent>
        <MapComponent>
          <Lottie options={defaultOptions} width="100%" height="|" />
        </MapComponent>
      </LeftComponent>
      <RightComponent>
        <ColouredRightBox>
          <ColoredBoxHeader>
            Abnormal road terrain / <br /> potholes not identified by <br />{" "}
            maps/navigation
          </ColoredBoxHeader>
          <ColoredBoxText>
            Mapping of different road terrains <br /> and abnormalities like:
            Off Road,
            <br />
            Steep Road, potholes etc.
          </ColoredBoxText>
        </ColouredRightBox>
        <RightBox>
          <BoxHeader>
            Temporary Road Blocks,<br/> Barricades, Blockages,<br/> Closed Roads during
            Night<br/> Time
          </BoxHeader>
          <BoxText>
            Real time, Mapping of different Blockages along with time.
          </BoxText>
        </RightBox>
        <RightBox>
          <BoxHeader>Water logging detection</BoxHeader>
          <BoxText>
            For bringing awareness to driver for <br/> taking the better route in
            rainy<br/> seasons and avoids heavy logged<br/> routes
          </BoxText>
        </RightBox>
      </RightComponent>
    </Component>
  );
};

export default MoreDetails;
