import React, { useEffect, useState } from "react";
import "./MovingCards.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import card1 from "../../assets/MovingCards/card1.jpg";
import card2 from "../../assets/MovingCards/card2.jpg";
import card3 from "../../assets/MovingCards/card3.mp4";
import card4 from "../../assets/MovingCards/card4.jpg";
import card5 from "../../assets/MovingCards/card5.jpg";
import card6 from "../../assets/MovingCards/card6.jpg";
import card7 from "../../assets/MovingCards/card7.jpg";

function MovingCards({ cursorRef }) {
  const [hoverArea, setHoverArea] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    const rect = event.target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setHoverArea({ x, y });
  }

  function handelMouseEnter() {
    gsap.to(cursorRef.current, {
      scale: 8,
    });
  }
  function handelMouseLeave() {
    gsap.to(cursorRef.current, {
      scale: 1,
    });
  }

  return (
    <div className="movingCardsContainer">
      <div className="cardsContainer">
        <div
          className="card card1"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          {/* <div
            className="overlay"
            style={{
              mask: `radial-gradient(circle at ${hoverArea.x}% ${hoverArea.y}%, transparent 0%, rgba(0, 0, 0, 0.8) 50%)`,
            }}
          ></div> */}
          <img src={card1} alt=""/>
        </div>
        <div
          className="card card2"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <img src={card2} alt="" />
        </div>
        <div
          className="card card3"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <video src={card3} autoPlay muted loop />
        </div>
        <div
          className="card card4"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <img src={card4} alt="" />
        </div>
        <div className="card56Container">
          <div
            className="card card6"
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
          >
            <img src={card6} alt="" />
          </div>
          <div
            className="card card5"
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
          >
            <img src={card5} alt="" />
          </div>
        </div>
        <div
          className="card card7"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <img src={card7} alt="" />
        </div>
      </div>
      <div className="cardsContainer">
        <div
          className="card card1"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <img src={card1} alt="" />
        </div>
        <div
          className="card card2"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <img src={card2} alt="" />
        </div>
        <div
          className="card card3"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <video src={card3} autoPlay muted loop />
        </div>
        <div
          className="card card4"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <img src={card4} alt="" />
        </div>
        <div className="card56Container">
          <div
            className="card card6"
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
          >
            <img src={card6} alt="" />
          </div>
          <div
            className="card card5"
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
          >
            <img src={card5} alt="" />
          </div>
        </div>
        <div
          className="card card7"
          onMouseEnter={handelMouseEnter}
          onMouseLeave={handelMouseLeave}
        >
          <img src={card7} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MovingCards;
