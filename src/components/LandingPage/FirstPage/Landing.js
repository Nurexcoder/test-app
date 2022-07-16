import React from "react";
import styled from "styled-components";
import Body from "./Body";
import Navbar from "./Navbar";

const Component = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100vh;
  margin-bottom: 30px;
  /* max-height:1000px; */
  /* min-height:300px; */
  background-color: #367b9d;
  position: relative;
  min-height: 500px;
  /* overflow-y: scroll; */
  border-bottom: transparent;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    height: 80vh;
    justify-content: space-between;
    /* height: auto; */
    background: linear-gradient(to bottom, #367b9d 80%, #fff 20%);
  }
  @media (max-width: 560px) {
    height: 50vh;
    /* height: auto; */
    background: linear-gradient(to bottom, #367b9d 80%, #fff 20%);
  }
  /* clip-path: polygon(100% 100%, 100% 100%, 100% 100%); */
`;

const Triangle = styled.div`
  width: 0;
  /* height: 10%; */

  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-bottom: 30vh solid #fff;
  position: absolute;
  bottom: 0;
  
  @media (max-width: 1000px) {
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    border-bottom: 9vh solid #fff;
    bottom: 20%;
  }
`;

const Landing = () => {
  return (
    <Component>
      <Navbar />
      <Body />
      <Triangle />
    </Component>
  );
};

export default Landing;
