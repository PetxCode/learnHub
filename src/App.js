import React, { useState } from "react";
import styled from "styled-components";
import HeaderNav from "./Component/Header/HeaderNav";
import ExpertSkills from "./Component/Expert/ExpertSkills";
import HomeScreenComp from "./Component/HomeScreen/HomeScreenComp";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HirePage from "./HirePage/HirePage";
import { Dashboard } from "./DashBoard/DashBoard";
// import "antd/dist/antd.css";
import StudentDetail from "./HirePage/StudentDetail";
import Detail from "./HirePage/Detail";
import Courses from "./Component/Courses/Courses";
import { CourseDetail } from "./Component/Courses/CourseDetail";
import { Register } from "./Register/Register";

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
      <BrowserRouter>
        <HeaderNav bg={toggle ? "bg" : ""} />
        <Switch>
          <Route path="/" exact component={HomeScreenComp} />
          <Route path="/register" exact component={Register} />
          <Route path="/hire" exact component={HirePage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/student/:id" exact component={StudentDetail} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/courses/:id" exact component={CourseDetail} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background: #f9f9f8;
`;
