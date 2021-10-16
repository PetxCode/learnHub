import React from "react";
import styled from "styled-components";
import { AiOutlineFolderAdd, AiFillMinusCircle } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";

const MainCourse = () => {
  const [keyInput, setKeyInput] = React.useState([{ area: "" }]);

  const onPost = (i, e) => {
    const values = [...keyInput];
    values[i][e.target.name] = e.target.value;
    setKeyInput(values);
  };

  const onSubmit = (e) => {
    console.log(keyInput);
  };

  const addMore = () => {
    setKeyInput([...keyInput, { area: "" }]);
  };
  const removeMore = (i) => {
    // const remove = keyInput.filter((el) => el.id !== i);
    // setKeyInput(remove);
    // console.log("Hello");

    const values = [...keyInput];

    values.splice(i, 1);
    setKeyInput(values);
  };
  return (
    <Container>
      <Wrapper>
        <Card>
          <CardHolder>
            <CourseHolder>
              <InputHolder>
                <Label>Course Title</Label>
                <MainInput placeholder="Enter" />
              </InputHolder>

              <InputHolder>
                <Label>Brief Description of Course</Label>
                <MainInput placeholder="Enter" />
              </InputHolder>

              <InputHolder>
                <Label>Detail Description of Course</Label>
                <MainInputArea placeholder="Enter" />
              </InputHolder>

              <InputHolder>
                <Label>Key Focused Area:</Label>

                {keyInput.map((props, i) => (
                  <Key key={i}>
                    <MainInput
                      placeholder="Enter"
                      name="area"
                      value={props.area}
                      onChange={(e) => {
                        onPost(i, e);
                      }}
                    />
                    <Icon
                      onClick={() => {
                        removeMore(i);
                      }}
                    >
                      <AiFillMinusCircle />
                    </Icon>
                    <Icon
                      onClick={() => {
                        addMore();
                      }}
                    >
                      <BiAddToQueue />
                    </Icon>
                  </Key>
                ))}
              </InputHolder>
            </CourseHolder>

            <MediaHolder>Media</MediaHolder>
          </CardHolder>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default MainCourse;

const Key = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  margin-left: 10px;
  font-size: 30px;
  display: flex;

  :hover {
    cursor: pointer;
    color: #09386d;
  }
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  margin-top: 30px;
  font-weight: bold;
`;

const MainInput = styled.input`
  margin: 5px 0;
  height: 40px;
  width: 100%;
  padding-left: 10px;
  outline: none;
  border: 1px solid lightgray;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

  ::placeholder {
    font-family: Raleway;
  }
`;

const MainInputArea = styled.textarea`
  height: 200px;
  resize: none;
  width: 350px;
  padding-left: 10px;
  outline: none;
  border: 1px solid lightgray;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

  ::placeholder {
    font-family: Raleway;
  }
`;

const CourseHolder = styled.div`
  margin: 10px;
`;
const MediaHolder = styled.div`
  margin: 10px;
`;
const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 80%;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  min-height: 500px;
`;
const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 100px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
