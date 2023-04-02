import React, { useRef, useState } from "react";
import "./AcadandSchool.css";
import { AcadCenter } from "./Assets/AcadCenterData";
import { SchoolData } from "./Assets/SchoolData";
import Crousel from "./caro";

const AcadandSchool = () => {
  const [clickBackground, setClickBackground] = useState("");
  const [background, setBackground] = useState("");
  const backgroundColor_List = ["#feba10", "#f96508", "#06ca3d", "#026ba1"];
  const [backgroundSchool, setClickBackgroundSchool] = useState("");
  const [id, setId] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const myRef = useRef();
  const school = useRef();

  const OnHoverHandler = () => {
    let indx;
    do {
      indx = Math.floor(4 * Math.random());
    } while (background === backgroundColor_List[indx]);
    setBackground(backgroundColor_List[indx]);
  };

  const handleSchoolSelection = (index) => {
    setSchoolId(index);
    setClickBackgroundSchool(background);
    school.current.scrollIntoView();
  };

  const handleSelection = (index) => {
    setId(index);
    setClickBackground(background);
    myRef.current.scrollIntoView();
  };

  return (
    <>
      <h1 id="Acad_Heading">Academic Centers</h1>
      <div className="containeracad">
        {AcadCenter.map((centerData, idx) => {
          return (
            <div
              className={`cardAcadCenter ${id === idx ? "whiteD" : ""}`}
              key={centerData.id}
              onClick={() => handleSelection(idx)}
              onMouseEnter={OnHoverHandler}
              style={{
                backgroundColor: `${id === idx ? clickBackground : ""}`,
                color: `${id === idx ? "#ffff" : ""}`,
                "--hover_color": background,
              }}
            >
              <p>{centerData.name}</p>
            </div>
          );
        })}
      </div>
      <div ref={myRef}></div>
      <div
        className="crouselDep"
        id="dep"
        style={{ visibility: `${id === "" ? "hidden" : ""}` }}
      >
        {id !== "" ? (
          <>
            <h1 id="Departments_heading">{AcadCenter[id].name}</h1>
            <Crousel slides={AcadCenter[id].crouselData} />
            <div className="imgDescription_Dep">
              <p>{AcadCenter[id].description}</p>
              <br />
            </div>
          </>
        ) : null}
      </div>
      <h1 id="Acad_Heading">School</h1>
      <div className="containeracad">
        {SchoolData.map((centerData, idx) => {
          return (
            <div
              className={`cardAcadCenter school ${
                schoolId === idx ? "whiteD" : ""
              }`}
              key={centerData.id}
              onClick={() => handleSchoolSelection(idx)}
              onMouseEnter={OnHoverHandler}
              style={{
                backgroundColor: `${schoolId === idx ? backgroundSchool : ""}`,
                color: `${schoolId === idx ? "#ffffff" : ""}`,
                "--hover_color": background,
              }}
            >
              <p>{centerData.name}</p>
            </div>
          );
        })}
      </div>
      <div ref={school}></div>
      <div
        className="crouselDep"
        id="dep"
        style={{ visibility: `${schoolId === "" ? "hidden" : ""}` }}
      >
        {schoolId !== "" ? (
          <>
            <h1 id="Departments_heading">{SchoolData[schoolId].name}</h1>
            <Crousel slides={SchoolData[schoolId].crouselData} />
            <div className="imgDescription_Dep">
              <p>{SchoolData[schoolId].description}</p>
              <br />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default AcadandSchool;
