import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./newfooter.css";
import cigLogo from "./images/cig_logo.png";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Newfooter() {
  return (
    <MDBFooter className=" footer text-center text-lg-start">
      <section className="p-5">
        <MDBContainer className="text-center text-md-start mt-4">
          <MDBRow className="mt-3">
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Information</h6>
              <p>
                <a href="#!" className="text-reset">
                  Our Projects
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Resources
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Team
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Collaborate</h6>
              <p>
                <a href="#!" className="text-reset">
                  Deliver Lecture
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Start Project
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Conduct Workshop
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                cig@iitr.ac.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                13332-28-6264
              </p>
              <p>
                <MDBIcon icon="home" className="me-2" />
                SAC, IIT Roorkee Roorkee, Uttrakhand, India- 247667
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={cigLogo} alt="logo" />
                <span className="m-2">CIG</span>
              </h6>
              <p>
                We bring Corporate and Academia together for valuable
                collaborations.
              </p>
              <div>
                <a href="#/" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#/" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#/" className="me-4 text-reset">
                  <MDBIcon fab icon="google" />
                </a>
                <a href="#/" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href="#/" className="me-4 text-reset">
                  <MDBIcon fab icon="linkedin" />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
