import React from "react";
import Lottie from "react-lottie";
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
      <video  width="100%" autoplay controls >
        <source src="/video.mp4"/>

      </video>
      {/* <Lottie options={defaultOptions} width="90%" height="auto" /> */}
    </Component>
  );
};

export default How;
