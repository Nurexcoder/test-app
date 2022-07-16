import * as React from "react";
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
import {Link} from 'react-router-dom'
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const Component = styled.div`
  width: 80%;
  display: flex;
  /* height:80vh; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  @media (max-width: 1000px) {
    width: 98%;
  }
`;
const MapComponent = styled.div`
  margin: 20px 0;

  border-radius: 20px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  width: 90%;

  @media (max-width: 1000px) {
    width: 700px;
    height: 400px;
  }
  @media (max-width: 820px) {
    width: 560px;
    height: 320px;
  }
  @media (max-width: 580px) {
    width: 360px;
    height: 220px;
  }
`;
const Menu = styled.div`
  background-color: transparent !important;
  color: ${(props) => (props.selected ? "#F8BF01" : "#636363 !important")};
`;
const TabItem = styled(Tab)`
  font-size: 2.2vh !important;
  font-weight: 1000 !important;
  font-family: "Inter";
  font-style: normal;
  /* font-weight: 700; */
  text-underline-offset: 9px;
  min-height: 15vh;
  border-width: 100%;
  text-transform: none !important;
  color: ${(props) => props.selectedColor} !important;

  border-bottom: #eeedeb 3px solid !important;
  padding: 0 !important;

  @media (max-width: 1080px) {
    font-size: 1.5vh !important;
    text-decoration: none !important;
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
  min-height:6vh;
  /* overflow-y: scroll !important; */
`;
const Compact = styled.div`
  width: 70%;
`;
const LearnButton = styled(Button)`
  /* text-decoration: underline; */
  margin-top: 15px !important;
  font-size: 2vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "Roboto", sans-serif;
  font-weight: 600 !important;
  text-transform: none !important;
  min-width: 20vw !important;
  @media (max-width: 780px) {
    margin-top: 35px !important;
  }
`;
const Image = styled.img`
  /* color:blue; */
  /* background-color: blue; */
  width: 2vh;
  margin: 2px 5px;
`;
const Underline = styled.div`
  border-bottom: 1px solid #388ab6 !important;
`;
const Indicator = styled.span`
  width: ${(props) =>
    props.value === 0
      ? "17ch"
      : props.value === 1
      ? "11ch"
      : props.value === 2
      ? "19ch"
      : "14ch"};
  height: 3px;
  background-color: ${(props) => props.selectedColor};
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
  const [value, setValue] = React.useState(0);
  const [animationData, setAnimationData] = React.useState(abnormalRoad);
  const [color, setColor] = React.useState("#F8BF01");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setAnimationData(abnormalRoad);
        setColor("#F8BF01");
        break;
      case 1:
        setAnimationData(roadBlock);
        setColor("red");
        break;
      case 2:
        setAnimationData(waterLogging);
        setColor("#388AB6");
        break;
      case 3:
        setAnimationData(accidentDetect);
        setColor("black");
        break;

      default:
        break;
    }
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  console.log(value);
  return (
    <Component>
      <MapComponent>
        <Lottie width="100%" height="auto" options={defaultOptions} />
      </MapComponent>
      <Box sx={{ width: "90%", height: "25vh", marginBottom: "30px" }}>
        {/* <Menu position="static"> */}
        <Tabs
          value={value}
          onChange={handleChange}
          // TabIndicatorProps={{
          //   style: {
          //     background: color,
          //     height: "3px",
          //     width: "13px",
          //   },
          // }}
          TabIndicatorProps={{
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
            },

            children: <Indicator value={value} selectedColor={color} />,
          }}
          // selectionFollowsFocus
          textColor="inherit"
          colorIndicator="none"
          variant="fullWidth"
          // style={{ overflowX: "scroll", }}
          aria-label="wrapped label tabs example"
        >
          <TabItem
            selectedColor={value == 0 ? color : "inherit"}
            label="Abnormal Road Terrain"
            indicatorColor="#000000"
            wrapped
          />
          <TabItem
            label="Road Blocks"
            selectedColor={value == 1 ? color : "inherit"}
            {...a11yProps(1)}
          />
          <TabItem
            label="Water Logging Detection"
            selectedColor={value == 2 ? color : "inherit"}
            wrapped
            {...a11yProps(2)}
          />
          <TabItem
            label="Accident Detection"
            selectedColor={value == 3 ? color : "inherit"}
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
              <br /> Mapping of different road terrains and abnormalities
              <br /> like: Off Road, Steep Road, potholes etc.
            </Compact>
          </TabPanelComponent>

          <TabPanelComponent value={value} index={1} dir={theme.direction}>
            Temporary Road Blocks,Barricades,Blockages,Closed <br />
            Roads during Night Time Real Time, Mapping of <br />
            different Blockages along with time.
          </TabPanelComponent>
          <TabPanelComponent value={value} index={2} dir={theme.direction}>
            For bringing awareness to driver for taking <br />
            the better route in rainy season <br /> and avoid heavy logged
            routes
          </TabPanelComponent>
          <TabPanelComponent value={value} index={3} dir={theme.direction}>
            Roadside Service availability in case of <br />
            Adversities(like tyre-puncture,etc)
          </TabPanelComponent>
        </SwipeableViews>
      </Box>
      <LearnButton>
        <Link to="/rcm">
          <Underline>Learn More RCM</Underline>
          <Image src="images/blueArrow.png" />
        </Link>
      </LearnButton>
    </Component>
  );
}
