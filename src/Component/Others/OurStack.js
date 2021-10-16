import React, { useState, useEffect } from "react";
// import { Button } from "antd";

import styled from "styled-components";
import { app } from "./../../base";

const db = app.firestore().collection("stack");

const OurStack = () => {
  const [lang, setLang] = useState(false);
  const [frame, setFrame] = useState(false);
  const [dataBase, setDataBase] = useState(false);
  const [dev, setDev] = useState(false);
  const [ai, setAi] = useState(false);

  const [data, setData] = useState([]);
  const [frameData, setFrameData] = useState([]);
  const [aiData, setAiData] = useState([]);
  const [dataBaseData, setDataBaseData] = useState([]);
  const [devData, setDevData] = useState([]);

  const ProgrammingData = async () => {
    const res = await db.orderBy("Programming").onSnapshot((snapShot) => {
      const item = [];
      snapShot.forEach((doc) => {
        item.push(doc.data());
      });
      setData(item);
      // console.log(data);
    });
  };

  const FrameData = async () => {
    const res = await db.orderBy("Frameworks").onSnapshot((snapShot) => {
      const item = [];
      snapShot.forEach((doc) => {
        item.push(doc.data());
      });
      setFrameData(item);
      // console.log(data);
    });
  };

  const DataBase = async () => {
    const res = await db.orderBy("DataBase").onSnapshot((snapShot) => {
      const item = [];
      snapShot.forEach((doc) => {
        item.push(doc.data());
      });
      setDataBaseData(item);
      // console.log(data);
    });
  };

  const DevOps = async () => {
    const res = await db.orderBy("DevTool").onSnapshot((snapShot) => {
      const item = [];
      snapShot.forEach((doc) => {
        item.push(doc.data());
      });
      setDevData(item);
      console.log(devData);
    });
  };

  const AiSearch = async () => {
    const res = await db.orderBy("AI").onSnapshot((snapShot) => {
      const item = [];
      snapShot.forEach((doc) => {
        item.push(doc.data());
      });
      setAiData(item);
      console.log(aiData);
    });
  };

  useEffect(() => {
    ProgrammingData();
    FrameData();
    AiSearch();
    DataBase();
    DevOps();
  }, []);

  const handleLang = () => {
    setLang(true);
    setAi(false);
    setDataBase(false);
    setDev(false);
    setFrame(false);
  };

  const handleAi = () => {
    setLang(false);
    setAi(true);
    setDataBase(false);
    setDev(false);
    setFrame(false);
    console.log("I am here");
  };

  const handleDataBase = () => {
    setLang(false);
    setAi(false);
    setDataBase(true);
    setDev(false);
    setFrame(false);
  };

  const handleDev = () => {
    setLang(false);
    setAi(false);
    setDataBase(false);
    setDev(true);
    setFrame(false);
  };

  const handleFrame = () => {
    setLang(false);
    setAi(false);
    setDataBase(false);
    setDev(false);
    setFrame(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#182039",
        marginTop: "15px",
        padding: "30px 0",
        justifyContent: "center",
        color: "white",
      }}
    >
      <center
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "#293F92",
            color: "white",
            height: "60px",
            width: "150px",
            margin: "3px",
          }}
          onClick={handleLang}
        >
          Languages
        </Button>
        <Button
          style={{
            backgroundColor: "#293F92",
            color: "white",
            height: "60px",
            width: "150px",
            margin: "3px",
          }}
          onClick={handleFrame}
        >
          Frameworks
        </Button>
        <Button
          style={{
            backgroundColor: "#293F92",
            color: "white",
            height: "60px",
            width: "150px",
            margin: "3px",
          }}
          onClick={handleDataBase}
        >
          DataBase
        </Button>
        <Button
          style={{
            backgroundColor: "#293F92",
            color: "white",
            height: "60px",
            width: "150px",
            margin: "3px",
          }}
          onClick={handleDev}
        >
          DevOps Tooling
        </Button>
        <Button
          style={{
            backgroundColor: "#293F92",
            color: "white",
            height: "60px",
            width: "150px",
            margin: "3px",
          }}
          onClick={handleAi}
        >
          AI/ML
        </Button>
      </center>
      {frame ? (
        <center
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "70%",
            // height: "400px",
            borderRadius: "1px",
            border: "1px solid lightgray",
            marginTop: "20px",
            // padding: "20px 10px",
          }}
        >
          {frameData.map(
            ({ id, Programming, Frameworks, AI, DevTool, DataBase }) => (
              <div key={id}>
                <div
                  style={{
                    margin: "30px 20px",
                    width: "100px",
                  }}
                >
                  {Frameworks}
                </div>
              </div>
            )
          )}
        </center>
      ) : lang ? (
        <center
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "70%",
            // height: "400px",
            borderRadius: "1px",
            border: "1px solid lightgray",
            marginTop: "20px",
            // padding: "20px 10px",
          }}
        >
          {data.map(
            ({ id, Programming, Frameworks, AI, DevTool, DataBase }) => (
              <div key={id}>
                <div
                  style={{
                    margin: "30px 20px",
                    width: "100px",
                  }}
                >
                  {Programming}
                </div>
              </div>
            )
          )}
        </center>
      ) : dataBase ? (
        <center
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "70%",
            // height: "400px",
            borderRadius: "1px",
            border: "1px solid lightgray",
            marginTop: "20px",
            // padding: "20px 10px",
          }}
        >
          {dataBaseData.map(
            ({ id, Programming, Frameworks, AI, DevTool, DataBase }) => (
              <div key={id}>
                <div
                  style={{
                    margin: "30px 20px",
                    width: "100px",
                  }}
                >
                  {DataBase}
                </div>
              </div>
            )
          )}
        </center>
      ) : dev ? (
        <center
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "70%",
            // height: "400px",
            borderRadius: "1px",
            border: "1px solid lightgray",
            marginTop: "20px",
            // padding: "20px 10px",
          }}
        >
          {devData.map(
            ({ id, Programming, Frameworks, AI, DevTool, DataBase }) => (
              <div key={id}>
                <div
                  style={{
                    margin: "30px 20px",
                    width: "100px",
                  }}
                >
                  {DevTool}
                </div>
              </div>
            )
          )}
        </center>
      ) : ai ? (
        <center
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "70%",
            // height: "400px",
            borderRadius: "1px",
            border: "1px solid lightgray",
            marginTop: "20px",
            // padding: "20px 10px",
          }}
        >
          {aiData.map(
            ({ id, Programming, Frameworks, AI, DevTool, DataBase }) => (
              <div key={id}>
                <div
                  style={{
                    margin: "30px 20px",
                    width: "100px",
                  }}
                >
                  {AI}
                </div>
              </div>
            )
          )}
        </center>
      ) : (
        <center
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "70%",
            // height: "400px",
            borderRadius: "1px",
            border: "1px solid lightgray",
            marginTop: "20px",
            // padding: "20px 10px",
          }}
        >
          {data.map(
            ({ id, Programming, Frameworks, AI, DevTool, DataBase }) => (
              <div key={id}>
                <div
                  style={{
                    margin: "30px 20px",
                    width: "100px",
                  }}
                >
                  {Programming}
                </div>
              </div>
            )
          )}
        </center>
      )}
    </div>
  );
};

export default OurStack;

const Button = styled.div`
  background-color: #293f92;
  color: white;
  height: 60px;
  width: 150px;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: all 350ms;
  transform: scale(1);
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 13%) 0px 16px 10px -10px;

  :hover {
    transform: scale(0.96);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
