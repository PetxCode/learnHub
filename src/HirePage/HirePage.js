import React from "react";
import styled from "styled-components";
import HireTop from "./HireTop";
import img from "../Component/assets/arr.png";
import HireProps from "./HireProps";
import HireTalent from "./HireTalent";
import HowTo from "./HowTo";

const HirePage = () => {
  return (
    <COntainer>
      <Wrapper>
        <HireTalent />
        <HireProps />
        <HowTo />
        <HireTalent />
      </Wrapper>
    </COntainer>
  );
};

export default HirePage;

const COntainer = styled.div`
  padding-top: 100px; */
  width: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
