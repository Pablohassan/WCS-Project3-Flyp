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
    content: <FlypCard />,
  },
  {
    key: 2,
    content: <FlypCard />,
  },
  {
    key: 3,
    content: <FlypCard />,
  },
  {
    key: 4,

    content: <FlypCard />,
  },
  {
    key: 5,
    content: <FlypCard />,
  },
  {
    key: 6,
    content: <FlypCard />,
  },
  {
    key: 7,
    content: <FlypCard />,
  },
];

const verticalStyle = {
  width: "90vw",

  fontsize: "10px",
  background: "transparent",
};

const horizontalStyle = {
  ...verticalStyle,
  transform: "rotate(90deg)",

  fontsize: "10px",
};

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      offsetRadius: 4,
      showNavigation: false,
      config: config.molasses,
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
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
          onClick={this.handleClick}
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
