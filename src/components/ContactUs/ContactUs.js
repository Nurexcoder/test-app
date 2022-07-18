import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3vh 0;
`;
const LeftNavComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* min-width: 3vw; */
`;
const LeftArrowIcon = styled.img`
  width: 3ch;
  height: auto;
  margin-left: 1vw;
`;
const RightNavComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Logo = styled.img`
  width: 22ch;
  height: auto;
`;
const MainBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 4vh 0;
  width: 80%;
  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const LeftComponent = styled.form`
  flex: 6;
  margin: 0 10%;
  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
`;
const ContactUsText = styled.h1`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2.5em;
  margin: 0;
`;
const Message = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8em;
  margin: 2vh 0;
  max-width: 60%;
  line-height: 1.5em;
  letter-spacing: 0.05em;
  @media (max-width: 870px) {
    max-width: 90%;
  }
`;
const NameComponent = styled.div`
  margin: 2vh 0;
  /* width: 80%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NameInput = styled(TextField)`
  width: 45%;
  font-size: 0.2rem !important;
  font-family: "Roboto" !important;
  font-style: normal;
  font-weight: 400 !important;
  color: #000 !important;
`;
const EmailComponent = styled.div`
  width: 100%;
`;
const EmailInput = styled(TextField)``;
const InputWithIcon = styled(Input)`
  width: 100%;
  margin: 15px 0 !important;
  padding: 3px 2px;
`;

const RefreshRateComponent = styled.div``;
const RateMessage = styled.h4`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9em;
`;
const RateFrequence = styled(RadioGroup)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 15vh !important;
`;
const RadioElement = styled(FormControlLabel)`
  margin: 0 5px !important;
  padding: 5px 10px !important;
  background-color: ${(props) =>
    props.isChecked ? "#367bf5 !important" : "transparent"};
`;
const LabelRadio = styled.div`
  /* color: white; */
  color: ${(props) => (props.isChecked ? "white" : "#000")};
  font-family: "Roboto" !important;
  font-style: normal;
  font-weight: 400 !important;
  font-size: 0.9em !important;
`;
const ReligionComponent = styled.div``;
const ReligionHeader = styled(RateMessage)``;

const NumberComponent = styled.div`
  margin: 20px 0;
`;
const InputComponent = styled.div`
  width: 100%;
  height: 50%;
  margin: 30px 0;

  background-color: #f9f9fa;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;
const Label = styled(RateMessage)`
  font-weight: 400;
  margin: 10px 0;
`;
const Bold = styled.span`
  font-weight: 700;
`;
const InputLine = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;
const FlagComponent = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const Flag = styled.img`
  width: 35px;
  height: auto;
`;
const DropDown = styled(KeyboardArrowDown)`
  font-weight: 100;
`;
const Number = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 3;
  margin-left: 20px;
  height: 100%;
`;
const Code = styled.input`
  flex: 1.5;
  margin-right: 5px;
  font-size: 1rem;
  min-width: 1vw;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: ${(props) =>
    props.currentCountry
      ? "0.001px solid rgba(0, 0, 0, 0.05)"
      : "0.001px solid red"};
  outline: none;
  background-color: transparent;
  color: black;
  font-weight: 600;
  padding: 3px 0;
`;
const InputNumber = styled(TextField)`
  flex: 8.5;
  /* width: 80%; */
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const MessageComponent = styled.h6``;
const MessageInput = styled(TextField)`
  width: 100% !important;
`;
const DescribeComponent = styled.div``;
const DescribeHeader = styled(Label)``;
const DescribeRadio = styled(RateFrequence)`
  width: 100%;
  justify-content: space-between;
`;
const ButtonComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  margin: 20px 0;
  padding: 8px;
  border-radius: 6px;
  outline: none;
  border: none;
  width: 50%;
  margin: 20px auto;
  background-color: #efd97b;
  :hover {
    background-color: rgba(239, 217, 123, 0.9);
  }
`;

const RightComponent = styled.div`
  flex: 4;
  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const RBox = styled.div`
  width: 80%;
  margin-bottom: 2.5em;
  @media (max-width: 870px) {
    width: 60%;
  }
`;

const RHeaders = styled.h4`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3em;
  margin: 0;
  @media (max-width: 870px) {
    text-align: center;
  }
`;
const RMessage = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.7em;
  line-height: 1.4em;
  margin: 1em 0;
  color: #3a3a3a;

  @media (max-width: 870px) {
    text-align: center;
  }
`;

const EmailVarified = styled(CheckCircleIcon)`
  transform: scale(0.7);
`;
const EmailUnVarified = styled(CheckCircleOutlineIcon)`
  transform: scale(0.7);
`;
const Checked = styled.img``;
const UnChecked = styled.img``;

const ContactUs = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [countries, setCountries] = useState([]);

  const [currentCountry, setCurrentCountry] = useState({});
  const [countryCode, setCountryCode] = useState(91);
  const [checkedOne, setCheckedOne] = useState("realtime");
  const handleSubmit = (e) => {
    e.preventDeafult();
  };
  const validateEmail = (e) => {
    console.log(e.target.value);
    if (
      String(e.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };
  useEffect(() => {
    // setActiveStep(0);
    const getCountries = async () => {
      fetch(
        "https://test.paplilabs.com/login_api/callingCode/?limit=249&offset=0"
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.count);
          setCountries(res.results);
          const selectedCountry = res.results.filter(
            (country) => country.calling_code === 91
          );
          setCurrentCountry(...selectedCountry);
          setCountryCode(91);
        });
    };
    getCountries();
  }, []);

  console.log(currentCountry);
  const handleChange = (e) => {
    setCountryCode(e.target.value.split("+")[1] || "");
    const selectedCountry = countries.filter(
      (country) => country.calling_code == e.target.value.split("+")[1]
    );

    setCurrentCountry(...selectedCountry);
  };
  return (
    <Component>
      <Header>
        <LeftNavComponent>
          <LeftArrowIcon src="/images/leftArrow.png" />
        </LeftNavComponent>
        <RightNavComponent>
          <Logo src="/images/logoBlack.png" />
        </RightNavComponent>
        <div />
      </Header>
      <MainBody>
        <LeftComponent onSubmit={handleSubmit}>
          <ContactUsText>Contact Us</ContactUsText>
          <Message>
            Feel free to contact us and we’ll get back to you as soon as we can
          </Message>
          <NameComponent>
            <NameInput
              variant="standard"
              label="First Name"
              placeholder="Eg: Ram"
              // color="#000"
              InputLabelProps={{
                style: {
                  color: "#000000 !important",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 400,
                },
              }}
            />
            <NameInput
              variant="standard"
              label="Last Name"
              placeholder="Eg: Saha"
            />
          </NameComponent>
          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <InputWithIcon
              id="standard-adornment-password"
              onChange={(e) => validateEmail(e)}
              name="email"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    {isValidEmail ? (
                      <EmailVarified color="primary" />
                    ) : (
                      <EmailUnVarified />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <RefreshRateComponent>
            <RateMessage>Refresh Rate Interested In</RateMessage>

            <RateFrequence
              onChange={(e) => {
                setCheckedOne(e.target.value);
              }}
              defaultValue="realtime"
              name="radio-buttons-group"
            >
              <RadioElement
                isChecked={checkedOne === "realtime"}
                control={
                  <Radio
                    icon={<UnChecked src="/images/contactus/unchecked.svg" />}
                    checkedIcon={
                      <Checked src="/images/contactus/checked.svg" />
                    }
                    value="realtime"
                  />
                }
                label={
                  <LabelRadio isChecked={checkedOne === "realtime"}>
                    Realtime
                  </LabelRadio>
                }
              />

              <RadioElement
                isChecked={checkedOne === "weekly"}
                control={
                  <Radio
                    icon={
                      <UnChecked
                        src="/images/contactus/unchecked.svg"
                        value="weekly"
                      />
                    }
                    checkedIcon={
                      <Checked src="/images/contactus/checked.svg" />
                    }
                    value="weekly"
                  />
                }
                label={
                  <LabelRadio isChecked={checkedOne === "weekly"}>
                    Weekly Data
                  </LabelRadio>
                }
              />
              <RadioElement
                isChecked={checkedOne === "biweekly"}
                control={
                  <Radio
                    icon={<UnChecked src="/images/contactus/unchecked.svg" />}
                    checkedIcon={
                      <Checked src="/images/contactus/checked.svg" />
                    }
                    value="biweekly"
                  />
                }
                label={
                  <LabelRadio isChecked={checkedOne === "biweekly"}>
                    BiWeekly
                  </LabelRadio>
                }
              />
              <RadioElement
                isChecked={checkedOne === "monthly"}
                control={
                  <Radio
                    icon={<UnChecked src="/images/contactus/unchecked.svg" />}
                    checkedIcon={
                      <Checked src="/images/contactus/checked.svg" />
                    }
                    value="monthly"
                  />
                }
                label={
                  <LabelRadio isChecked={checkedOne === "monthly"}>
                    Monthly
                  </LabelRadio>
                }
              />
            </RateFrequence>
          </RefreshRateComponent>
          <ReligionComponent>
            <ReligionHeader>
              Which Region You Are Most Interested In?
            </ReligionHeader>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select" />}
            />
          </ReligionComponent>
          <NumberComponent>
            <Label>Enter Your Phone Number</Label>
            <InputLine>
              <FlagComponent>
                <Flag
                  src={(currentCountry && currentCountry.flag) || "/india.png"}
                />
                <DropDown />
              </FlagComponent>
              <Number>
                <Code
                  defaultValue="+91"
                  currentCountry={currentCountry}
                  value={"+" + countryCode}
                  onChange={(e) => handleChange(e)}
                />
                <InputNumber
                  variant="standard"
                  placeholder="9854601xxx"
                  type="number"
                  name="number"
                />
              </Number>
            </InputLine>
          </NumberComponent>
          <MessageComponent>
            <MessageInput
              label="Enter your message"
              name="massage"
              variant="standard"
              multiline
              rows={4}
            />
          </MessageComponent>
          <DescribeComponent>
            <DescribeHeader>Which describes you the best?</DescribeHeader>
            <DescribeRadio>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <UnChecked
                        src="/images/contactus/unchecked.svg"
                        name="deliveryCompany"
                      />
                    }
                    checkedIcon={
                      <Checked src="/images/contactus/checkedBlue.svg" />
                    }
                  />
                }
                label={<Label>Delivery Company</Label>}
              />
              <FormControlLabel
                name="oEMCompany"
                control={
                  <Checkbox
                    icon={<UnChecked src="/images/contactus/unchecked.svg" />}
                    checkedIcon={
                      <Checked src="/images/contactus/checkedBlue.svg" />
                    }
                  />
                }
                label={<Label>OEM Company</Label>}
              />
              <FormControlLabel
                name="directConsumer"
                control={
                  <Checkbox
                    icon={<UnChecked src="/images/contactus/unchecked.svg" />}
                    checkedIcon={
                      <Checked src="/images/contactus/checkedBlue.svg" />
                    }
                  />
                }
                label={<Label>Direct Consumer</Label>}
              />
            </DescribeRadio>
          </DescribeComponent>
          <ButtonComponent>
            <Button>Submit</Button>
          </ButtonComponent>
        </LeftComponent>
        <RightComponent>
          <RBox>
            <RHeaders>Support</RHeaders>
            <RMessage>support@novaeavenue.com</RMessage>
          </RBox>

          <RBox>
            <RHeaders>Address</RHeaders>
            <RMessage>
              Novae Avenue <br />
              Papli Labs Pvt Ltd. <br />
              Registered Offices <br />
            </RMessage>
          </RBox>
          <RBox>
            <RHeaders>Reg 1</RHeaders>
            <RMessage>
              Third Floor, Vindhya C4,
              <br /> International Institute of Information Technology Hyderabad
              Campus,
              <br /> Gachibowli, Telangana 500032
            </RMessage>
          </RBox>
          <RBox>
            <RHeaders>Reg 2</RHeaders>
            <RMessage>
              34, S.F, Kailash Hills, East of Kailash - <br /> 110065, New
              Delhi, India
            </RMessage>
          </RBox>
        </RightComponent>
      </MainBody>
    </Component>
  );
};

export default ContactUs;
