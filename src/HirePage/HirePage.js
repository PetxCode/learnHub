import React from "react";
import styled from "styled-components";
import HireTop from "./HireTop";
import img from "../Component/assets/arr.png";
import HireProps from "./HireProps";

const HirePage = () => {
  return (
    <COntainer>
      <Wrapper>
        <HireProps />
      </Wrapper>
    </COntainer>
  );
};

export default HirePage;

const COntainer = styled.div`
  /* padding-top: 100px; */
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
