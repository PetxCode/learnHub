import React from "react";
import styled from "styled-components";
import HomeScreen from "./HomeScreen";
import BenefitComp from "./BenefitComp";
import JoinOurs from "../Others/JoinOurs";
import { Reasons } from "../Others/Reasons";
import { Community } from "./../Others/Community";
import OurStack from "./../Others/OurStack";
import ExpertSkills from "./../Expert/ExpertSkills";

const HomeScreenComp = () => {
  return (
    <Container>
      <Wrapper>
        <HomeScreen />
        <BenefitComp />
        <JoinOurs />
        <Reasons />
        <ExpertSkills />
        <Community />
        <OurStack />
      </Wrapper>
    </Container>
  );
};

export default HomeScreenComp;
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding-top: 100px;
  background-color: #f9f9f8;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
