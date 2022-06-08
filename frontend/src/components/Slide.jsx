import React from "react";
// eslint-disable-next-line
import styled from "@emotion/styled";
// eslint-disable-next-line
import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";

const SlideContainer = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

const SlideCard = styled.div`
  position: relative;
  width: 300px;
  height: 185px;
  background: white;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  border-radius: 8px;
  transform: ${(props) =>
    props.orientation === "vertical" ? "rotate(0deg)" : "rotate(270deg)"};
`;

const styles = {
  0: {
    transform: "translateX(0%) translateY(-200%) scale(0.8)",
    top: "22%",
    opacity: 0,
  },
  1: {
    transform: "translateX(0%) translateY(-150%) scale(0.85)",
    top: "42%",
    opacity: 0.85,
  },
  2: {
    transform: "translateX(0%) translateY(-100%) scale(0.9)",
    top: "44%",
    opacity: 0.9,
  },
  3: {
    transform: "translateX(0%) translateY(-50%) scale(0.95)",
    top: "47%",
    opacity: 0.95,
  },
  4: {
    transform: "translateX(0%) translateY(0%) scale(1)",
    top: "50%",
    opacity: 1,
  },
  5: {
    transform: "translateX(0%) translateY(50%) scale(0.95)",
    top: "51%",
    opacity: 0.95,
  },
  6: {
    transform: "translateX(0%) translateY(100%) scale(0.9)",
    top: "52%",
    opacity: 0.9,
  },
  7: {
    transform: "translateX(0%) translateY(150%) scale(0.85)",
    top: "52.5%",
    opacity: 0.85,
  },
  8: {
    transform: "translateX(0%) translateY(200%) scale(0.8)",
    top: "74%",
    opacity: 0,
  },
};

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  orientation,
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring to={styles[index]} config={animationConfig}>
      {(style) => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 10),
          }}
        >
          <SlideCard
            orientation={orientation}
            onClick={() => moveSlide(offsetFromMiddle)}
          >
            {content}
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

export default withGesture()(Slide);
