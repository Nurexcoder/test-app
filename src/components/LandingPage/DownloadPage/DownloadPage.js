import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "./qrcode.json";
const Component = styled.div`
  margin-top: 40px;
  width: 70%;
  min-width: 125ch;
  min-height: 400px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  overflow: hidden;
  border-radius: 43px;
  @media (max-width: 1000px) {
    width: 60%;
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
    width: 15vw;
  }
`;
const MapLogo = styled.img`
  width: 28vw;
  height: auto;
  @media (max-width: 1000px) {
    /* width: 150px; */
    width: 28vw;
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
  width: 40vw;
  min-width:20ch;
  font-size: 6vh;
  color: #3a3a3a;
  text-align: center;
  @media (max-width: 1000px) {
    width: 200px;
    /* font-size: 1rem; */
    font-size: 2vh;
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
    font-size: 1rem;
  }
`;
const FotterText = styled.span`
  font-weight: 200;
  text-align: center;
  font-size: 0.6rem;
`;
const DownloadPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Component>
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
          <Lottie options={defaultOptions} width="90%" height="auto" />
        </QR>
        <FotterText>
          Scan with your phone’s camera or QR code app to view
        </FotterText>
      </RightComponent>
    </Component>
  );
};

export default DownloadPage;
