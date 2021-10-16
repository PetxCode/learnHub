import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Fade from "react-reveal/Fade";

import { DeshBoardHome } from "./DeshBoardHome";
import { SiderDeshBoard } from "./SiderDeshBoard";

export const Dashboard = () => {
  const [data, setData] = useState(false);

  return (
    <Container>
      <Wrapper>
        <DeshBoardHome />
      </Wrapper>
    </Container>
  );
};

const Sider = styled.div`
  position: fixed;
  z-index: 100;
  transition: all 350ms;
`;

const Sider1 = styled.div`
  padding-left: 150px;
  transition: all 350ms;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 350ms;
`;
const Wrapper = styled.div`
  display: flex;
  transition: all 350ms;
`;
