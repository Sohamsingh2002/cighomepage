import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./testimonial.css";
import Comma from "./images/comma.svg";
import Inverted from "./images/inverted.png";
export default function Testimonial() {
  return (
    <MDBContainer className="my-5">
      <MDBCarousel showControls dark>
        <h1>Testimonials</h1>
        <MDBCarouselItem className="active text-center">
          <h2>Director's Message</h2>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3"> Dr. Ajit Kumar Chaturvedi</h5>
              <h6>Director, IIT Roorkee</h6>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                <img src={Comma} alt="comma-quote" />
                &nbsp; &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur
              </p>
              <img id="inverted" src={Inverted} alt="inverted-quote" />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        <MDBCarouselItem className="text-center">
          <h2>Alum's Message</h2>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">Abhishek Jain</h5>
              <h6>Alumni</h6>
              <p className="text-muted">
                <img src={Comma} alt="comma-quote" />
                <MDBIcon fas icon="quote-left" className="pe-2" />
                &nbsp; &nbsp;My time at CIG has been a wonderful journey. I got
                great exposure to many things involving industry, research, and
                academia. I got a chance to work with the IIT Roorkee
                administration - particularly SRIC office. I had the pleasure to
                meet and work with some really great self-motivated people who
                formed the CIG team.
              </p>
              <img id="inverted" src={Inverted} alt="inverted-quote" />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        <MDBCarouselItem className="text-center">
          <h2>Alum's Message</h2>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">Meghraj Bhoyar</h5>
              <h6>Alumni</h6>
              <p className="text-muted">
                <img src={Comma} alt="comma-quote" />
                <MDBIcon fas icon="quote-left" className="pe-2" />
                &nbsp; &nbsp; My journey from a volunteer to the chairperson of
                the group started when I worked as a volunteer for my first
                event “Big boom” on the campus. After that, I officially joined
                this group as a designer. I think not only our CIG group but any
                group in IITR is not just a group it’s a family and CIG was that
                family who helped me to overcome my own insecurity, anxiety, and
                fear. CIG gave me an opportunity to prove myself.
              </p>
              <img id="inverted" src={Inverted} alt="inverted-quote" />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
}
