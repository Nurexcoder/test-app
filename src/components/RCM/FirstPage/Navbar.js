import React from "react";
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
    animation: ${NavLoad} 900ms ease-in;
    /* animation-duration:1000ms;
    animation-delay: 100ms; */
    /* animation:ease-in; */
    /* animation-timing-function: ease-in; */
    
`;
const Logo = styled.img`
    width: 13%;
    height: auto;
`;
const CenterText = styled.div``;
const ContactButton = styled.button`
    padding: 10px 15px;

    border: none;
    outline: none;
    background: #4d4d4d;
    box-shadow: 0px 4px 64px rgba(58, 58, 58, 0.13);
    border-radius: 4px;
    color: #fff;
`;

const Navbar = () => {
    return (
        <Component>
            <Logo src='/images/logo.png' />
            <CenterText>Road Condition Mapping</CenterText>
            <ContactButton>Contact Us</ContactButton>
        </Component>
    );
};

export default Navbar;
