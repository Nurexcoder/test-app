import React from "react";
import Lottie from "react-lottie";
import ReactPlayer from "react-player";
import styled from "styled-components";

import roadBlock from "./RoadBlock.json";
const Component = styled.div`
  width: 80%;
  /* height: 600px; */
  /* background-color: #000; */
  margin: 40px 0;
  border-radius: 10px;
`;
const How = () => {
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
      <ReactPlayer
        url="/video.mp4"
        playing={true}
        controls
        width="100%"
        height="100%"
      />
      
    </Component>
  );
};

export default How;
