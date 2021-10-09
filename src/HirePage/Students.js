import React from "react";
import styled from "styled-components";

const Students = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Title>
            <Name>Peter</Name>
            <Place>Nigeria</Place>
          </Title>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Students;

const Card = styled.div``;
const Title = styled.div``;
const Name = styled.div``;
const Place = styled.div``;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 50px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
