import React from "react";

import Landing from "./FirstPage/Landing";
import Infos from "./SecondPage/Infos";
import Download from "./DownloadPage/Download";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const LandingMain = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7,ease: [0.61, 1, 0.88, 1], } },
    hidden: { opacity: 0.5, scale: 0.5 },
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
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        {page}
      </motion.div>
    );
  };
  return (
    <>
      <Landing />
      <Box page={<Infos/>} />
      <Box page={<Download />} />
      
    </>
  );
};

export default LandingMain;
