import React, { useState } from "react";
import styled from "styled-components";
import HeaderNav from "./Component/Header/HeaderNav";
import ExpertSkills from "./Component/Expert/ExpertSkills";
import HomeScreenComp from "./Component/HomeScreen/HomeScreenComp";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onHandle = () => {
    const check = window.scrollY;
    console.log(check);
    if (check >= 41) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  window.addEventListener("scroll", onHandle);

  return (
    <Container>
      <HeaderNav bg={toggle ? "bg" : ""} />
      <HomeScreenComp />
    </Container>
  );
};

export default App;

const Container = styled.div`
  background: #f9f9f8;
`;
