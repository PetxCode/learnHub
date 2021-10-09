import React, { useState } from "react";
import styled from "styled-components";
import data from "./HowToHire.json";

const HowTo = () => {
  // const [data, setData] = useState([]);
  return (
    <Container>
      <Wrapper>
        {data?.map((props, i) => (
          <Card key={props.i}>
            <Ring>{i}</Ring>
            <Title>{props.title}</Title>
            <COntent>{props.text} </COntent>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default HowTo;

const Title = styled.div`
  padding-top: 80px;
  font-weight: 900;
  font-size: 40px;
  text-align: center;
`;
const COntent = styled.div`
  padding-top: 50px;
  font-size: 25px;
  text-align: center;
  margin: 0 15px;
`;

const Ring = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid gray;
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: white;
  color: black;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  margin-top: 80px;
  padding-bottom: 30px;
  color: #09386d;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  margin: 20px;
  margin-top: 60px;
  position: relative;
  border-radius: 5px;
  height: 500px;
  width: 400px;
  background: #f4f6fc;
  display: flex;
  align-items: center;
  flex-direction: column;
`;