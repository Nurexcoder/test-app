import React from "react";
import How from "./How";
import styled from "styled-components";
const Component = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh ;
  overflow: hidden;
  @media(max-width:860px){
    height: auto;
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
