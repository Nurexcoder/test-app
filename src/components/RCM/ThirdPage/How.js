import React, { useEffect, useRef } from "react";
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
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <Component>
      <video
        src="/video.mp4"
        ref={vidRef}
        muted
        autoPlay
        loop
        width="100%"
        height="100%"
      />
    </Component>
  );
};

export default How;
