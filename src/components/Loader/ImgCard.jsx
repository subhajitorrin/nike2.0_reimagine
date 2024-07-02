import React, { useEffect, useState } from "react";
import "./Loader.css";
import gsap from "gsap";
import { FadeLoader, PulseLoader } from "react-spinners";

const card1 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719831220/shoe6_tod0ha.jpg";
const card2 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719831220/shoe5_hgiuph.jpg";
const card4 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719831219/shoe4_ijks4p.jpg";
const card5 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719831219/shoe3_v49rum.jpg";
const card6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719831219/shoe2_k30k1f.jpg";
const card7 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719831218/shoe1_ku2u1d.jpg";

const cardsArr = [card1, card2, card4, card5, card6, card7];

function ImgCard({ isLoading }) {
  const [imgList, setImgList] = useState(cardsArr);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const promises = imgList.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, [imgList]);

  useEffect(() => {
    if (imagesLoaded) {
      const animation = gsap.to(".imgCard", {
        display: "block",
        stagger: 0.6,
        paused: !isLoading,
      });

      return () => {
        animation.kill();
      };
    }
  }, [isLoading, imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="absolute top-[40%] left-[40%] ">
        <FadeLoader color="#e13251" />
      </div>
    );
  } else {
    return (
      <>
        {imgList.map((item, index) => {
          const len = imgList.length;
          const rotation =
            index < len / 2 ? `-${index * 5}deg` : `${index * 5 - 20}deg`;
          return (
            <div
              key={`imgCard1-${index}`}
              className="imgCard"
              style={{ transform: `rotate(${rotation})` }}
            >
              <img src={item} alt="" />
            </div>
          );
        })}
        {imgList.map((item, index) => {
          const len = imgList.length;
          const rotation =
            index < len / 2 ? `-${index * 5}deg` : `${index * 5 - 20}deg`;
          return (
            <div
              key={`imgCard2-${index}`}
              className="imgCard"
              style={{ transform: `rotate(${rotation})` }}
            >
              <img src={item} alt="" />
            </div>
          );
        })}
      </>
    );
  }
}

export default ImgCard;
