import Lottie from 'react-lottie'
import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import animationData from './hero.json'

const bodyLoad = keyframes`
  
  0% {
    transform: translateY(3%) ;

    opacity: 0;
    /* position:absolute; */
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
    transform: translateY(1);
    opacity: 1;
    /* position:absolute;  */
  }

`;
const Component = styled.div`
    height: 85vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: none !important;
    z-index: 100;
    flex-direction: column;
`;
const BoxContainer = styled.div`
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    animation: ${bodyLoad} 900ms ease-in;
    /* animation-delay:200ms; */
    overflow: none !important;
    /* background-color: #fff; */
`;

const Message = styled.div`
    /* margin-top: 20px; */
    display: flex; 
    flex-direction: column;
    align-items: center;

    font-size: 3.3rem;
    letter-spacing: 1px;
    font-weight: 700;
    color: #fff;
    `;
const ColoredMessage = styled(Message)`
    margin: 0;
    color: #fad65d;
    `;
const SmallMessage = styled.div`
        margin-top:10px;
        display: flex; 
        flex-direction: column;
        font-family:Montserrat;
        align-items: center;
        text-align:center;

    font-size: 1.2rem;
    letter-spacing: 1.2px;
    font-weight: 500;
    color: #fff;
`

const Body = () => {


    return (
        <Component>
            <BoxContainer>
                <Message>
                    Why? <br />
                    <ColoredMessage>
                        Road Condition Mapper
                    </ColoredMessage>
                </Message>
                <SmallMessage>
                    Road Condition Mapper dedicated towards <br /> Preventing Accidents and Fastening the <br /> Commute
                </SmallMessage>

            </BoxContainer>
           
        </Component>
    );
};

export default Body;
