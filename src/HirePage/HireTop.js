import React from "react";
import styled from "styled-components";

const HireTop = ({ img, text, title }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={img} />
        <Title>{title}</Title>
        <SubTitle>{text}</SubTitle>
      </Wrapper>
    </Container>
  );
};

export default HireTop;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: red;
  margin: 30px 0;
`;
const Title = styled.div`
  font-weight: 900;
  font-size: 35px;
  text-align: center;
  margin: 0 auto;
  /* width: 92%; */
  margin-bottom: 20px;
  line-height: 1.2;
`;
const SubTitle = styled.div`
  font-size: 25px;
  margin: 0 30px;
  text-align: center;
  line-height: 1.5;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  min-width: 400px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
