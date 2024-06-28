import React, { useEffect, useState } from "react";
import "./Loader.css";
import gsap from "gsap";
import card1 from "../../assets/LoaderScreenImages/shoe1.jpg";
import card2 from "../../assets/LoaderScreenImages/shoe2.jpg";
import card4 from "../../assets/LoaderScreenImages/shoe3.jpg";
import card5 from "../../assets/LoaderScreenImages/shoe4.jpg";
import card6 from "../../assets/LoaderScreenImages/shoe5.jpg";
import card7 from "../../assets/LoaderScreenImages/shoe6.jpg";

const cardsArr = [card1, card2, card4, card5, card6, card7];

function ImgCard({ isLoading }) {
  const [imgLIst, setimgLIst] = useState(cardsArr);

  useEffect(() => {
    const animation = gsap.to(".imgCard", {
      display: "block",
      stagger: 0.6,
      paused: !isLoading,
    });
    return () => {
      animation.kill(); // Clean up the animation on component unmount
    };
  }, [isLoading]);

  return (
    <>
      {imgLIst.map((item, index) => {
        const len = imgLIst.length;
        const rotation =
          index < len / 2 ? `-${index * 5}deg` : `${index * 5 - 20}deg`;
        return (
          <div key={`imgCard1-${index}`} className="imgCard" style={{ transform: `rotate(${rotation})` }}>
            <img src={item} alt="" />
          </div>
        );
      })}
      {imgLIst.map((item, index) => {
        const len = imgLIst.length;
        const rotation =
          index < len / 2 ? `-${index * 5}deg` : `${index * 5 - 20}deg`;
        return (
          <div key={`imgCard2-${index}`} className="imgCard" style={{ transform: `rotate(${rotation})` }}>
            <img src={item} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default ImgCard;
