import React from "react";
// import logo from "./logo.svg";
import "./footer.css";
import { Link } from "react-router-dom";
// import rectangle from "./images/rectangle.png";
import iitr from "./images/iitr.png";
import cig_logo from "./images/cig_logo.png";
import msg from "./images/msg.png";
import call from "./images/call.png";
import location from "./images/location.png";
import luv from "./images/luv.png";
import lnk from "./images/lnk.png";
import fb from "./images/fb.png";
import link from "./images/linkdin.svg";
import fb_hov from "./images/fb.svg";

class Footer extends React.Component {
  render() {
    return (
      <div id="rect">
        <img id="foot" src={iitr} alt="foot" />
        <img id="foot_b" src={cig_logo} alt="foot_b" />
        <img id="msg" src={msg} alt="msg" />
        <img id="call" src={call} alt="call" />
        <img id="location" src={location} alt="location" />
        <img id="luv" src={luv} alt="luv" />
        <img id="lnk" src={lnk} alt="lnk" />
        <img id="fb" src={fb} alt="fb" />
        <img id="lnk_hov" src={link} alt="lnk_hov" />
        <img id="fb_hov" src={fb_hov} alt="fb_hov" />

        <div id="footer_a">
          We bring Corporate and Academia together for valuable collaborations.
        </div>
        <div id="footer_b">For institute details visit </div>
        <a id="footer_c" href="https://www.iitr.ac.in/">
          www.iitr.ac.in
        </a>
        <Link to="/contact" id="footer_d">
          Information
        </Link>
        <Link to="/contact" id="footer_e">
          Our Projects
        </Link>
        <Link to="/contact" id="footer_f">
          Resources
        </Link>
        <Link to="/contact" id="footer_g">
          Team
        </Link>
        <a href="/" id="footer_h">
          Collaborate{" "}
        </a>
        <a href="/" id="footer_i">
          Deliver Lecture{" "}
        </a>
        <a href="/" id="footer_j">
          Start Project{" "}
        </a>
        <a href="/" id="footer_k">
          Conduct Workshop{" "}
        </a>
        <a href="/" id="footer_l">
          contact us{" "}
        </a>
        <a href="/" id="footer_m">
          cig@iitr.ac.in{" "}
        </a>
        <a href="/" id="footer_n">
          13332-28-6264{" "}
        </a>
        <a href="/" id="footer_o">
          {" "}
          SAC, IIT Roorkee Roorkee, Uttrakhand, India- 247667
        </a>
        <a href="/" id="footer_p">
          {" "}
          Crafted with{" "}
        </a>
        <a href="/" id="footer_q">
          {" "}
          by Design Studio
        </a>
      </div>
    );
  }
}

export default Footer;
