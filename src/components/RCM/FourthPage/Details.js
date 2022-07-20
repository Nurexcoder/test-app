import React from "react";
import styled from "styled-components";

const Component = styled.div`
  width: 100%;
  /* height: 140vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeaderTitle = styled.div`
  font-weight: 800;
  font-size: 6vh;
  
  font-size: clamp(2.8rem,6vh,4.5rem);
  font-family: "Inter", sans-serif;
  
  font-style: normal;
  text-align: center;
  color: #023047;
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
  `;
const HeaderMessage = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 2.5vh;
  
  font-size: clamp(1.6rem,2.5vh,3rem);
  text-align: center;
  color: #838383;
  width: 70%;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
const BoxContainer = styled.div`
  margin-top: 20px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const Box = styled.div`
  min-width: 450px;
  width: 40%;
  max-width: 650px;
  min-height: 350px;
  height: 60vh;
  max-height: 500px;
  background: ${(props) => (props.bgColor ? props.bgColor : "#ffffff")};
  box-shadow: 0px 2px 40px rgba(58, 58, 58, 0.07);
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  margin: 15px 0%;
  justify-content: space-around;

  @media (max-width: 1000px) {
    width: 60%;
    min-width: 40ch;
    flex-direction: column;
    height: 400px;
    max-height: 50vh;

    justify-content: space-around;
  }
  @media (max-width: 560px) {
    min-width: 30ch;
    width: 80%;
    flex-direction: column;
    height: 150px;
    max-height: 40vh;
    justify-content: space-around;
  }
`;
const BoxHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const BoxUpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: ; */
`;

const BoxLevel = styled.div`
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  /* font-size: 1.2em; */
  font-size: clamp(1.2rem,2.4vh,2rem);
  text-align: center;
  margin: 10px 0;
  font-family: "Inter";
  font-weight: 600;
  @media (max-width: 100px) {
    font-size: 1.2rem;
  }
  `;
const BoxHeader = styled.div`
  color: #d0a100;
  font-size: clamp(2.3rem,5vh,3rem);
  text-align: center;
  margin: 5px 0;
  font-family: "Inter";
  font-weight: 800;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }
  `;
const BoxAbout = styled.div`
  color: #023047;
  /* font-size: clamp(1.3rem,5vh,3rem); */
  /* font-size: 1.2rem; */
  font-size: clamp(1.2rem,2.4vh,1.8rem);
  text-align: center;
  font-family: "Inter";
  margin: 5px 0;
  font-weight: 600;
  padding: 0 20px;
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;
const BoxDown = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
  font-family: "Inter";
  `;
const BoxQuestion = styled.div`
  color: #dbb639;
  /* font-size: 1.4rem; */
  font-size: clamp(1.4rem,2.8vh,2rem);
  text-align: center;
  font-family: "Inter";
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
  `;
const BoxDetails = styled.div`
margin-top: 10px;
text-align: center;
width: 70%;
font-size: clamp(1rem,2.2vh,1.4rem);
/* font-size: 1rem; */
font-family: "Inter";
display: flex;
justify-content: center;
align-items: center;
/* color: #023047; */
color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 1rem;
    width: 100%;
  }
`;
const Image = styled.img`
  width: 14%;
  height: auto;
`;
const BoxLowerHeader = styled(HeaderTitle)`
  /* width: 70%; */
  font-size: 7.4vh;
  
  font-size: clamp(2.8rem,6vh,4.5rem);
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  @media (max-width: 1000px) {
    font-size: 2.6em;
  }
  @media (max-width: 560px) {
    font-size: 1.6em;
  }
  `;
const ButtonContainer = styled.div`
  /* margin-top: 50px; */
  margin-bottom: 50px;
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 560px) {
    width: 60%;
  }
`;
const ContactButton = styled.button`
  padding: 10px 15px;

  border: none;
  outline: none;
  width: 45%;
  background: #4d4d4d;
  max-width: 25ch;
  padding: 2vh 0;
  box-shadow: 0px 4px 64px rgba(58, 58, 58, 0.13);
  border-radius: 4px;
  font-size: 2.4vh;
  font-size: clamp(1rem,2.4vh,2rem);
  color: #fff;
  &:hover {
    transition: 1s ease;
    background-color: #000;
  }
  @media (max-width: 1000px) {
    font-size: 0.6em !important;
    /* display: none; */
  }
`;
const Button = styled(ContactButton)`
  background: #fff;
  color: #023047;
  /* font-size: 2.4vh; */
  border: 1px solid #023047;
  &:hover {
    transition: 1s ease;
    background-color: #000;
    color: #fff;
  }
`;
const Details = () => {
  return (
    <Component>
      <Header>
        <HeaderTitle>Leveraging RCM with Real-time</HeaderTitle>
        <HeaderMessage>
          Different types of Use cases on levels of realtime
        </HeaderMessage>
      </Header>
      <BoxContainer>
        <BoxHolder>
          <Box>
            <BoxUpper>
              <BoxLevel textColor="#023047">Level 1</BoxLevel>
              <BoxHeader>
                <Image src="/images/dayLogo.png" />
                Near Realtime
              </BoxHeader>
              <BoxAbout textColor="#023047">
                Last Mile Delivery Companies & Maps Companies
              </BoxAbout>
            </BoxUpper>
            <BoxDown>
              <BoxQuestion>How it bring a change in their system?</BoxQuestion>
              <BoxDetails textColor="#023047">
                Their system will get data about different road activities and
                road environment a particular route or city posses
              </BoxDetails>
            </BoxDown>
          </Box>
          <Box bgColor="#023047">
            <BoxUpper>
              <BoxLevel>Level 2</BoxLevel>
              <BoxHeader>
                <Image src="/images/weekLogo.png" />
                Weekly Data
              </BoxHeader>
              <BoxAbout>
                OEMs, Courier Co., Long route Delivery Companies, Long Route
                Trips Agencies{" "}
              </BoxAbout>
            </BoxUpper>
            <BoxDown>
              <BoxQuestion>How it bring a change in their system?</BoxQuestion>
              <BoxDetails>
                Commuter will be aware about daily activities and hazards on the
                route
              </BoxDetails>
            </BoxDown>
          </Box>
        </BoxHolder>
        <BoxHolder>
          <Box bgColor="#023047">
            <BoxUpper>
              <BoxLevel>Level 3</BoxLevel>
              <BoxHeader>
                <Image src="/images/biWeekLogo.png" />
                BiWeekly Data
              </BoxHeader>
              <BoxAbout>Public Sector Road Agencies</BoxAbout>
            </BoxUpper>
            <BoxDown>
              <BoxQuestion>How it bring a change in their system?</BoxQuestion>
              <BoxDetails>
                Their system will get data about different road activities and
                road environment a particular route or city posses.
              </BoxDetails>
            </BoxDown>
          </Box>
          <Box>
            <BoxUpper>
              <BoxLevel textColor="#023047">Level 4</BoxLevel>
              <BoxHeader>
                <Image src="/images/monthLogo.png" />
                Monthly Data
              </BoxHeader>
              <BoxAbout textColor="#023047">
                Marketing & Insurance Companies
              </BoxAbout>
            </BoxUpper>
            <BoxDown>
              <BoxQuestion>How it bring a change in their system?</BoxQuestion>
              <BoxDetails textColor="#023047">
                Their system will get data about different road hazard patterns
                and statistics of different cities and states.
              </BoxDetails>
            </BoxDown>
          </Box>
        </BoxHolder>
      </BoxContainer>
      <BoxLowerHeader>
        Let’s bring a new vision <br /> towards commute
      </BoxLowerHeader>
      <ButtonContainer>
        <Button>How it works</Button>
        <ContactButton>Contact Us</ContactButton>
      </ButtonContainer>
    </Component>
  );
};

export default Details;
