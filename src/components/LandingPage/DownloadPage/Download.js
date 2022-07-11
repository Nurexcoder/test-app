import React from "react";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* width: 100%; */
  height: 60vh;
  margin: 20px 0;
  padding: 0 200px;
`;
const LeftSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Image = styled.img`
  height: 60vh;
  width: auto;
`;
const RightSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Header = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #3a3a3a;
`;
const Message = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  color: #818181;
`;
const ShareLinkComponent = styled.div`
  display: flex;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const ShareLinkMail = styled.input`
  height: 1.5rem;
  width: 65%;
  padding: 5px 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  :placeholder-shown {
    color: #929292cc;
    font-weight: 400;
  }
`;
const ShareLinkButton = styled.button`
  /* height: 1.5rem; */
  width: 30%;
  padding: 5px px;
  background-color: #023047;
  border: none;
  outline: none;
  color: white;
  font-weight: 500;
  background: #023047;
  /* border: 3px solid #023047; */
  box-shadow: 0px 4px 58px rgba(2, 48, 71, 0.16);
  border-radius: 4px;
`;
const PlayStore = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: flex-start;
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
        <Header>
          Download the app from Play Store & <br /> Experience the Novae Avenue
        </Header>
        <Message>
          We will send you a link, open it on your phone to download <br /> the
          app
        </Message>
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
