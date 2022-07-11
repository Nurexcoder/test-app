import React from "react";
import styled from "styled-components";
import Body from "./Body";
import Navbar from "./Navbar";

const Component = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #367b9d;
    position: relative;
    /* clip-path: polygon(100% 100%, 100% 100%, 100% 100%); */
`;

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 48vw solid transparent;
    border-right: 48vw solid transparent;
    border-bottom: 30vh solid #fff;
    position: absolute;
    bottom: 0;
`;

const Landing = () => {
    return (
        <Component>
            <Navbar/>
            <Body/>
            <Triangle />
        </Component>
    );
};

export default Landing;
