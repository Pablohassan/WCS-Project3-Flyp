import React from "react";
// eslint-disable-next-line
import styled from "@emotion/styled";
// eslint-disable-next-line
import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";

const SlideContainer = styled.div`
  position: absolute;

  display: flex;
  transform-origin: 65% 1%;
`;

const SlideCard = styled.div`
  position: relative;
  width: 300px;
  height: 175px;
  font-size: 35px;
  display: flex;
  align-items: center;
  transform-origin: 65% 150%;
  border-radius: 8px;
  transform: ${(props) =>
    props.orientation === "vertical" ? "rotate(0deg)" : "rotate(270deg)"};
`;

const styles = {
  0: {
    transform: "translateX(0%) translateY(-110%) scale(0.7)",
    top: "50%",
    opacity: 0.9,
    zIndex: 1,
  },

  1: {
    transform: "translateX(0%) translateY(-95%) scale(0.8)",
    top: "30%",
    opacity: 0.8,
    zIndex: 2,
  },

  2: {
    transform: "translateX(1%) translateY(-75%) scale(0.9)",
    top: "44%",
    opacity: 0.9,
    zIndex: 3,
  },
  3: {
    transform: "translateX(1%) translateY(-50%) scale(1)",
    top: "47%",
    opacity: 1,
    zIndex: 4,
  },
  4: {
    transform: "translateX(1%) translateY(-10%) scale(0.9)",
    top: "50%",
    opacity: 1,
    zIndex: 4,
  },
  5: {
    transform: "translateX(0%) translateY(25%) scale(0.8)",
    top: "50%",
    opacity: 1,
    zIndex: 4,
  },
  6: {
    transform: "translateX(0%) translateY(55%) scale(0.7)",
    top: "50%",
    opacity: 0.9,
    zIndex: 5,
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
    70 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -110;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 110;
    } else if (index === totalPresentables - 1) {
      translateY = -110;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -110) {
      moveSlide(-1);
    }
    if (translateY < -120) {
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
