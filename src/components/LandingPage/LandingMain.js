import React, { useRef } from "react";

import Landing from "./FirstPage/Landing";
import Infos from "./SecondPage/Infos";
import Download from "./DownloadPage/Download";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import DownloadPage from "./DownloadPage/DownloadPage";
import styled from "styled-components";

const Component = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MotionDiv = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  border-radius: 30px;
  @media (max-width: 1000px) {
    border-radius: 20px;
  }
  @media (max-width: 560px) {
    border-radius: 10px;
  }
`;
const LandingMain = () => {
  const refScroll = useRef(null);
  useEffect(() => {
    refScroll.current.scrollIntoView();
  }, []);
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.61, 1, 0.88, 1] },
    },
    hidden: { opacity: 0.5, scale: 0.7 },
  };

  const Box = ({ page, bgColor }) => {
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
      <MotionDiv
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        {page}
      </MotionDiv>
    );
  };
  return (
    <Component>
      <div ref={refScroll} />
      <Landing />
      <Box page={<Infos />} />
      <Box page={<DownloadPage />} bgColor={"#f9f9fa"} />
    </Component>
  );
};

export default LandingMain;
