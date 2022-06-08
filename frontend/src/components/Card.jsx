import React, { useState } from "react";

import { useSpring, animated } from "react-spring";
import Styles from "./Card.module.css";

function Card({ imagen, linkto }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(0.8)" : "scale(0.6)",
    boxShadow: show
      ? "2 10px 25px rgb(0 0 0 / 10%)"
      : "2 2px 10px rgb(0 0 0 / 50%)",
  });

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={linkto}
    >
      <img src={imagen} alt="" />
    </animated.div>
  );
}

export default Card;
