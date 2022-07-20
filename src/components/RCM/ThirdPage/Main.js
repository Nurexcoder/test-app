import React from "react";
import How from "./How";
import styled from "styled-components";
const Component = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 9vh 0;
  height:100vh;
  overflow: hidden;
  @media(max-width:1000px){
    height: auto;
    margin: 1vh 0;
  }
`;
const ThirdMain = () => {
  
  return (
    <Component>
      <How />
    </Component>
  );
};

export default ThirdMain;
