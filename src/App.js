
import logo from './logo.svg';
import './App.css';
import Landing from './components/LandingPage/LandingMain';
import RCMMain from './components/RCM/RCMMain';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Component=styled.div`

`

function App() {
  return (
    <Component>
    <Routes>
    <Route path="/" exact element={<Landing/>}/>
    <Route path="/rcm" exact element={<RCMMain/>}/>
    </Routes>
    </Component>
  );
}

export default App;
