import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import abnormalRoad from "./abnormalRoad.json";
import accidentDetect from "./accidentDetection.json";
import roadBlock from "./roadBlock.json";
import waterLogging from "./waterLogging.json";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CarCrash, Label, PlusOne } from "@mui/icons-material";
import calculateTextWidth from "calculate-text-width";
import { useInView } from "react-intersection-observer";
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const Component = styled.div`
  width: 60%;
  display: flex;
  /* height:80vh; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  @media (max-width: 1000px) {
    width: 98%;
    margin: 10px 0;
  }
`;
const MapComponent = styled.div`
  margin: 20px 0;

  border-radius: 20px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 1000px) {
    width: 700px;
    height: 400px;
    margin: 0 0;
  }
  @media (max-width: 820px) {
    width: 80%;
    height: auto;
  }
  @media (max-width: 580px) {
    width: 360px;
    width: 95%;
    height: auto;
  }
`;
const Menu = styled.div`
  background-color: transparent !important;
  color: ${(props) => (props.selected ? "#F8BF01" : "#636363 !important")};
`;
const TabBox = styled(Box)`
  width: 100%;
  max-height: 25vh;
  margin: 15px 0;
  @media (max-width: 1000px) {
    margin: 15px;
    height: auto;
  }
`;
const TabItem = styled(Tab)`
  font-size: 2.2vh !important;
  font-weight: 1000 !important;
  font-family: "Inter";
  font-style: normal;
  /* font-weight: 700; */
  text-underline-offset: 9px;
  min-height: 15vh;
  /* min-width:100px !important; */
  border-width: 100%;
  text-transform: none !important;
  color: ${(props) => props.selectedColor} !important;

  border-bottom: #eeedeb 3px solid !important;
  padding: 0 !important;
  min-width: ${(props) => props.tabWidthBg + "px"} !important;

  @media (max-width: 1080px) {
    font-size: 0.82rem !important;
    text-decoration: none !important;
    min-width: ${(props) => props.tabWidth + "px"} !important;
    /* margin: 0 5px !important; */
    /* border-bottom: ${(props) => props.selectedColor} 1px solid !important; */
  }
`;
const TabPanelComponent = styled.p`
  font-family: "Inter" !important;
  font-style: normal;
  font-weight: 500;
  font-size: 2.2vh !important;
  line-height: 2.9vh;
  color: #929292;
  width: 100%;
  text-align: center;
  display: flex !important;
  align-items: center;
  justify-content: center !important;
  min-height: 6vh;
  @media (max-width: 1080px) {
    font-size: 0.8rem !important;
    line-height: 1rem;
    width: 100%;
    margin:5px 0;
    /* text-decoration: none !important; */
    /* border-bottom: ${(props) => props.selectedColor} 1px solid !important; */
  }
  /* overflow-y: scroll !important; */
`;
const Compact = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const LearnButton = styled(Button)`
  /* text-decoration: underline; */
  margin-top: 10px !important;
  font-size: 2vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "Roboto", sans-serif;
  font-weight: 600 !important;
  text-transform: none !important;
  min-width: 20vw !important;

  @media (max-width: 1000px) {
    margin-top: 5px !important;
    font-size: 0.8rem !important;
  }
`;
const Image = styled.img`
  /* color:blue; */
  /* background-color: blue; */
  width: 2vh;
  margin: 2px 5px;
  @media (max-width: 1000px) {
    /* margin-top: 10px !important; */
    width: 0.6rem !important;
    margin: 0 5px;
  }
`;
const Underline = styled.div`
  border-bottom: 1px solid #388ab6 !important;
`;
const Indicator = styled.span`
  width: ${(props) =>
    props.value === 0
      ? `${props.indicatorWidth + "px"}`
      : props.value === 1
      ? `${props.indicatorWidth + "px"}`
      : props.value === 2
      ? `${props.indicatorWidth + "px"}`
      : `${props.indicatorWidth + "px"}`};
  height: 3px;
  background-color: ${(props) => props.selectedColor};
`;
const LabelTab = styled.div`
  text-decoration: 3px solid underline;
  text-underline-offset: 10px;
`;
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{
        width: "100% !important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabsComponent() {
  const theme = useTheme();
  const [value, setValue] = React.useState(2);
  const [animationData, setAnimationData] = React.useState(abnormalRoad);
  const [color, setColor] = React.useState("#F8BF01");
  const [indicatorWidth, setIndicatorWidth] = useState();
  const [ref, inView] = useInView();
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  console.log(windowDimenion)
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  const tabWidth1 = calculateTextWidth(
    "Abnormal Road Terrain",
    "normal 1000 0.9rem Inter"
  );
  const tabWidthBg1 = calculateTextWidth(
    "Abnormal Road Terrain",
    "normal 1000 2.2vh Inter"
  );
  const tabWidth2 = calculateTextWidth(
    "Road Blocks",
    "normal 1000 0.9rem Inter"
  );
  const tabWidthBg2 = calculateTextWidth(
    "Road Blocks",
    "normal 1000 2.2vh Inter"
  );
  const tabWidth3 = calculateTextWidth(
    "Water Logging Detection",
    "normal 1000 0.9rem Inter"
  );
  const tabWidthBg3 = calculateTextWidth(
    "Water Logging Detection",
    "normal 1000 2.2vh Inter"
  );
  const tabWidth4 = calculateTextWidth(
    "Accident Detection",
    "normal 1000 0.9rem Inter"
  );
  const tabWidthBg4 = calculateTextWidth(
    "Accident Detection",
    "normal 1000 2.2vh Inter"
  );
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setAnimationData(abnormalRoad);
        setColor("#F8BF01");
        setIndicatorWidth(
          calculateTextWidth("Abnormal Road Terrain", "normal 1000 2.2vh Inter")
        );
        break;
      case 1:
        setAnimationData(roadBlock);
        setColor("red");
        setIndicatorWidth(
          calculateTextWidth("Road Blocks", "normal 1000 2.2vh Inter")
        );

        break;
      case 2:
        setAnimationData(waterLogging);
        setColor("#388AB6");
        setIndicatorWidth(
          calculateTextWidth(
            "Water Logging Detection",
            "normal 1000 2.2vh Inter"
          )
        );
        break;
      case 3:
        setAnimationData(accidentDetect);
        setColor("black");
        setIndicatorWidth(
          calculateTextWidth("Accident Detection", "normal 1000 2.2vh Inter")
        );
        break;

      default:
        break;
    }
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  console.log(value);
  useEffect(() => {
    inView &&
      setTimeout(function () {
        setValue(0);
        setColor("#F8BF01");
      }, 400);

    setIndicatorWidth(
      calculateTextWidth("Abnormal Road Terrain", "normal 1000 2.2vh Inter")
    );
  }, [inView]);

  // console.log(indicatorWidth);
  return (
    <Component ref={ref}>
      <MapComponent>
        <Lottie width="100%" height="auto" options={defaultOptions} />
      </MapComponent>
      <TabBox sx={{}}>
        {/* <Menu position="static"> */}
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ width: "100% !important", overflowY: "hidden !important" }}
          // TabIndicatorProps={{
          //   style: {
          //     background: color,
          //     height: "3px",
          //     width: "13px",
          //   },
          // }}
          // scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            },

            children: (
              <Indicator
                indicatorWidth={indicatorWidth}
                value={value}
                selectedColor={color}
              />
            ),
          }}
          // selectionFollowsFocus
          textColor="inherit"
          colorIndicator="none"
          variant={windowDimenion.winWidth>750?"fullWidth":"scrollable"}
          // variant="scrollable"
          scrollButtons="auto"
          TabScrollButtonProps={{
            sx: {
              width: "10px",
            }
          }}
          // allowScrollButtonsMobile

          // style={{ overflowX: "scroll", }}
        >
          <TabItem
            selectedColor={value == 0 ? color : "inherit"}
            label="Abnormal Road Terrain"
            indicatorColor="#000000"
            wrapped
            tabWidth={tabWidth1 + 8}
            tabWidthBg={tabWidthBg1 + 8}
          />
          <TabItem
            label="Road Blocks"
            selectedColor={value == 1 ? color : "inherit"}
            tabWidth={tabWidth2 + 20}
            tabWidthBg={tabWidthBg2 + 8}
            {...a11yProps(1)}
          />
          <TabItem
            label="Water Logging Detection"
            selectedColor={value == 2 ? color : "inherit"}
            tabWidth={tabWidth3 + 8}
            tabWidthBg={tabWidthBg3 + 8}
            wrapped
            {...a11yProps(2)}
          />
          <TabItem
            label="Accident Detection"
            selectedColor={value == 3 ? color : "inherit"}
            tabWidth={tabWidth4}
            tabWidthBg={tabWidthBg4 + 8}
            {...a11yProps(3)}
          />
        </Tabs>
        {/* </Menu> */}
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanelComponent value={value} index={0} dir={theme.direction}>
            <Compact>
              Abnormal road terrain / potholes not identified by maps/navigation
              like: Off Road, Steep Road, potholes etc.
            </Compact>
          </TabPanelComponent>

          <TabPanelComponent value={value} index={1} dir={theme.direction}>
            <Compact>
              Temporary Road Blocks,Barricades,Blockages,Closed Roads during
              Night Time Real Time, Mapping of different Blockages along with
              time.
            </Compact>
          </TabPanelComponent>
          <TabPanelComponent value={value} index={2} dir={theme.direction}>
            <Compact>
              For bringing awareness to driver for taking the better route in
              rainy season and avoid heavy logged routes
            </Compact>
          </TabPanelComponent>
          <TabPanelComponent value={value} index={3} dir={theme.direction}>
            <Compact>
              Roadside Service availability in case of Adversities(like
              tyre-puncture,etc)
            </Compact>
          </TabPanelComponent>
        </SwipeableViews>
      
      {/* </Box> */}
      {/* <Link to="/rcm"> */}
      </TabBox>
      {/* // <Link to="/rcm"> */}
        <LearnButton>
          <Underline>Learn More RCM</Underline>
          <Image src="images/blueArrow.png" />
        </LearnButton>
      {/* </Link> */}
    </Component>
  );
}
