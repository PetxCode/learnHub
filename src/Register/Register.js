import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("simple.png");
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const savePix = URL.createObjectURL(file);
    setImage(savePix);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Log in to your account</Title>
        <Card>
          <Holder>
            {" "}
            <Image src={image} />
            <ImageLable htmlFor="pix">Upload your Image </ImageLable>
            <ImageInput type="file" id="pix" />
          </Holder>
          <Label>Name</Label>
          <MainInput
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Label>Email</Label>
          <MainInput
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Label>Password</Label>
          {toggle ? (
            <PassHold>
              <MainInputPass
                placeholder="Enter your Password"
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <MdVisibility
                style={{
                  cursor: "pointer",
                  marginRight: "10px",
                }}
                onClick={onToggle}
              />
            </PassHold>
          ) : (
            <PassHold>
              <MainInputPass
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <MdVisibilityOff
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                onClick={onToggle}
              />
            </PassHold>
          )}

          <Button bg="#09386d">Register</Button>

          <Line />

          <Button>
            <FcGoogle />
            <span>Register with Google</span>
          </Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

// const Button = styled.div``
const Line = styled.div`
  border-top: 1px solid lightgray;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
`;

const Button = styled.div`
  margin: 20px auto;
  margin-top: 40px;
  background-color: ${({ bg }) => bg};
  border: 2px solid #09386d;
  width: 80%;
  height: 60px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  padding-right: 10px;
  transition: all 350ms;
  transform: scale(1);
  border-radius: 3px;

  :hover {
    transform: scale(0.99);
  }

  span {
    margin-left: 10px;
  }
`;

const PassHold = styled.div`
  display: flex;
  border: 2px solid lightgray;
  width: 80%;
  margin: 0 auto;
  align-items: center;

  padding-right: 10px;
`;

const MainInputPass = styled.input`
  /* width: 80%; */
  height: 40px;
  margin: 0 auto;
  border: 0;
  outline: none;
  border-radius: 3px;
  font-size: 18px;
  padding-left: 10px;
  flex: 1;
  ::placeholder {
    font-family: Raleway;
    color: lightgray;
  }

  :hover {
    /* border: 2px solid #14297c; */
  }
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid lightblue;
  object-fit: cover;
  margin-bottom: 20px;
`;
const ImageInput = styled.input`
  display: none;
`;
const ImageLable = styled.label`
  background-color: coral;
  padding: 10px 15px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;

const Label = styled.label`
  margin: 10px auto;
  width: 80%;
  margin-top: 30px;
`;

const MainInput = styled.input`
  width: 80%;
  height: 40px;
  margin: 0 auto;
  border: 2px solid lightgray;
  outline: none;
  border-radius: 3px;
  font-size: 18px;
  padding-left: 10px;
  ::placeholder {
    font-family: Raleway;
    color: lightgray;
  }

  :hover {
    border: 2px solid #14297c;
  }
`;

const Card = styled.div`
  width: 600px;
  background-color: white;
  height: 700px;
  border-radius: 5px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  margin: 20px;
  font-size: 20px;
`;

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 100px;
  background-color: #f8f9fc;
`;
