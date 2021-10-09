import React from "react";
import styled from "styled-components";
import img from "../assets/v.png";

export const Community = () => {
  return (
    <Container>
      <Title>Our Community</Title>
      <Wrapper>
        <Image src={img} />
        <Content>
          <CommunityProps
            title="
          100,000+ Software Engineers"
            text="Who have come together to develop their skills, learn from each other, and grow their careers"
          />
          <CommunityProps
            title="
            100+ Technical Skills"
            text="Skills include Ruby, Python, Go, Java, JavaScript, React-Native, Postgres, MongoDB, and many more."
          />
          <CommunityProps
            title="
            80+ Countries"
            text="With a geographic footprint that covers Africa, South America, Eastern Europe, and many more."
          />

          <Button>Learn More</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export const CommunityProps = ({ text, title }) => {
  return (
    <ContainerProps>
      <TitleProps>{title}</TitleProps>
      <ContentProps>{text}</ContentProps>
    </ContainerProps>
  );
};

const Button = styled.button`
  outline: none;
  border: 0;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  background-color: #09386d;
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

  :hover {
    transform: scale(0.98);
    cursor: pointer;
    background-color: #0c488b;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const ContainerProps = styled.div`
  width: 500px;
  margin: 30px 0;

  @media screen and (max-width: 800px) {
    width: 300px;
    margin: 20px 0;
  }
`;
const TitleProps = styled.div`
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #09386d;
`;
const ContentProps = styled.div`
  font-size: 25px;
  line-height: 1.5;
`;

const Image = styled.img`
  width: 700px;
  min-height: 700px;
  height: 100%;
  object-fit: contain;
  margin-right: 40px;
  padding-bottom: 20px;
  background-image: url("world.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 800px) {
    width: 350px;
    min-height: 300px;
    height: 100%;
    object-fit: contain;
    background-image: url("world.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    /* background-color: red; */
  }
`;
const Content = styled.div``;
const Title = styled.div`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 40px;
  color: #09386d;
`;

const Container = styled.div`
  width: 100%;
  min-height: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 20px;
  padding-bottom: 20px;
  background-image: linear-gradient(#f9f9f8, #d7e2cf, #f9f9f8);
`;
const Wrapper = styled.div`
  width: 100%;
  /* height: 500px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
