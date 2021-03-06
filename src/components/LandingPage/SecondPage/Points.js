import React from "react";
import styled, { keyframes } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { useInView } from "react-intersection-observer";

const NavLoad = keyframes`
  
  0% {
    transform: translateY(-30%);
    opacity: 0;
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
    transform: translateY(0);
    opacity: 1;
  }

`;
const Component = styled.div`
  width: 55%;
  display: flex;
  min-height: 65vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 10px 0;
  @media (max-width: 1000px) {
    width: 90%;
    min-height: fit-content;
    margin: 20px 0;
    /* margin: 20px 0; */
  }
`;
const Header = styled.div`
  font-size: 8vh;
  font-weight: 800;
  color: #023047;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }
`;
const Message = styled.p`
  width: 50%;
  text-align: center;
  font-weight: 500;
  line-height:3vh;
  font-size: 3vh;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  color: #838383;
  @media (max-width: 1000px) {
    font-size: 1rem;
    width: 85%;
    line-height:1.2rem;
  }
`;
const MapAndCompany = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  height: 100px;
`;
const Map = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:flex-start;
  height: 100%;
`;
const MapHeader = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 7vh;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* width: f; */
  flex: 3;
  color: #333333;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
    height: fit-content;
  }
`;
const MapMessage = styled.p`
  text-align: center;
  font-size: 2.2vh;
  color: #929292;
  font-weight: 500;
  line-height: 1.3;
  width: 40%;
  @media (max-width: 1000px) {
    font-size: 0.7rem;
  }
`;
const Plus = styled.div`
  /* flex: 1; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-size: 2.5rem;

  padding: 0;
`;
const PlusIcon = styled(AddIcon)`
  margin-top: 10px !important;
  transform: scale(1.5);
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Company = styled.div`
  flex: 3;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* width: 100%; */
`;
const CompanyImage = styled.img`
  /* flex: 3; */
  width: 15vw;
  /* font-size:9vh; */
  /* height:80%; */
  /* height: 9vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 150px;
  }
  @media (max-width: 560px) {
    width: 120px;
  }
`;
const ColoredText = styled.span`
  color: #e1b318;
  font-size: 2.2vh;
  @media (max-width: 1000px) {
    font-size: 0.7rem;
    /* width: 1.2em; */
  }
`;
const CompanyMessage = styled.p`
  text-align: center;
  /* width: 30%; */
  font-size: 2.2vh;
  color: #929292;
  font-weight: 500;
  line-height: 1.3;
  width: 40%;
  /* display: flex;
  align-items: center;
  justify-content: flex-end; */
  @media (max-width: 1000px) {
    font-size: 0.7rem;
  }
`;

const Points = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  return (
    <Component ref={ref}>
      <Header>Points</Header>
      <Message>
        From our location points the route might be different but you will reach
        there in the shortest time
      </Message>
      <MapAndCompany>
        <Plus>
          <MapHeader>Maps</MapHeader>
          <PlusIcon />
          <Company>
            <CompanyImage src="/images/logoBlack.png" />
          </Company>
        </Plus>
        <Map>
          <MapMessage>
            Maps are limited to Distance,  Time & Navigation
          </MapMessage>
          <CompanyMessage>
            We go beyond by
            <ColoredText> analysing </ColoredText>
            adversities
             and visualise roads for better AI data driven decisions
          </CompanyMessage>
        </Map>
      </MapAndCompany>
    </Component>
  );
};

export default Points;
