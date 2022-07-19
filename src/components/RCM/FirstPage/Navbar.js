import { Close, Help } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const NavLoad = keyframes`
  
  0% {
    transform: translateY(-25%);
    transform: translateY(-30%);
    opacity: 0;
  }
  /* 50%{
    transform: translateY(-50%);
    opacity: 0.5;
  }
  75%{
    opacity: 0.75;
  } */
  100% {
    transform: translateY(0);
    opacity: 1;
  }

`;
const Component = styled.div`
  width: 90%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: white;
  position: relative;
  animation: ${NavLoad} 900ms ease-in;
  @media (max-width: 1000px) {
    width: 98vw;
    padding: 0 20px;
    height: 90px;
    justify-content: space-between;
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
const Div = styled.div`
  min-width: 200px;
  width: 15%;
  
  display: flex;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Logo = styled.img`
  /* flex: 1; */
  min-width: 180px;
  width: 12vw;
  /* margin-left:20px; */
  cursor: pointer;
  height: auto;

  @media (max-width: 1000px) {
    /* margin-left: 30%; */
    min-width: 120px;
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
  font-family: "Quicksand";
  font-weight: 600;
  text-align: center;
  height: 100%;
  /* margin-right: 10px; */
  font-size: 2.8vh;
  :hover {
    color: #fad65d;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const HiddenMessage = styled.p`
  z-index: 1000000;
  width: 32vw;
  min-width: 50ch;
  position: absolute;
  top: 65%;
  left: 52%;
  min-height: 7vh;

  border-radius: 2vh;
  background-color: #f5f5f5;
  padding: 10px 20px;
  font-size: 2.4vh;
  filter: drop-shadow(16px 24px 8px rgba(0, 0, 0, 0.25));
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
    width: 80%;
    /* position: relative; */
    top: 260px;
    left: 11px;
    margin: 0 auto;
    color: #fad65d;
    background-color: transparent;
    width: 90%;
    filter: none;
    ::before {
      content: "";
      position: absolute;
      visibility: none;
      top: -24px;
      left: 14px;
      border: none;
      border-bottom: none;
    }
  }
`;
const ContactButton = styled.button`
  padding: 0.5vh 1vw;

  /* flex: 1; */
  /* min-width: 100px; */
  /* width: 8vw; */
  /* width:80%; */
  min-height: 6vh;
  border: none;
  outline: none;
  background: #4d4d4d;
  box-shadow: 0px 4px 64px rgba(58, 58, 58, 0.13);
  border-radius: 4px;
  font-size: 2.2vh;
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
  z-index: 10000000;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  min-height: 500px;
  height: 70vh;
  /* right: 0; */
  color: #000;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
  bottom: 30%;
  position: relative;
  /* margin-top: 40%; */
  width: 80%;
  max-height: 30px;
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

        {/* <Div> */}
        <CenterText onClick={() => setIsHover(!isHover)}>
          Road Condition Mapping
        </CenterText>
        {/* </Div> */}
        <HiddenMessage
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          isHover={isHover}
        >
          Road Condition Mapper deticated towards Preventing Accidents and
          Fastering the Commute
        </HiddenMessage>

        <Div>
          <Link to="/contactus">
            <ContactButton>Contact Us</ContactButton>
          </Link>
        </Div>
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
