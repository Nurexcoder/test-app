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
const LandingMain = () => {
  const refScroll = useRef(null)
  useEffect(() => {
    refScroll.current.scrollIntoView()
  }, [])
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
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: bgColor ? bgColor : "transparent",
          borderRadius: bgColor ? "66px 0" : "0",
        }}
      >
        {page}
      </motion.div>
    );
  };
  return (
    <Component>
      <div ref={refScroll}/>
      <Landing />
      <Box page={<Infos />} />
      <Box page={<DownloadPage />} bgColor={"#f9f9fa"} />
    </Component>
  );
};

export default LandingMain;
