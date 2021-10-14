import React, { useState } from "react";
import styled from "styled-components";
import { AiFillHome, AiFillAppstore, AiFillContacts } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { GiHamburgerMenu, GiSkills } from "react-icons/gi";
import logo from "../assets/b.png";
import SiderBar from "./SiderBar";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

const HeaderNav = ({ bg }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container
      bg={bg}
      onClick={() => {
        // setToggle(false);
      }}
    >
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Nav to="/">
            <Icon>
              <AiFillHome />{" "}
            </Icon>
            <span>Home</span>
          </Nav>
          <Nav to="/">
            <Icon>
              {" "}
              <BsFillBookFill />{" "}
            </Icon>
            <span>About</span>
          </Nav>

          <LogIn to="/courses">
            <Icon>
              {" "}
              <AiFillAppstore />{" "}
            </Icon>
            Courses
          </LogIn>
          <LogIn to="/hire" bg>
            <Icon>
              {" "}
              <GiSkills />{" "}
            </Icon>
            Hire Talent
          </LogIn>
        </Navigation>
        <LogIn to="/register">Sign Up</LogIn>
        <Menu>
          <GiHamburgerMenu onClick={onToggle} />
        </Menu>
      </Wrapper>
      {/* <Fade left when={toggle}>
        <SiderBar setToggle={setToggle} />
      </Fade> */}

      {toggle ? <SiderBar setToggle={setToggle} /> : null}
    </Container>
  );
};

export default HeaderNav;

const LogIn = styled(Link)`
  outline: none;
  border: 0;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  background-color: ${({ bg }) => (bg ? "#55a350" : "#09386d")};
  color: white;
  margin-right: 20px;
  font-family: Raleway;
  /* font-size: 20px; */
  letter-spacing: 1.5px;
  transform: scale(1);
  transition: all 350ms;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
    background-color: #0c488b;
    background-color: ${({ bg }) => (bg ? "#55a350" : "#09386d")};
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    margin-right: 30px;
    font-size: 35px;
    color: #09386d;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  margin-right: 5px;
`;

const Nav = styled(Link)`
  color: #09386d;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 15px;
  text-decoration: none;

  span {
    font-weight: bold;
    position: relative;

    :after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      height: 4px;
      width: 100%;
      background-color: #09386d;
      transform: scale(0);
      transform-origin: center;
      transition: all 350ms;
      opacity: 0;
    }
  }

  :hover {
    span {
      :after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
const Container = styled.div`
  z-index: 1;
  position: fixed;
  width: 99.9%;
  height: 100px;
  background: ${({ bg }) => (bg ? "rgba(74, 144, 226, 0.25)" : "transparent")};
  box-shadow: ${({ bg }) =>
    bg ? " 0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "transparent"};

  backdrop-filter: ${({ bg }) => (bg ? "blur(4px)" : "transparent")};

  -webkit-backdrop-filter: ${({ bg }) => (bg ? "blur(4px)" : "transparent")};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 150ms;
`;
const Wrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: display;
    justify-content: space-between;
    width: 100%;
  }
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Logo = styled.img`
  margin: 0 30px;
  width: 180px;
  height: 80px;
  object-fit: contain;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;
