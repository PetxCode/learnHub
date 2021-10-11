import React from "react";
import styled from "styled-components";
import { AiFillHome, AiFillAppstore, AiFillContacts } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { GiHamburgerMenu, GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";

const SiderBar = ({ setToggle }) => {
  return (
    <MainContainer
      onClick={() => {
        setToggle(false);
      }}
    >
      <Container
        onClick={() => {
          setToggle(false);
        }}
      >
        <Wrapper>
          <Navigation>
            <Space />
            <Nav to="/">
              <Icon>
                <AiFillHome />
              </Icon>
              <span>Home</span>
            </Nav>
            <Nav to="/">
              <Icon>
                <BsFillBookFill />
              </Icon>
              <span>About</span>
            </Nav>
            <Space />

            <LogIn to="/courses">
              <AiFillAppstore
                style={{ marginRight: "10px", fontSize: "25px" }}
              />{" "}
              <span>Courses</span>
            </LogIn>

            <LogIn bg to="/hire">
              <GiSkills style={{ marginRight: "10px", fontSize: "25px" }} />
              <span>Hire Talent</span>
            </LogIn>
          </Navigation>

          <LogIn to="/dashboard">Sign Up</LogIn>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default SiderBar;

const Space = styled.div`
  margin: 40px;
`;
const LogIn = styled(Link)`
  outline: none;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 90px;
  /* background-color: #0c488b; */
  background-color: ${({ bg }) => (bg ? "#55a350" : "#0c488b")};
  color: white;
  margin-right: 20px;
  margin-bottom: 10px;
  font-family: Raleway;
  /* font-size: 20px; */
  letter-spacing: 1.5px;
  transform: scale(1);
  transition: all 350ms;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
    /* background-color: rgba(100, 176, 96, 0.5); */

    background-color: ${({ bg }) =>
      bg ? "rgba(100, 176, 96, 0.8)" : "#0b4280"};
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
  flex: 1;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Nav = styled(Link)`
  height: 70px;
  width: 100%;
  display: flex;
  margin: 5px 0px;
  align-items: center;
  transition: all 350ms;
  padding-left: 20px;
  text-decoration: none;
  color: white;

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
  font-size: 20px;
`;
// const Wrapper = styled.div``;

const Container = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    width: 300px;
    min-height: 90vh;
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
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: rgba(164, 202, 247, 0.55);
  }
`;
