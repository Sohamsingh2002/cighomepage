import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
//import Fab from "@material-ui/core/Fab";
import { Fab } from "@mui/material";

//import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
//import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "./Slide.css";
import { Slide } from "./Slide";

const data = [
  {
    heading: "Samsung Workshop",

    // image: "https://picsum.photos/200/300/?random=1",
    image: require("./images/er.jpg"),
    text: "Technology workshop on “Advanced Embedded Technology” presented by the eminent personalities, who are from the largest overseas R&D Centre of Samsung Electronics, Samsung Research Institute, Bangalore (SRI-B). This event is being conducted by the joint efforts of the CSE department and the CIG",
  },
  {
    heading: "Shrishti 2019",

    // image: "https://picsum.photos/200/300/?random=12",
    image: require("./images/armr.jpg"),

    text: "Shrishti is an annual event of IIT Roorkee where students from various technical groups and sections showcase their work to the other students and Faculty of IIT Rookee. CIG invited many eminent personalities from Corporate World to Shrishti, some of them include Aditya Birla Group, Maruti Suzuki etc.",
  },
  {
    heading: "Workshop On Space Technology",

    // image: "https://picsum.photos/200/300/?random=13",
    image: require("./images/zeik.jpg"),

    text: "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO",
  },
];

function Pagination(props) {
  const { centerSlideDataIndex, updatePosition } = props;
  console.log("🚀 ~ centerSlideDataIndex--000", centerSlideDataIndex);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: 20,
      }}
    >
      {data.map((_, index) => {
        const isCenterSlide = props.centerSlideDataIndex === index;
        return (
          <div
            onClick={() => {
              updatePosition(index);
            }}
            style={{
              height: 15,
              width: 15,
              borderRadius: "100%",
              background: isCenterSlide ? "black" : "none",
              border: "1px solid black",
              cursor: "pointer",
            }}
          />
        );
      })}
    </div>
  );
}

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);
  const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);
  const onCenterSlideDataIndexChange = (newIndex) => {
    setCenterSlideDataIndex(newIndex);
  };

  const updatePosition = (index) => {
    console.log("🚀 ~ ition ~ index", index);
    console.log("🚀 ~centerSlideDataIndex--111", centerSlideDataIndex);
    console.log("🚀 subtract", index - centerSlideDataIndex);
    ref?.current?.swipeTo(index - centerSlideDataIndex);
  };

  return (
    <div className="card">
      <div id="featured">
        <h1>Featured Works</h1>
      </div>
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={550}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
                onActiveSlideChange={onCenterSlideDataIndexChange}
              />
            );
          }}
        />
        <Fab
          className="card-button left"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="card-button right"
          size="small"
          onClick={() => ref.current?.goNext()}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
      <Pagination
        updatePosition={updatePosition}
        centerSlideDataIndex={centerSlideDataIndex}
      />
    </div>
  );
};

export default CardExample;
