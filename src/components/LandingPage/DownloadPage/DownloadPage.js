import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "./qrcode.json";
const Component = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LeftComponent = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const PlayLogo = styled.img`
  width: 200px;
  height: auto;
`;
const MapLogo = styled.img`
  width: 350px;
  height: auto;
`;
const RightComponent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Message = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
`;
const ColoredText = styled.div``;
const QR = styled.div`
  width: 200px;
  height: auto;
`;
const FotterText = styled.span``;
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
          Ready to <ColoredText>Experience</ColoredText> Roads in a New Way?
        </Message>{" "}
        <QR>
          <Lottie options={defaultOptions} width="90%" height="90%" />
        </QR>
        <FotterText>
          Scan with your phone’s camera or QR code app to view
        </FotterText>
      </RightComponent>
    </Component>
  );
};

export default DownloadPage;
