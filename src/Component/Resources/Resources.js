import React, { Component } from "react";
import Navbar from "../header";
import Background from "./Background";
import { BrowserRouter } from "react-router-dom";
import Departments from "./Department";
import Groups from "./Groups";

class Resources extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>

        <Background
          heading="About IITR"
          text="The IITR community is driven by a shared purpose: to make a better world through education, research, and innovation"
        />
        <Departments />
        <Groups />
      </div>
    );
  }
}

export default Resources;
