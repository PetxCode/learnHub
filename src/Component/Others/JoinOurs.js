import React from "react";
import styled from "styled-components";

const JoinOurs = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Text1>Join Our New CoHort</Text1>
          <Button>Start Learning</Button>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default JoinOurs;
// const Box = styled.div``

const Text1 = styled.div``;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    /* width: 80%;
    height: 500px;
    background: #09386d; */
  }
`;

const Button = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition: all 350ms;
  background: white;
  border-radius: 5px;
  font-size: 20px;
  color: black;
  margin-top: 20px;

  box-shadow: rgb(0 0 0 / 39%) 0px 26px 30px -10px,
    rgb(0 0 0 / 23%) 0px 16px 10px -10px;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
      rgb(0 0 0 / 33%) 0px 16px 10px -10px;
  }
`;

const Text = styled.div`
  position: absolute;
  left: 80px;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  justify-content: center;
  display: flex;
  padding-top: 50px;
  font-weight: 900;
  font-size: 40px;
  position: relative;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 400px;
  background-image: url("guy.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 90%;
    height: 300px;
    background: #09386d;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding-left: 20px;
  }
`;
