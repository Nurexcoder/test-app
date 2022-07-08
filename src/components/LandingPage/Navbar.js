import React from "react";
import styled from "styled-components";

const Component = styled.div`
    /* width: 100%; */
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;
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
