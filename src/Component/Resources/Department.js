import React, { useState, useRef } from "react";
import "./Department.css";

import Crousel from "./caro";

import backArrow from "../images/BackArrow.svg";
import forArrow from "../images/ForArrow.svg";
import MyMobile from "../MyMobile";
import MyDesktop from "../MyDesktop";
// import AcadandSchool from "./AcadandSchool";
import { Link } from "react-router-dom";
import building from "../images/building.jpg";
import { Container, Stack } from "@mui/material";
const list = [
  { id: 1, dep: "Applied Science and Engineering" },
  { id: 2, dep: "Architecture & Planning" },
  { id: 3, dep: "Biosciences and Bioengineering" },
  { id: 4, dep: "Chemical Engineering" },
  { id: 5, dep: "Chemistry" },
  { id: 6, dep: "Civil Engineering" },
  { id: 7, dep: "Computer Science and Engineering" },
  { id: 8, dep: "Design" },
  { id: 9, dep: "Earthquake Engineering" },
  { id: 10, dep: "Earth Sciences" },
  { id: 11, dep: "Electrical Engineering" },
  { id: 12, dep: "Electronics and Communication Engineering" },
  { id: 13, dep: "Humanities and Social Sciences" },
  { id: 14, dep: "Hydrology" },
  { id: 15, dep: "Hydro and Renewable Energy" },
  { id: 16, dep: "Management studies" },
  { id: 17, dep: "Mathematics" },
  { id: 18, dep: "Mechanical and Industrial Engineering" },
  { id: 19, dep: "Metallurgical and Materials Engineering" },
  { id: 20, dep: "Paper Technology" },
  { id: 21, dep: "Physics" },
  { id: 22, dep: "Polymer and Process Engineering" },
  { id: 23, dep: "Water Resources Development and Management" },
];
const Departments = () => {
  const [background, setBackground] = useState("");
  const [clickBackground, setClickBackground] = useState("");
  const [id, setId] = useState("");
  const myRef = useRef();
  const backgroundColor_List = ["#feba10", "#f96508", "#06ca3d", "#026ba1"];
  const [depPage, setDepPage] = useState(1);

  const OnHoverHandler = () => {
    let indx;
    do {
      indx = Math.floor(4 * Math.random());
    } while (background === backgroundColor_List[indx]);
    setBackground(backgroundColor_List[indx]);
  };

  const handleSelection = (index) => {
    setId(index);
    setClickBackground(background);
    myRef.current.scrollIntoView();
  };

  const handlePageForward = () => {
    if (depPage === 4) {
      return setDepPage(1);
    }
    return setDepPage(depPage + 1);
  };

  const handlePageBackward = () => {
    if (depPage === 1) {
      return setDepPage(4);
    }
    return setDepPage(depPage - 1);
  };

  return (
    <div className="main_container">
      <h1 id="Departments_heading">Departments</h1>
      <div className="containerD">
        <MyMobile>
          {list.map((data, idx) => {
            return idx < 6 * depPage && idx >= 6 * (depPage - 1) ? (
              <div
                className={`cardD ${idx === id ? "selectedBackground" : ""}`}
                key={data.id}
                onClick={() => handleSelection(idx)}
              >
                <p>{data.dep}</p>
              </div>
            ) : null;
          })}
          <div className="counterDepartment">
            <img src={backArrow} alt="" onClick={handlePageBackward} />
            <div>
              Swipe to navigate <br /> {depPage} of 4
            </div>
            <img src={forArrow} alt="" onClick={handlePageForward} />
          </div>
        </MyMobile>
        <MyDesktop>
          {list.map((data, idx) => {
            return (
              <>
                <div
                  className={`cardD ${id === idx ? "whiteD" : ""}`}
                  key={data.id}
                  onClick={() => handleSelection(idx)}
                  onMouseEnter={OnHoverHandler}
                  style={{
                    backgroundColor: `${id === idx ? clickBackground : ""}`,
                    coloimppr: `${id === idx ? "#ffff" : ""}`,
                    "--hover_color": background,
                  }}
                >
                  {" "}
                  <Stack spacing={2}>
                    <img id="depttt" src={building} alt="dept" />

                    <p>{data.dep}</p>
                  </Stack>
                </div>
              </>
            );
          })}
        </MyDesktop>
      </div>
      {/* <div ref={myRef}></div> */}
      {/* <div
        className="crouselDep"
        id="dep"
        style={{ visibility: `${id === "" ? "hidden" : ""}` }}
      >
        {id !== "" ? (
          <>
            <h1 id="Departments_heading">{departmentinfo[id].name}</h1>
            <Crousel slides={departmentinfo[id].acadCrouselData} />
            <div className="imgDescription_Dep">
              <p>{departmentinfo[id].info1}</p>
              <p>{departmentinfo[id].info2}</p>
              <b>{departmentinfo[id].degree}</b>
              <br />
              {!departmentinfo[id].correct && !departmentinfo[id].wrong ? (
                <b>{ Branch change not applicable. }</b>
              ) : (
                <b>
                  {departmentinfo[id].bcstats}
                  {"  "}
                  {departmentinfo[id].correct}
                  {"  "}

                  { <img src={plus} alt="" /> }
                  {"  "}
                  {departmentinfo[id].wrong}
                  {"  "}
                  {departmentinfo[id].wrong ? (
                    // <img src={minus} alt="" />
                  ) : departmentinfo[id].wrong === 0 ? (
                    // <img src={minus} alt="" />
                  ) : null}
                </b>
              )}
              <br />
              <div className="button">
                <a href="/placements/2020-21">
                  <button>Placement Statistics</button>
                </a>
              </div>
            </div>
          </>
        ) : null}
      </div> */}
      {/* <AcadandSchool />  */}
    </div>
  );
};

export default Departments;
