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
  width: 13%;
  cursor: pointer;
  height: auto;

  @media (max-width: 1000px) {
    /* margin-left: 30%; */
    width: 150px;
    height: auto;
  }
`;
const CenterText = styled.div`
  cursor: pointer;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const ContactButton = styled.button`
  padding: 10px 15px;

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

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
const HContactButton = styled(ContactButton)`
  display: block;
  position: relative;
  bottom:5%;
  margin-top: 40%;
  width: 80%;
  float:bottom;
`;
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Component>
        <Hidden />
        <Logo src="/images/logo.png" />
        <CenterText>Road Condition Mapping</CenterText>
        <ContactButton>Contact Us</ContactButton>
        <Hamburger onClick={() => setOpen(true)} src="/images/hamburger.png" />
      </Component>
      <Manu open={open}>
        <HamburgerControl>
          <div />
          <Logo src="/images/logoBlack.png" />
          <Close onClick={() => setOpen(!open)} />{" "}
        </HamburgerControl>
        <HCenterText>
          Road Condition Mapping <Help style={{margin:"0 5px"}}/>
        </HCenterText>
        <HContactButton>Contact Us</HContactButton>
      </Manu>
    </>
  );
};

export default Navbar;
