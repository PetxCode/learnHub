import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./course.json";
import { useParams } from "react-router-dom";

export const CourseDetail = () => {
  const { id } = useParams();
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setMyData(data[id - 1]);
  }, [myData]);
  return (
    <Container>
      <Wrapper>
        <TopHolder>
          <Div>Course Detail</Div>
          <Desc>{myData?.details}</Desc>
          <Button>Add to Cart</Button>
        </TopHolder>
        <Image src={myData?.mainIcons} />
      </Wrapper>
      <Space />

      <Infomation>
        <Info>Course Information</Info>
        <Welcome>Welcome to {myData.name}, learning page!</Welcome>
        <What>Course Overview</What>

        <Info>Syllabus</Info>
        <What>WHAT WILL YOU LEARN</What>

        {myData.scheme?.map((props, i) => (
          <Table>
            <TableTitle1>{i}.</TableTitle1>
            <TableTitle>{props.title}</TableTitle>
            <TableTitleSub>{props.desc}</TableTitleSub>
          </Table>
        ))}
      </Infomation>

      <Mentor>
        <MentorAnchor>Mentors</MentorAnchor>
        <MentorSub>Be Mentored by some of the best in the industry</MentorSub>
        <MentorsPix>
          {myData.intructors?.map((props, i) => (
            <PixHolder>
              <ImagePix src={props.img} />
              <MentorName>{props.name}</MentorName>
              <MentorStack>{props.stack}</MentorStack>
            </PixHolder>
          ))}{" "}
        </MentorsPix>
        <Button>Add to Cart</Button>
      </Mentor>
    </Container>
  );
};

const TableTitle1 = styled.div`
  font-weight: 900;
  padding-left: 10px;
`;
const MentorName = styled.div`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 10px;
`;
const MentorStack = styled.div``;

const PixHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Mentor = styled.div`
  width: 100%;
  /* height: 500px; */
  background-color: lightblue;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  /* color: white; */
  padding-bottom: 50px;
`;
const ImagePix = styled.img`
  width: 200px;
  height: 200px;
  /* background-color: red; */
  border-radius: 50%;
  margin: 20px;
  border: 4px dashed gray;
`;

const MentorsPix = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MentorAnchor = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
`;
const MentorSub = styled.div``;

const TableTitleSub = styled.div`
  width: 45%;
  padding-left: 10px;
  line-height: 1.5;

  @media screen and (max-width: 1000px) {
    display: flex;
    margin: 0;
  }
`;
const TableTitle = styled.div`
  margin: 0;
  width: 55%;
  padding-left: 20px;
  font-weight: bold;

  @media screen and (max-width: 1000px) {
    display: flex;
    margin: 0;
  }
`;

const What = styled.div`
  margin: 20px 0px;
  font-weight: bold;
  margin-bottom: 150px;
`;

const Table = styled.div`
  margin-top: 120px;
  display: flex;
  width: 100%;
  /* height: 100px; */
  background-color: lightgray;
  color: black;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid black;

  @media screen and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const Info2 = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Welcome = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Info = styled.div`
  font-size: 50px;
  margin: 30px 0;
  color: #09386d;

  @media screen and (max-width: 600px) {
    margin: 10px 0;
  }
`;

const Infomation = styled.div`
  margin-left: 150px;
  min-width: 300px;

  div {
    margin: 20px 0px;
    /* margin-bottom: 80px; */
  }

  @media screen and (max-width: 600px) {
    margin: 10px 20px;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 80px;
  background-color: #09386d;
  margin: 100px 0 50px 0;
`;

const Button = styled.div`
  width: 200px;
  height: 60px;
  background-color: #09386d;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  color: white;
  border-radius: 3px;
  transform: scale(1);
  transition: all 350ms;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 500px;
  min-width: 300px;
  height: 400px;
  object-fit: contain;
  background-color: red;
  margin: 0 10px;
`;

const Desc = styled.div`
  line-height: 1.5;
  font-size: 20px;
`;
const TopHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  min-width: 300px;
  margin-left: 10px;
`;

const Div = styled.div`
  font-weight: 900;
  font-size: 50px;
  color: #09386d;
  margin: 20px;
  margin-left: 0;
  width: 600px;
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* align-items: center; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 130px;
`;
