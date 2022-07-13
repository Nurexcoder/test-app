import { Close, Help } from "@mui/icons-material";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const NavLoad = keyframes`
  
  0% {
    transform: translateY(-30%);
    opacity: 0;
  }
  /* 50%{
    transform: translateY(-50%);
    opacity: 0.5;
  }
  75%{
    transform: translateY(-25%);
    opacity: 0.75;
  } */
  100% {
    transform: translateY(0);
    opacity: 1;
  }

`;
const Component = styled.div`
  /* width: 100%; */
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  position: relative;
  animation: ${NavLoad} 900ms ease-in;
  @media (max-width: 1000px) {
    height: 90px;
  }

  /* animation-duration:1000ms;
    animation-delay: 100ms; */
  /* animation:ease-in; */
  /* animation-timing-function: ease-in; */
`;
const Hidden = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;
const Logo = styled.img`
  /* flex: 1; */
  width: 180px;
  cursor: pointer;
  height: auto;

  @media (max-width: 1000px) {
    /* margin-left: 30%; */
    width: 120px;
    height: auto;
  }
`;
const CenterText = styled.div`
  flex: 1;
  cursor: pointer;
  /* width: 250px; */
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  height: 100%;
  margin-right: 10px;
  :hover {
    color: #fad65d;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const HiddenMessage = styled.p`
  z-index: 1000000;
  width: 450px;
  position: absolute;
  top: 50%;
  left: 48%;
  min-height: 55px;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 10px 20px;
  display: ${(props) => (props.isHover ? "block" : "none")};
  color: #696969;
  ::before {
    content: "";
    position: absolute;
    visibility: visible;
    top: -24px;
    left: 14px;
    border: 9px solid transparent;
    border-bottom: 15px solid #f5f5f5;
  }
  @media (max-width: 1000px) {
    width: 63%;
    top: 172px;
    left: 99px;
    background-color: #000;
  }
`;
const ContactButton = styled.button`
  padding: 10px 5px;

  /* flex: 1; */
  width: 180px;
  border: none;
  outline: none;
  background: #000;
  box-shadow: 0px 4px 64px rgba(58, 58, 58, 0.13);
  border-radius: 4px;
  color: #fff;
  &:hover {
    transition: 1s ease;
    background-color: #000;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Hamburger = styled.img`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;
const Manu = styled.div`
  /* display: none; */
  position: absolute;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 100000;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  height: 500px;
  /* right: 0; */
  color: #000;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */

  transition: transform 0.4s ease-in-out;
`;
const HamburgerControl = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* margin-top: 10px; */
  /* padding: 0 10px; */
`;
const HCenterText = styled(CenterText)`
  display: block;
  color: #696969;
  font-size: 1.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
const HContactButton = styled(ContactButton)`
  display: block;
  bottom: 5%;
  position: relative;
  margin-top: 40%;
  width: 80%;
  float: bottom;
`;
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  // console.log(isHover);
  return (
    <>
      <Component>
        <Hidden />
        <Logo src="/images/logo.png" />
        <CenterText
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          Road Condition Mapping
        </CenterText>
        <HiddenMessage
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          isHover={isHover}
        >
          Road Condition Mapper deticated towards Preventing Accidents and
          Fastering the Commute
        </HiddenMessage>
        <ContactButton>Contact Us</ContactButton>
        <Hamburger onClick={() => setOpen(true)} src="/images/hamburger.png" />
      </Component>
      <Manu open={open}>
        <HamburgerControl>
          <div />
          <Logo src="/images/logoBlack.png" />
          <Close onClick={() => setOpen(!open)} />{" "}
        </HamburgerControl>
        <HCenterText onClick={() => setIsHover(!isHover)}>
          Road Condition Mapping <Help style={{ margin: "0 5px" }} />
        </HCenterText>
        <HContactButton>Contact Us</HContactButton>
      </Manu>
    </>
  );
};

export default Navbar;
