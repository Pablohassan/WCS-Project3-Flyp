import React, { Component } from "react";
// eslint-disable-next-line
import { config } from "react-spring";
import VerticalCarousel from "./VerticalCarousel";
import FlypCard from "./FlypCard";

const slides = [
  {
    key: 0,
    content: <FlypCard />,
  },
  {
    key: 1,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/2.png"
        alt="card"
      />
    ),
  },
  {
    key: 2,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/3.png"
        alt="card"
      />
    ),
  },
  {
    key: 3,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/4.png"
        alt="card"
      />
    ),
  },
  {
    key: 4,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/5.png"
        alt="card"
      />
    ),
  },
  {
    key: 5,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/6.png"
        alt="card"
      />
    ),
  },
  {
    key: 6,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/7.png"
        alt="card"
      />
    ),
  },
  {
    key: 7,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/1.png"
        alt="card"
      />
    ),
  },
  {
    key: 8,
    content: (
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://f.hubspotusercontent00.net/hubfs/8852505/4.png"
        alt="card"
      />
    ),
  },
];

const verticalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90vw",
  height: "50vh",
};

const horizontalStyle = {
  ...verticalStyle,
  transform: "rotate(90deg)",
};

export default class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetRadius: 4,
      showNavigation: false,
      config: config.gentle,
    };
  }

  render() {
    return (
      <div
        style={
          this.props.orientation === "vertical"
            ? verticalStyle
            : horizontalStyle
        }
      >
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
          orientation={this.props.orientation}
        />
      </div>
    );
  }
}
