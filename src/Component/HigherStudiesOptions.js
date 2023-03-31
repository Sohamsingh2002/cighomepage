import React, { Component } from "react";
import Ellipse from "./images/Ellipse.png";
import "./HigherStudiesOptions.css";

export class HigherStudiesOptions extends Component {
  render() {
    return (
      <div id="EllipseContent">
        <div id="image">
          <div className="ellipseImage">
            <img alt="img" src={Ellipse} />
          </div>

          <h4 className="ellipseNumber">{this.props.num}</h4>
        </div>
        <div id="card_content">
          <h3 id="p1">{this.props.content1}</h3>
          <p id="p2">{this.props.content2}</p>
        </div>
      </div>
    );
  }
}

export default HigherStudiesOptions;
