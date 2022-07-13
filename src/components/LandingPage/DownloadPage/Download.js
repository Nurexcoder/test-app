import React from "react";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 370px;

  @media (max-width: 880px) {
    margin: 20px 0;
    padding: 0 10px;
    height: auto;
    width: 100%;
  }
`;
const LeftSection = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 880px) {
    display: none;
  }
`;
const Image = styled.img`
  height: 60vh;
  width: auto;
  @media (max-width: 880px) {
    display: none;
  }
`;
const RightSection = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  @media (max-width: 880px) {
    width: 80%;
    /* display:flex; */
    margin-top: 20px;

    justify-content: center;
    align-items: center;
  }
`;
const Header = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #3a3a3a;
  text-align: center;
  @media (max-width: 880px) {
    font-size: 1.4rem;
  }
`;
const Message = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  color: #818181;
  @media (max-width: 880px) {
    text-align: center;
    font-size: 1.6rem;
  }
`;
const ShareLinkComponent = styled.div`
  display: flex;
  width: 70%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 880px) {
    justify-content: center;
    width: 100%;
  }
`;
const ShareLinkMail = styled.input`
  height: 1.5rem;
  width: 65%;
  border-radius: 5px;
  padding: 5px 5px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  :placeholder-shown {
    color: #929292cc;
    font-weight: 400;
  }
  @media (max-width: 880px) {
    margin: 0 5px;
    width: 50%;
    justify-content: space-evenly;
    padding: 5px 5px;
  }
`;
const ShareLinkButton = styled.button`
  /* height: 1.5rem; */
  width: 30%;
  padding: 5px 4px;
  background-color: #023047;
  border: none;
  outline: none;
  color: white;
  font-weight: 500;
  background: #023047;
  /* border: 3px solid #023047; */
  box-shadow: 0px 4px 58px rgba(2, 48, 71, 0.16);
  border-radius: 4px;
  @media (max-width: 880px) {
    margin-right: 0px;
    margin: 0 5px;
  }
`;
const PlayStore = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 880px) {
    align-items: center;
    justify-content: flex-start;
    /* font-size: 2.2rem; */
  }
`;
const PlayStoreMessage = styled.div`
  color: #818181;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
`;
const PlayStoreImage = styled.img`
  padding: 0;
  margin-top: 10px;
`;
const Download = () => {
  return (
    <Component>
      <LeftSection>
        <Image src="/images/phone.png" />
      </LeftSection>
      <RightSection>
        <div>
          <Header>
            Download the app from Play Store & Experience the Novae Avenue
          </Header>
          <Message>
            We will send you a link, open it on your phone to download the app
          </Message>
        </div>
        <ShareLinkComponent>
          <ShareLinkMail placeholder="Enter your email address" />
          <ShareLinkButton>Share App Link</ShareLinkButton>
        </ShareLinkComponent>
        <PlayStore>
          <PlayStoreMessage>Download app from</PlayStoreMessage>
          <a href="#">
            <PlayStoreImage src="/images/playstore.png" />
          </a>
        </PlayStore>
      </RightSection>
    </Component>
  );
};

export default Download;
