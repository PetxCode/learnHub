import React from "react";
import styled from "styled-components";
import HireTop from "./HireTop";
// import img1 from "../Component/assets/.png";

const HireProps = () => {
  return (
    <Container>
      <Wrapper>
        <HireTop
          title="oin The World’s Leading Brands and Companies Working With Andela"
          text="Partner with us for your React.js talent needs and be in the company
        of hundreds of best-in-class corporations, institutions, and
        organizations from a diverse set of industries. Years of long-standing
        collaboration with them attest to our firm commitment to deliver
        results."
        />
      </Wrapper>
    </Container>
  );
};

export default HireProps;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
