import React from "react";
import "./HigherStudies.css";
import "./HigherStudiesOptions";
import HigherStudiesOptions from "./HigherStudiesOptions";

const HigherStudies = () => {
  return (
    <div id="HigherStudies" className="main_container">
      <h1 id="HigherStudies_heading" className="MobileView">
        Thomasonians around the globe
      </h1>
      <div id="HigherStudies_content">
        <h1>Thomasonians around the globe</h1>
        <div id="PartFirst">
          Thomasonians have carried the legacy of our college to all parts of
          the world. IIT Roorkee students are admitted to top colleges around
          the world like Harvard, Stanford, MIT for higher studies every year.
          Time spent in Roorkee prepares students for excelling at any place
          they decide to go next.
        </div>
        <div id="PartSecond">
          <HigherStudiesOptions
            id="PS1"
            num="18"
            content1="Asia"
            content2="Israel, China, Singapore, Japan,
            South Korea, etc."
          />
          <HigherStudiesOptions
            id="PS1"
            num="22"
            content1="Europe"
            content2="Germany, England, Spain, Switzerland, France,etc."
          />
          <HigherStudiesOptions
            id="PS1"
            num="17"
            content1="America"
            content2="United States, Canada, etc."
          />
          {/* <HigherStudiesOptions
            id="PS1"
            num="230"
            content="Lorem ipsum dolor sit amet"
          />
          <HigherStudiesOptions
            id="PS1"
            num="230"
            content="Lorem ipsum dolor sit amet"
          />
          <HigherStudiesOptions
            id="PS1"
            num="230"
            content="Lorem ipsum dolor sit amet"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HigherStudies;
