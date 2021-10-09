import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import Fade from "react-reveal/Fade";

export const SiderDeshBoard = () => {
  const [toggle, setToggle] = useState(true);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <MainContainer>
      {toggle ? (
        <Container>
          <Wrapper>
            <Logo />
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
                <span>Home</span>
              </Nav>
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
                <span>Home</span>
              </Nav>
            </Navigation>

            <Arrow onClick={onToggle}>
              <BsFillArrowLeftCircleFill />
            </Arrow>
          </Wrapper>
        </Container>
      ) : (
        <Container1>
          <Wrapper1>
            <Logo1 />
            <Navigation1>
              <Nav>
                <Icon>
                  <AiFillHome />
                </Icon>
              </Nav>
              <Nav>
                <Icon>
                  <AiFillHome />
                </Icon>
              </Nav>
              <Nav>
                <Icon>
                  <AiFillHome />
                </Icon>
              </Nav>
              <Nav>
                <Icon>
                  <AiFillHome />
                </Icon>
              </Nav>
            </Navigation1>

            <Arrow onClick={onToggle}>
              <BsFillArrowRightCircleFill />
            </Arrow>
          </Wrapper1>
        </Container1>
      )}
    </MainContainer>
  );
};

const Logo = styled.img`
  width: 300px;
  height: 70px;
  object-fit: contain;
  margin: 30px auto;
`;

const Logo1 = styled.img`
  width: 100px;
  height: 70px;
  object-fit: contain;
  margin: 30px auto;
`;

const Navigation1 = styled.div`
  margin-top: 30px;
  flex: 1;
`;
const Navigation = styled.div`
  margin-top: 30px;
  flex: 1;
`;
const Arrow = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row-reverse;
  font-size: 30px;
  transition: all 350ms;
  transform: scale(1);
  margin-bottom: 50px;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Nav = styled.div`
  display: flex;
  width: 80%;
  height: 60px;
  border-top: 2px solid gray;
  margin: 10px auto;
  display: flex;
  align-items: center;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    border-top: 0;
    transform: scale(0.96);
  }
`;
const Icon = styled.div`
  margin-right: 15px;
`;

const Container1 = styled.div`
  width: 150px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  transition: all 1050ms;
  position: relative;
`;

const Container = styled.div`
  width: 450px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  transition: all 1050ms;
`;

const Wrapper1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  /* width: 450px; */
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: lightblue;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
