import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import styled from "styled-components"; 
import { useInView } from "react-intersection-observer";
import animationData from "./qrcode.json";
const Component = styled.div`
  margin-top: 40px;
  width: 70%;
  min-width: 100ch;
  min-height: 400px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  overflow: hidden;
  /* border-radius: 43px; */
  @media (max-width: 1000px) {
    width: 80%;
    min-height: 200px;
    min-width: 60%;
    justify-content: space-between;
  }
  @media (max-width: 560px) {
    width: 100%;
    min-height: 200px;
    justify-content: space-between;
  }
`;

const LeftComponent = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const PlayLogo = styled.img`
  width: 15vw;
  height: auto;
  @media (max-width: 1000px) {
    /* width: 50px; */
    width: 20vw;
  }
`;
const MapLogo = styled.img`
  width: 28vw;
  height: auto;
  @media (max-width: 1000px) {
    /* width: 150px; */
    width: 32vw;
  }
`;
const RightComponent = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Message = styled.div`
  font-family: "Poppins";
  font-style: normal;
  min-width: 600px;
  font-weight: 700;
  min-width: 50ch;
  min-width: 20ch;
  font-size: 2.5rem;
  color: #3a3a3a;
  text-align: center;
  @media (max-width: 1000px) {
    width: 200px;
    /* font-size: 1rem; */
    font-size: 1.2em;
  }
  /* display: flex; */
`;
const ColoredText = styled.span`
  color: #2979ff;
`;
const QR = styled.div`
  width: 14vw;
  height: auto;
  margin: 20px 0;
  /* background-color: #fff; */
  filter: drop-shadow(0px 8px 22px rgba(0, 0, 0, 0.12))
  drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.2));
  border-radius: 20px;
  @media (max-width: 1000px) {
    width: 20vw;
    margin: 5px 0;
    /* font-size: 2rem; */
  }
`;
const FotterText = styled.div`
  font-weight: 200;
  text-align: center;
  font-size: 2vh;
  @media (max-width: 1000px) {
   font-size: 0.4em;
   min-height:2em;
  }
`;
const DownloadPage = () => {
  const [options, setOptions] = useState({});
  const [ref, inView] = useInView();
  useEffect(() => {
    inView?
    setOptions({
      loop: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }):setOptions({})
  }, [inView]);
  return (
    <Component ref={ref}>
      <LeftComponent>
        <PlayLogo src="/images/playstore.png" />
        <MapLogo src="/images/mapLogo.png" />
      </LeftComponent>
      <RightComponent>
        <Message>
          Ready to <ColoredText>Experience</ColoredText> <br /> Roads in a New
          Way?
        </Message>{" "}
        <QR>
          <Lottie  options={options} width="90%" height="auto" />
        </QR>
        <FotterText>
          Scan with your phone’s camera or QR code app to view
        </FotterText>
      </RightComponent>
    </Component>
  );
};

export default DownloadPage;
