import React from "react";
import styled from "styled-components";
import img from "./learning.svg";
import data from "./course.json";
import { Link } from "react-router-dom";
import { app } from "./../../base";

const Courses = () => {
  const [courseData, setCourseData] = React.useState([]);

  const fetchData = async () => {
    await app
      .firestore()
      .collection("course")
      .onSnapshot((snapShot) => {
        const i = [];
        snapShot.forEach((doc) => {
          i.push({ ...doc.data(), id: doc.id });
        });
        setCourseData(i);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Course>Download Courses</Course>
        <CourseTop>
          <CourseContent>
            Learn in-demand skills to give you an edge
          </CourseContent>
          <CourseImage src={img} />
        </CourseTop>

        <MainCourses>
          {courseData?.map((props, i) => (
            <CourseCard>
              <Icon src={props.icon} />
              <Content>
                <Title>{props.name}</Title>
                <Desc>{props.desc}</Desc>
                <Focus>
                  <div>Key Areas of Focus:</div>
                  <MainFocus>
                    {props.focus?.map((props, i) => (
                      <span>{props.area}</span>
                    ))}
                  </MainFocus>
                </Focus>
                <Button to={`/courses/${props.id}`}>Learn More</Button>
              </Content>
            </CourseCard>
          ))}
        </MainCourses>
      </Wrapper>
    </Container>
  );
};

export default Courses;

const MainFocus = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;
const Title = styled.div`
  width: 80%;
  font-weight: 900;
  font-size: 20px;
  justify-content: center;
  display: flex;
  margin-bottom: 30px;
`;
const Desc = styled.div`
  width: 90%;
  justify-content: center;
  display: flex;
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
`;
const Focus = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  flex: 1;
  color: #09386d;
  font-size: 23px;

  div {
    margin-bottom: 30px;
  }

  span {
    margin: 10px;
    color: black;
    flex: 1;
    font-size: 18px;
    padding: 5px 10px;
    background-color: #dfe1e6;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    width: 80px;
  }
`;
const Button = styled(Link)`
  background-color: #09386d;
  color: white;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms;
  margin-top: 100px;
  :hover {
    transform: scale(0.97);
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.8) 0px 2px 8px 0px;
  }
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-top: 50px;
  margin-bottom: 60px;
`;

const MainCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CourseCard = styled.div`
  width: 450px;

  /* height: 700px; */
  padding-bottom: 20px;
  background-color: #fafcff;
  display: flex;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid #14297c;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 350px;
  }
`;

const CourseTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
`;
const CourseContent = styled.div`
  font-size: 20px;
  margin: 10px;
  text-align: center;
  font-weight: bold;
`;
const CourseImage = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 200px;
    object-fit: contain;
  }
`;

const Course = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin: 0 10px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;
const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
