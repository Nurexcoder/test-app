import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import points from "./Points.json";

const Component = styled.div`
  margin-top: 200px;
  width: 70%;
  display:flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #F3F3F3;

  @media (max-width: 1000px) {
   margin-top: 10px;
  }
  /* filter: drop-shadow(0px 4px 56px rgba(58, 58, 58, 0.15)); */

  border-radius: 16px;
`;
const Points = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: points,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Component>
      <Lottie options={defaultOptions} height="auto" width="96%" />
    </Component>
  );
};

export default Points;
