import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { app } from "./../base";
import MainCourse from "./../Component/Courses/MainCourse";

export const DeshBoardHome = () => {
  const [data1, setData1] = useState(false);

  const getData = async () => {
    await app
      .firestore()
      .collection("course")
      .onSnapshot((snapshot) => {
        const i = [];
        snapshot.forEach((doc) => {
          i.push({ ...doc.data(), id: doc.id });
        });
        setData1(i);
      });
  };

  React.useEffect(() => {
    getData();
    console.log("firebase: ", data1);
  }, []);
  return (
    <Container>
      <Wrapper>
        <Button>My Course</Button>
        <Button>Upload a Course</Button>
        <Button>Setting</Button>
      </Wrapper>
      <MainCourse />
    </Container>
  );
};

const Button = styled.div`
  width: 140px;
  height: 60px;
  border-radius: 3px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: scale(1);
  transition: all 350ms;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  /* background-color: brown; */
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 68%;
  height: 100%;
  min-height: 100px;
  background-color: #09386d;
  margin: 0 auto;
  flex-wrap: wrap;
`;
