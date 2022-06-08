import React, { useState, useEffect, useCallback } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

// import "../css/Caroussel.css";

// import img1 from "@assets/carousselimages/img1.jpg";
// import img2 from "@assets/carousselimages/img2.jpg";
// import img3 from "@assets/carousselimages/img3.jpg";

export default function CarrousselFly(props) {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const handleNext = useCallback(() => {}, []);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        nextClick={handleNext}
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
