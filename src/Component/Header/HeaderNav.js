import React from "react";
import styled from "styled-components";

const HeaderNav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigation>
          <Nav>Home</Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default HeaderNav;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background: rgba(74, 144, 226, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  /* border-radius: 10px; */
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const Wrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;
const Navigation = styled.div``;

const Logo = styled.img`
  margin: 0 30px;
  width: 150px;
  height: 50px;
  background-color: blue;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;
const Nav = styled.div``;
