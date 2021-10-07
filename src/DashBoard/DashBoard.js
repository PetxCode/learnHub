import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { DeshBoardHome } from "./DeshBoardHome";
import { SiderDeshBoard } from "./SiderDeshBoard";

export const Dashboard = () => {
  const [data, setData] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Sider>
          {" "}
          <SiderDeshBoard />
        </Sider>
        <Sider1>
          <DeshBoardHome />
        </Sider1>
      </Wrapper>
    </Container>
  );
};

const Sider = styled.div`
  position: fixed;
  z-index: 100;
`;

const Sider1 = styled.div`
  padding-left: 150px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
`;
