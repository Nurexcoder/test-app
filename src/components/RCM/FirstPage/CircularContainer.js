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
  
  margin: 38px 0;
  width: 800px;
  height: 440px;

  align-items: center;
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
  top: ${(props) => (props.inView ? "0" : "-5%")};
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
  top: ${(props) => (props.inView ? "34%" : "34%")};
  left: ${(props) => (props.inView ? "20%" : "5%")};
  transition: 1s ease-in-out;

  @media (max-width: 860px) {
    width: 180px;
    height: 180px;
    /* top: 35%;
    left: 10%; */
    top: ${(props) => (props.inView ? "35%" : "35%")};
    left: ${(props) => (props.inView ? "12%" : "0%")};
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
  /* top: 40%;
  right: 20%; */
  top: ${(props) => (props.inView ? "34%" : "34%")};
  right: ${(props) => (props.inView ? "24%" : "10%")};
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
  right: 15%;
  text-align: center;
  @media (max-width: 860px) {
    font-size: 0.8rem;
    /* top: 40%;
    right: 7%; */
  }
  @media (max-width: 560px) {
    font-size: 0.6rem;
    /* top: 40%;
    right: 7%; */
  }
`;
const CircleText2 = styled(CircleText)`
  position: absolute;
  text-align: justify;
  top: 42%;
  left:7%;
  @media (max-width: 860px) {
    font-size: 0.8rem;
    top: 40%;
    left: 6%;
  }
  @media (max-width: 560px) {
    font-size: 0.6rem;
    left: 6%;
    /* top: 40%;
    right: 7%; */
  }
  z-index: 1;
`;
const CircleText3 = styled(CircleText)`
  position: absolute;
  top: 35%;
  right: 3%;
  text-align: justify;
  @media (max-width: 860px) {
    font-size: 0.8rem;
    top: 40%;
    right: 7%;
  }
  @media (max-width: 560px) {
    font-size: 0.6rem;
    /* top: 40%;
    right: 7%; */
  }
`;
const CircleText4 = styled(CircleText)`
  font-weight: 700;
  top: 51%;
  right: 49%;
  transition: 1s ease-in-out;
  opacity: ${(props) => (props.inView ? "1" : "0")};
  color:#023047;
  transition-delay: 0.7s;
  @media (max-width: 860px) {
    font-size: 0.8rem;
    top: 51%;
    right: 44%;
  }
  @media (max-width: 560px) {
    font-size: 0.6rem;
    /* top: 40%;
    right: 7%; */
  }
`;
const ViewDiv = styled.div``;

const CircularContainer = () => {
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.61, 1, 0.88, 1] },
    },
    hidden: { opacity: 0.9, scale: 1 },
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
  console.log(inView);
  return (
    <motion.div
      className="box"
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
        <Circle2 ref={ref} inView={inView}>
          <CircleText2 align="left">Road Blockage</CircleText2>
        </Circle2>
        <Circle3 inView={inView}>
          <CircleText3>
            Water Logging <br /> and Bad Weather <br /> Conditions
          </CircleText3>
        </Circle3>
        <CircleText4 inView={inView}>RCM</CircleText4>
        {/* <ViewDiv ref=/> */}
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
