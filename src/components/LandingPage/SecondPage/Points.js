import React from "react";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
const Component = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;
const Header = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: #023047;
`;
const Message = styled.p`
  width: 50%;
  text-align: center;
  font-weight: 500;
  line-height: 1.4rem;
  font-size: 1.2rem;
  color: #838383;
`;
const MapAndCompany = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  height: 100px;
`;
const Map = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;
const MapHeader = styled.div`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #333333;
`;
const MapMessage = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #929292;
  font-weight: 500;
  line-height: 1.3;
`;
const Plus = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  font-size: 3rem;
  margin: 0;
  padding: 0;
`;
const PlusIcon=styled(AddIcon)`
    transform:scale(1.3);
`
const Company = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;
`;
const CompanyImage = styled.img`
  width: 65%;
  height: auto;
`;
const ColoredText = styled.span`
  color: #E1B318;
`;
const CompanyMessage = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #929292;
  font-weight: 500;
  line-height: 1.3;
  width: 100%;
`;

const Points = () => {
  return (
    <Component>
      <Header>Points</Header>
      <Message>
        From our location points the route might be different but you will reach
        there in the shortest time
      </Message>
      <MapAndCompany>
        <Map>
          <MapHeader>Maps</MapHeader>
          <MapMessage>
            Maps are limited to Distance, <br /> Time & Navigation
          </MapMessage>
        </Map>
        <Plus><PlusIcon/></Plus>
        <Company>
          <CompanyImage src="/images/logoBlack.png" />
          <CompanyMessage>
            We go beyond by
            <ColoredText> analysing </ColoredText>
             adversities
            <br/> and visualise roads for better AI data driven decisions
          </CompanyMessage>
        </Company>
      </MapAndCompany>
    </Component>
  );
};

export default Points;
