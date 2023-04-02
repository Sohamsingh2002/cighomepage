import React, { Component } from "react";
import "./Background.css";
import down from "../images/down.svg";

class Background extends Component {
  render() {
    return (
      <div className="outer_container">
        <div id="aboutbg">
          <div id="about_data">
            <div id="about_us_head_tag">
              <h1>{this.props.heading}</h1>
            </div>
            <div id="about_us_head_data">
              <p>{this.props.text}</p>
            </div>
            <div id="about_us_head_downsign">
              <img alt="icon" src={down} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
