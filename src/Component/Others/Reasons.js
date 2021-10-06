import React from "react";
import styled from "styled-components";
import img1 from "../assets/choice.svg";
import img2 from "../assets/talent.svg";
import img3 from "../assets/value.svg";

export const Reasons = () => {
  return (
    <Container>
      <Wrapper>
        <ReasonsProps
          img={img1}
          title="Everything together"
          desc="With everything in one space, you don't need to switch between different apps to get work done."
        />
        <ReasonsProps
          img={img2}
          title="Works for everyone"
          desc="Create as many spaces as you want and add as many people as you need. Works across organizations."
        />
        <ReasonsProps
          img={img3}
          title="Keep work at work"
          desc="Switch to a more asynchronous way of working. Less distractions, less meetings, and more time for yourself."
        />
        <ReasonsProps
          img={img2}
          title="Works for everyone"
          desc="Create as many spaces as you want and add as many people as you need. Works across organizations."
        />
      </Wrapper>
    </Container>
  );
};

export const ReasonsProps = ({ img, title, desc }) => {
  return (
    <ContainerProps>
      <WrapperProps>
        <Title>{title}</Title>
        <Image src={img} />
        <Desc>{desc}</Desc>
      </WrapperProps>
    </ContainerProps>
  );
};

const Title = styled.div`
  font-weight: 900;
  font-size: 27px;
  margin: 5px;
`;
const Image = styled.img`
  width: 250px;
  height: 200px;
  object-fit: contain;
  margin: 10px 0;
`;
const Desc = styled.div`
  margin: 10px;
  font-size: 20px;
  padding-bottom: 30px;
`;

const ContainerProps = styled.div`
  width: 300px;
  /* height: 450px; */
  border-radius: 10px;
  border: 2px solid gray;
  margin: 10px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.97);
  }
`;
const WrapperProps = styled.div`
  width: 300px;
  /* height: 450px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 600px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
