import React, { useEffect, useState } from "react";
import "./MovingCards.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const card1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831358/asset_28_jgcvxw.jpg";
const card2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831361/asset_29_erhrui.jpg";
const card3 = "https://res.cloudinary.com/difxhccup/video/upload/v1719831374/card3_xhignc.mp4";
const card4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831361/asset_31_lqiosi.jpg";
const card5 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831356/asset_22_uw6omx.jpg";
const card6 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831349/asset_23_lcsgiw.jpg";
const card7 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831351/asset_25_x0rm9j.jpg";

function MovingCards() {
  function handelLog() {
    console.log("Form section");
  }
  return (
    <div className="movingCardsContainer  bg-[#0c0b0a] h-screen" onClick={handelLog}>
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
