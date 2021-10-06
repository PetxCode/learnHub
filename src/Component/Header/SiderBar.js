import React from "react";
import styled from "styled-components";
import { AiFillHome, AiFillAppstore, AiFillContacts } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const SiderBar = ({ setToggle }) => {
  return (
    <MainContainer>
      <Container
        onClick={() => {
          setToggle(false);
        }}
      >
        <Wrapper>
          <Navigation>
            <Nav>
              <Icon>
                <AiFillHome />
              </Icon>
              <span>Home</span>
            </Nav>
            <Nav>
              <Icon>
                <AiFillHome />
              </Icon>
              <span>About</span>
            </Nav>
            <Nav>
              <Icon>
                <AiFillHome />
              </Icon>
              <span>Courses</span>
            </Nav>
          </Navigation>

          <LogIn>Sign Up</LogIn>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default SiderBar;

const LogIn = styled.button`
  outline: none;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  background-color: #09386d;
  color: white;
  margin-right: 20px;
  margin-bottom: 10px;
  font-family: Raleway;
  /* font-size: 20px; */
  letter-spacing: 1.5px;
  transform: scale(1);
  transition: all 350ms;
  font-weight: bold;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
    background-color: #0c488b;
  }

  @media screen and (max-width: 800px) {
    /* display: none; */
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
  margin: 5px 0px;
  align-items: center;
  height: 50px;
  transition: all 350ms;
  padding-left: 20px;

  span {
    font-weight: bold;
  }

  :hover {
    background-color: #0b3f79;
    cursor: pointer;
  }
`;
const Icon = styled.div`
  margin: 0 10px;
`;
// const Wrapper = styled.div``;

const Container = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    width: 300px;
    height: 500px;
    background: #09386d;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 0 0 10px 0px;
  }
`;

const MainContainer = styled.div`
  /* display: none; */
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: rgba(164, 202, 247, 0.55);
  }
`;
