import React from "react";
import styled from "styled-components";

const Component = styled.div``;
const Header = styled.div``;
const LeftNavComponent = styled.div``;
const RightNavComponent = styled.div``;
const LeftArrowIcon = styled.img``;
const Logo = styled.img``;
const LeftComponent = styled.div``;
const ContactUsText = styled.h1``;
const Message = styled.p``;
const NameComponent = styled.div``;
const RefreshRateComponent = styled.div``;
const RateMessage = styled.h4``;
const RateFrequence = styled.div``;
const ReligionComponent = styled.div``;
const ReligionHeader = styled.h5``;

const NumberComponent = styled.div``;
const MessageComponent = styled.h6``;
const DescribeComponent = styled.div``;
const DescribeHeader = styled.h5``;
const Button = styled.button``;

const RightComponent = styled.div``;
const RHeaders = styled.h4``;
const RMessage = styled.p``;
const ContactUs = () => {
  return (
    <Component>
      <Header>
        <LeftNavComponent>
          <LeftArrowIcon src="/images/leftArrow.png" />
        </LeftNavComponent>
        <RightNavComponent>
          <Logo src="/images/logoBlack.png" />
        </RightNavComponent>
        
      </Header>

    </Component>
  );
};

export default ContactUs;
