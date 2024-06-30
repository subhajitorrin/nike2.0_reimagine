import React, { useEffect, useState } from "react";
import "./MovingCards.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import card1 from "../../assets/MovingCards/asset 28.jpeg";
import card2 from "../../assets/MovingCards/asset 29.jpeg";
import card3 from "../../assets/MovingCards/card3.mp4";
import card4 from "../../assets/MovingCards/asset 31.jpeg";
import card5 from "../../assets/MovingCards/asset 22.jpeg";
import card6 from "../../assets/MovingCards/asset 23.jpeg";
import card7 from "../../assets/MovingCards/asset 25.jpeg";

function MovingCards() {
  function handelLog() {
    console.log("Form section");
  }
  return (
    <div className="movingCardsContainer  bg-black h-screen" onClick={handelLog}>
      <div className="cardsContainer">
        <div className="card card1">
          <img src={card1} alt="" />
        </div>
        <div className="card card2 ">
          <img src={card2} alt="" className="scale-[1.5]" />
        </div>
        <div className="card card3  rounded-[30px]">
          <video src={card3} autoPlay muted loop className="rounded-[30px]" />
        </div>
        <div className="card card4">
          <img src={card4} alt="" />
        </div>
        <div className="card56Container">
          <div className="card card6">
            <img src={card6} alt="" />
          </div>
          <div className="card card5">
            <img src={card5} alt="" />
          </div>
        </div>
        <div className="card card7">
          <img src={card7} alt="" />
        </div>
      </div>
      <div className="cardsContainer">
        <div className="card card1">
          <img src={card1} alt="" />
        </div>
        <div className="card card2 ">
          <img src={card2} alt="" className="scale-[1.5]" />
        </div>
        <div className="card card3">
          <video src={card3} autoPlay muted loop className="rounded-[30px]" />
        </div>
        <div className="card card4">
          <img src={card4} alt="" />
        </div>
        <div className="card56Container">
          <div className="card card6">
            <img src={card6} alt="" />
          </div>
          <div className="card card5">
            <img src={card5} alt="" />
          </div>
        </div>
        <div className="card card7">
          <img src={card7} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MovingCards;
