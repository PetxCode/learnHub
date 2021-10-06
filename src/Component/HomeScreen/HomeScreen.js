import React from "react";
import styled from "styled-components";
import pix from "../assets/people.png";

const HomeScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>
            Building <span>Africa's</span> Workforce.
          </Title>
          <Para>
            Join the remote Side Hustle internship for free to learn high-demand
            skills that will give you a competitive advantage in the global
            workforce.
            <br />
            You will also have a lot of fun networking taking on tasks, earning
            stipends, winning prizes, and ultimately becoming part of a startup
            where your skills are put to use.
          </Para>
          <Button>Start Learning</Button>
        </Content>
        <Image src={pix} />
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Button = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #09386d; */
  background-color: #09386d;
  color: white;
  margin: 20px 0;
  border-radius: 3px;
  transform: scale(1);
  transition: all 350ms;
  box-shadow: rgb(0 0 0 / 49%) 0px 16px 10px -10px;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 19%) 0px 26px 30px -10px,
      rgb(0 0 0 / 53%) 0px 16px 10px -10px;
  }
`;

const Image = styled.img`
  width: 600px;
  min-width: 280px;
  min-height: 400px;
  /* height: 600px; */
  object-fit: contain;
  margin: 10px auto;
`;
const Content = styled.div`
  width: 600px;
  /* min-width: 300px; */
  margin: 0 20px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 20px;

  span {
    color: #55a350;
  }
`;
const Para = styled.div`
  font-size: 20px;
  line-height: 1.4;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  color: #09386d;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
