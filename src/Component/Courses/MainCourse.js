import React from "react";
import styled from "styled-components";
import { AiOutlineFolderAdd, AiFillMinusCircle } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import { app } from "./../../base";
import myIcon from "./avatar.png";
import firebase from "firebase";

const MainCourse = () => {
  const [toggle, setToggle] = React.useState(false);

  const [instructImage, setInstructImage] = React.useState("");

  const [keyInput, setKeyInput] = React.useState([{ area: "" }]);

  // const [instructImage1, setInstructImage1] = React.useState(myIcon);

  const [instructorInput, setInstructorInput] = React.useState([
    { name: "", stack: "", img: instructImage },
  ]);

  const [schemeInput, setSechmeInput] = React.useState([
    { title: "", desc: "" },
  ]);

  const [desc, setDesc] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [icon, setIcon] = React.useState(myIcon);
  const [mainIcon, setMainIcon] = React.useState(myIcon);

  const [name, setName] = React.useState("");
  const [percent, setPercent] = React.useState(0.00001);
  const [percentMainIcon, setPercentMainIcon] = React.useState(0.00001);

  const uploadIcon = async (e) => {
    const file = e.target.files[0];
    const savePix = URL.createObjectURL(file);
    setIcon(savePix);

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("avatar/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapShot) => {
        const counter = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

        setPercent(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setIcon(URL);
          console.log(URL);
        });
      }
    );
  };

  const uploadInstructorImage = async (e) => {
    const file = e.target.files[0];
    const savePix = URL.createObjectURL(file);
    setInstructImage(savePix);

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("avatar/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapShot) => {
        const counter = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

        setPercent(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setInstructImage(URL);
          console.log("instructImage: ", instructImage, URL);
        });
      }
    );
  };

  const uploadMainIcon = async (e) => {
    const file = e.target.files[0];
    const savePix = URL.createObjectURL(file);
    setMainIcon(savePix);

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("avatar/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapShot) => {
        const counter = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

        setPercent(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setMainIcon(URL);
          console.log(URL);
        });
      }
    );
  };

  const onSchemeData = (i, e) => {
    const values = [...schemeInput];
    values[i][e.target.name] = e.target.value;
    setSechmeInput(values);
  };

  const addMoreScheme = () => {
    setSechmeInput([...schemeInput, { area: "" }]);
  };
  const removeMoreScheme = (i) => {
    const values = [...schemeInput];
    values.splice(i, 1);
    setSechmeInput(values);
  };

  const onInstructorData = (i, e) => {
    const values = [...instructorInput];
    values[i][e.target.name] = e.target.value;
    setInstructorInput(values);
  };

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
    const values = [...keyInput];
    values.splice(i, 1);
    setKeyInput(values);
  };

  const uploadACourse = async () => {
    app.firestore().collection("course").doc().set({});
  };

  return (
    <Container>
      <Wrapper>
        <Card>
          <CardHolder>
            <CourseHolder>
              <InputHolder>
                <Label>Course Icon</Label>
                <Div>
                  <ImageLabel1 htmlFor="pixx">Upload Icon</ImageLabel1>
                  <MainInputimage
                    placeholder="Name"
                    id="pixx"
                    type="file"
                    onChange={uploadIcon}
                  />

                  <InstructorsImage src={icon} />
                </Div>
              </InputHolder>
              <InputHolder>
                <Label>Course Main Image</Label>
                <Div>
                  <ImageLabel1 htmlFor="pixx1">Upload Main Image</ImageLabel1>
                  <MainInputimage
                    placeholder="Name"
                    id="pixx1"
                    type="file"
                    onChange={uploadMainIcon}
                  />

                  <InstructorsImage src={mainIcon} />
                </Div>
              </InputHolder>

              <InputHolder>
                <Label>Course Title</Label>
                <MainInput
                  placeholder="Enter Course Title"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </InputHolder>

              <InputHolder>
                <Label>Brief Description of Course</Label>
                <MainInput
                  placeholder="Enter Briefly, Course Description"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </InputHolder>

              <InputHolder>
                <Label>Detail Description of Course</Label>
                <MainInputArea
                  placeholder="Enter Course Description in details"
                  value={details}
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                />
              </InputHolder>

              <InputHolder>
                <Label>Key Focused Area:</Label>

                {keyInput.map((props, i) => (
                  <Key key={i}>
                    <MainInput
                      placeholder={`Enter key focus ${i + 1}`}
                      name="area"
                      value={props.area}
                      onChange={(e) => {
                        onPost(i, e);
                      }}
                    />
                    <Icon
                      cl="red"
                      hcl="#09386d"
                      onClick={() => {
                        removeMore(i);
                      }}
                    >
                      {keyInput.length <= 1 ? null : <AiFillMinusCircle />}
                    </Icon>
                    <Icon
                      cl="green"
                      hcl="#09386d"
                      onClick={() => {
                        addMore();
                      }}
                    >
                      {keyInput.length < 4 ? <BiAddToQueue /> : null}
                    </Icon>
                  </Key>
                ))}
              </InputHolder>

              {instructorInput.map((props, i) => (
                <InputHolder key={i}>
                  <Label>Instructor's Detail</Label>

                  <Instrct>
                    <Label1>Instructor's Name</Label1>
                    <MainInput
                      placeholder="Instructor's Name"
                      name="name"
                      value={props.name}
                      onChange={(e) => {
                        onInstructorData(i, e);
                      }}
                    />
                  </Instrct>
                  <Instrct>
                    <Label1>Instructor's Stack</Label1>
                    <MainInput
                      placeholder="Instructor's Stack"
                      name="stack"
                      value={props.stack}
                      onChange={(e) => {
                        onInstructorData(i, e);
                      }}
                    />
                  </Instrct>

                  <Instrct>
                    <Label1>Instructor's Image</Label1>
                    <ImageLabel1 htmlFor="pixx">Upload Image</ImageLabel1>
                    <MainInputimage
                      id="pixx"
                      type="file"
                      name="img"
                      value={props.img}
                      onChange={uploadInstructorImage}
                    />

                    <InstructorsImage src={""} />
                    <button
                      onClick={() => {
                        console.log(
                          "instructImage: ",
                          instructImage,
                          instructorInput
                        );
                      }}
                    >
                      enter
                    </button>
                  </Instrct>
                </InputHolder>
              ))}
            </CourseHolder>

            <MediaHolder>
              <Label1>Course's Curriculum</Label1>
              {schemeInput.map((props, i) => (
                <Fade key={i}>
                  <Scheme>
                    <Label1>Chapter {i + 1}</Label1>

                    <MainInput
                      placeholder="Enter Topic"
                      name="title"
                      value={props.title}
                      onChange={(e) => {
                        onSchemeData(i, e);
                      }}
                    />

                    <MainInputArea
                      placeholder="Enter Topic description"
                      name="desc"
                      value={props.desc}
                      onChange={(e) => {
                        onSchemeData(i, e);
                      }}
                    />
                  </Scheme>
                  <IconHolder>
                    <Icon
                      cl="red"
                      hcl="#09386d"
                      onClick={() => {
                        removeMoreScheme(i);
                      }}
                    >
                      {schemeInput.length <= 1 ? null : <AiFillMinusCircle />}
                    </Icon>
                    <Icon
                      cl="green"
                      hcl="#09386d"
                      onClick={() => {
                        addMoreScheme();
                      }}
                    >
                      {schemeInput.length <= 6 ? <BiAddToQueue /> : null}
                    </Icon>
                  </IconHolder>
                </Fade>
              ))}

              <Button>Submit Course </Button>
            </MediaHolder>
          </CardHolder>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default MainCourse;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #09386d;
  border-radius: 5px;
  color: white;
  /* margin-top: 30px; */
  margin: 30px auto;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
`;

const IconHolder = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  margin-top: 10px;
`;

const Scheme = styled.div`
  width: 300px;
  margin-top: 30px;
`;

const InstructorsImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid gray;
  object-fit: cover;
`;

const MainInputimage = styled.input`
  display: none;
  flex: 1;
`;

const Instrct = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Key = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-left: 10px;
  font-size: 30px;
  display: flex;
  color: ${({ cl }) => cl};

  :hover {
    cursor: pointer;
    color: ${({ hcl }) => hcl};
  }
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const ImageLabel1 = styled.label`
  margin-right: 40px;
  font-weight: bold;
  padding: 5px 10px;
  background-color: #09386d;
  color: white;
  border-radius: 40px;
  transform: scale(1);
  transition: all 350ms;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;

  :hover {
    transform: scale(0.96);
    cursor: pointer;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  margin-top: 30px;
  font-weight: bold;
`;
const Label1 = styled.label`
  font-weight: bold;
  margin-right: 10px;
  font-size: 13px;
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
  /* margin-left: 20px; */
  margin-left: 50px;
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
