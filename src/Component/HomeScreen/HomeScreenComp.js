import React from "react";
import styled from "styled-components";
import HomeScreen from "./HomeScreen";
import BenefitComp from "./BenefitComp";
import JoinOurs from "../Others/JoinOurs";
import { Reasons } from "../Others/Reasons";

const HomeScreenComp = () => {
  return (
    <Container>
      <Wrapper>
        <HomeScreen />
        <BenefitComp />
        <JoinOurs />
        <Reasons />
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
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
