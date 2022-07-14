import React from 'react'
import styled from 'styled-components';
import Points from './Points';
import Tabs from './Tabs';

const Component=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  padding: 0;
`;


const Infos = () => {
  return (
    <Component>
      <Points/>
      <Tabs/>
    </Component>
  )         
}

export default Infos