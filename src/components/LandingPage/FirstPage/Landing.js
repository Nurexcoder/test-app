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

  /* min-height: 400px; */
  /* overflow-y: scroll; */
  border-bottom: transparent;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 750px;
  @media (max-width: 1000px) {
    max-height: 65vh;
    justify-content: space-between;
    min-height:600px ;
    /* height: auto; */
    background: linear-gradient(to bottom, #367b9d 80%, #fff 20%);
    z-index: 100000000000000000;
  }
  @media (max-width: 560px) {
    /* min-height: 45vh; */
    min-height: 600px !important;
    height: 52%;
    margin: 0;
    /* font-size: 24px; */
    /* height: auto; */
    background: linear-gradient(to bottom, #367b9d 79%, #fff 18%);
  }
  
  @media (max-width: 450px) {
    /* min-height: 45vh; */
    min-height: 500px !important;
    height: 52%;
    margin: 0;
    /* height: auto; */
    background: linear-gradient(to bottom, #367b9d 79%, #fff 18%);
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
    border-bottom: 10vh solid #fff;
    bottom: 20%;
    height: 10px;
  }
  @media (max-width: 560px) {
    border-left: 52vw solid transparent;
    border-right: 52vw solid transparent;
    border-bottom: 10vh solid #fff;
    bottom: 20%;
    /* height: 10px; */
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
