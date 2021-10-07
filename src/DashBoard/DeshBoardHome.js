import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const DeshBoardHome = () => {
  const [data, setData] = useState(false);

  return (
    <Container>
      <Wrapper>DeshBoardHome</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div``;
