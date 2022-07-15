import React from "react";
import styled from "styled-components";
import Body from "./FirstPage/Body";
import Landing from "./FirstPage/Main";
import Navbar from "./FirstPage/Navbar";
import FourthMain from "./FourthPage/FourthMain";
import SecondMain from "./Second/Main";
import ThirdMain from "./ThirdPage/Main";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RCMMain = () => {
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.61, 1, 0.88, 1] },
      transform: "translateX(0)",
      y: "0",
    },
    hidden: { opacity: 0,y:"15%", scale:0.9 },
  };

  const Box = ({ page }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

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
        variants={boxVariant}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        {page}
      </motion.div>
    );
  };
  return (
    <Component>
      <Landing />
      <Box page={<SecondMain />} />
      <Box page={<ThirdMain />} />
      <Box page={<FourthMain />} />
    </Component>
  );
};

export default RCMMain;
