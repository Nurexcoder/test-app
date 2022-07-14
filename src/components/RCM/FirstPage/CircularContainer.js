import React from "react";
import styled, { keyframes } from "styled-components";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const bodyLoad = keyframes`
  
  0% {
    opacity: 0.5;
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
  /* width: 800px; */
  opacity: 1;
  /* height: 440px; */
    /* position:absolute;  */
  }

`;
const CircleContainer = styled.div`
  /* display: ; */
  /* display: ${(props) => (props.inView ? "block" : "hidden")}; */
  /* width: ${(props) => (props.inView ? "800px" : "1500px")};
  height: ${(props) => (props.inView ? "440px" : "600px")}; */
  /* transition: 30s ease-in-out; */
  margin: 28px 0;
  width: 800px;
  height: 440px;

  align-items: center;
  /* animation: ${bodyLoad} 10000ms ease-in; */
  position: relative;
  @media (max-width: 860px) {
    width: 360px;
    height: 300px;
  }
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
  top: ${(props) => (props.inView ? "0" : "0")};
  left: ${(props) => (props.inView ? "30%" : "30%")};
  transition: 1s ease-in-out;
  /* top: 0;
  left: 30%; */
  @media (max-width: 860px) {
    width: 180px;
    height: 180px;
    top: ${(props) => (props.inView ? "0" : "0")};
    left: ${(props) => (props.inView ? "30%" : "30%")};
  }
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
  /* top: 40%;
  left: 20%; */
  top: ${(props) => (props.inView ? "40%" : "40%")};
  left: ${(props) => (props.inView ? "20%" : "5%")};
  transition: 1s ease-in-out;
  
  @media (max-width: 860px) {
    width: 180px;
    height: 180px;
    /* top: 35%;
    left: 10%; */
    top: ${(props) => (props.inView ? "35%" : "35%")};
    left: ${(props) => (props.inView ? "10%" : "0%")};
  }
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
  top: 40%;
  right: 20%;
  top: ${(props) => (props.inView ? "40%" : "40%")};
  right: ${(props) => (props.inView ? "22%" : "10%")};
  transition: 1s ease-in-out;
  @media (max-width: 860px) {
    width: 180px;
    height: 180px;
    top: 35%;
    right: 10%;
    top: ${(props) => (props.inView ? "35%" : "35%")};
    right: ${(props) => (props.inView ? "6%" : "0%")};
  }
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
  text-align: center;
  @media (max-width: 860px) {
    font-size: 0.8rem;
    /* top: 40%;
    right: 7%; */
  }
`;
const CircleText2 = styled(CircleText)`
  position: absolute;
  top: 40%;
  @media (max-width: 860px) {
    font-size: 0.8rem;
    top: 40%;
    left: 0%;
  }
  z-index: 1;
  left: 10%;
`;
const CircleText3 = styled(CircleText)`
  position: absolute;
  top: 30%;
  right: 15%;
  @media (max-width: 860px) {
    font-size: 0.8rem;
    top: 40%;
    right: 7%;
  }
`;

const CircularContainer = () => {
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.61, 1, 0.88, 1] },
    },
    hidden: { opacity: 0.5, scale: 0.8 },
  };

  // const Box = ({ page }) => {
  //   const control = useAnimation();
  //   const [ref, inView] = useInView();
  const control = useAnimation();
  const [ref, inView, entry] = useInView();
  // console.log(entry);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <CircleContainer inView={inView}>
        <Circle inView={inView}>
          <CircleText>
            Potholes and Bad <br /> Road Infrastructure
          </CircleText>
        </Circle>
        <Circle2 inView={inView}>
          <CircleText2 align="left">Road Blockage</CircleText2>
        </Circle2>
        <Circle3 ref={ref} inView={inView}>
          <CircleText3>
            Water Logging <br /> and Bad Weather <br /> Conditions
          </CircleText3>
        </Circle3>
      </CircleContainer>
    </motion.div>
  );
  // };
  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);
  // console.log(inView)
};

export default CircularContainer;
