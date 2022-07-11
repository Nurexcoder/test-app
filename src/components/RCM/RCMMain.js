import React from 'react'
import styled from 'styled-components'
import Body from './FirstPage/Body';
import Landing from './FirstPage/Main';
import Navbar from './FirstPage/Navbar';
import SecondMain from './Second/Main';
const Component = styled.div``;
const RCMMain = () => {
  return (
    <Component>
      <Landing />
      <SecondMain/>
    </Component>
  )
}

export default RCMMain