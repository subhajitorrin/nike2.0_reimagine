import React, { useEffect, useRef, useState } from "react";
import "./SwipeComponent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import { EffectFlip } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import { EffectCards } from "swiper/modules";
import AirJordan from "../../assets/SwipeSectionAsset/Airjordan.png";
import Dunk from "../../assets/SwipeSectionAsset/Dunk.png";
import Blazer from "../../assets/SwipeSectionAsset/Blazer.png";
import AirForce from "../../assets/SwipeSectionAsset/Airforce.png";
import GrassPlatform from "../../assets/SwipeSectionAsset/GrassPlatform.gif";
import RockyPlatform from "../../assets/SwipeSectionAsset/RockyPlatform.gif";
import ElectroPlatform from "../../assets/SwipeSectionAsset/ElectroPlatform.gif";
import RoadPlatform from "../../assets/SwipeSectionAsset/RoadPlatform.gif";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiNike } from "react-icons/si";
import { useExtractColor } from "react-extract-colors";
// import NikeLogoBg from "../../assets/NikeLogoBg.jpeg"
const airJordanXxxVii3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929199/air-jordan-xxxviii-2_wnwntt-removebg-preview_wewxtn.png";
const airMax2702 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/air-max-270-6_vvpinf-removebg-preview_nioces.png";
const customPhantomLuna6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929204/custom-phantom-luna-5_zby2ua-removebg-preview_aeucfg.png";
const jordanStadium6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929200/jordan-stadium-3_ezj9hj-removebg-preview_immejp.png";

function handleMovement(e) {
  // let Moveimg = document.querySelectorAll(".SmallIndicatingProduct");
  // Moveimg.forEach((item) => {
  //   const Axis = item.getBoundingClientRect();
  //   const x = (e.clientX - Axis.left) / Axis.width;
  //   const y = (e.clientY - Axis.top) / Axis.height;
  //   const Movex = (x - 0.2) * 20;
  //   const Movey = (y - 0.2) * 20;
  //   item.style.transform = `translate(${Movex}px,${Movey}px)`;
  // });
}

function handleEnter1() {
  let IncreaseDiv1 = document.querySelector(".lengthdiv1");
  // console.log("hey");
  IncreaseDiv1.style.width = "110%";
  IncreaseDiv1.style.height = "110%";
}
function handleLeave1() {
  let IncreaseDiv1 = document.querySelector(".lengthdiv1");
  IncreaseDiv1.style.width = "0%";
  IncreaseDiv1.style.height = "0%";
}
function handleEnter2() {
  let IncreaseDiv2 = document.querySelector(".lengthdiv2");
  // console.log("hey");
  IncreaseDiv2.style.width = "110%";
  IncreaseDiv2.style.height = "110%";
}
function handleLeave2() {
  let IncreaseDiv2 = document.querySelector(".lengthdiv2");
  IncreaseDiv2.style.width = "0%";
  IncreaseDiv2.style.height = "0%";
}

function handleMouseMoveHero() {}

function SwipeComponent() {
  const HeroImage = [AirJordan, Dunk, Blazer, AirForce];

  let i = 0;
  let empty = [];
  for (i = 0; i < HeroImage.length; i++) {
    const { dominantColor, darkerColor, lighterColor } = useExtractColor(
      HeroImage[i]
    );
    empty[i] = dominantColor;
  }

  // const [index, setIndex] = useState(0)

  // let Finalcolor;
  // function HandleForward(){
  //   console.log(index);
  //   console.log(empty);
  //   console.log(empty[index]);

  //    console.log("Empty",empty[index])
  //    console.log("Final",Finalcolor)
  //    if(index===3 || index===-1){

  //     setIndex(0)
  //   }else{
  //   setIndex(previous=>previous+1)
  // }
  //   Finalcolor = empty[index];

  // }

  // function Handlebackward(){
  //   console.log(empty);
  //   if(index<0){
  //     setIndex(4)
  //    }
  //   setIndex(previous=>previous-1)
  //   console.log("Empty",empty[index])
  //    Finalcolor = empty[index];
  //   console.log("Final",Finalcolor)
  // }

  const [innerWidth, setinnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setinnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.pageX; // X-coordinate of the cursor
      const windowWidth = window.innerWidth; // Width of the window

      const distanceFromCenter = mouseX - windowWidth / 2; // Distance from the center of the window

      // Maximum translation in pixels (adjust as needed)
      const maxTranslation = 500;

      // Calculate translation based on percentage of distance from center
      const translation =
        maxTranslation * (distanceFromCenter / (windowWidth / 2));

      setTranslateX(translation); // Update state to move the element
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroBlur = useRef(null);
  const blurContainer = useRef(null);
  useEffect(() => {
    function handleCursorUpdate(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }
    document.addEventListener("mousemove", handleCursorUpdate);

    return () => {
      document.removeEventListener("mousemove", handleCursorUpdate);
    };
  }, []);

  useEffect(() => {
    if (blurContainer.current && heroBlur.current) {
      const rect = blurContainer.current.getBoundingClientRect();
      const x = position.x;
      const y = position.y;
      if (
        y >= rect.top + 200 &&
        y <= rect.bottom &&
        x >= rect.left &&
        x <= rect.right
      ) {
        heroBlur.current.style.scale = 1;
        heroBlur.current.style.left = `${x - 180}px`;
        heroBlur.current.style.top = `${y - 250}px`;
      } else {
        heroBlur.current.style.scale = 0;
      }
    }
  }, [position]);

  Swiper.i;
  return (
    <>
      <div className="Bg-container" onMouseMove={handleMovement}>
        <Swiper
          className="my-swiper"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFlip,
            EffectCreative,
            EffectCards,
          ]}
          navigation={{
            nextEl: ".Next.Btn",
            prevEl: ".Prev.Btn",
          }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          speed={750}
          shortSwipes={true}
          spaceBetween={0}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          //   pagination={{
          //     dynamicBullets: true,
          //     dynamicMainBullets: 1,
          //     clickable: true,
          //   }}
          // effect='cards'
          // cardsEffect={{
          //     perSlideRotate:10,
          //     slideShadows:false
          // }}
          effect="creative"
          creativeEffect={{
            perspective: true,
            prev: {
              translate: ["-100%", "100%", 0],
              rotate: [45, 0, -45],
            },
            next: {
              translate: ["100%", "100%", 0],
              rotate: [-45, 0, 45],
            },
          }}
          // onSlideNextTransitionStart={HandleForward}
          // onSlidePrevTransitionStart={Handlebackward}
        >
          <div className="BgText " ref={blurContainer} id="blurContainer">
            <div className="textOnHeroSectionSmall absolute text-[15px] w-[10rem] leading-[100%] text-black right-[22%] top-[70%] font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              consequuntur?
            </div>
            {innerWidth > 768 ? (
              <p
                className="relative"
                style={{ backgroundPositionX: `${translateX}px` }}
              >
                Elevate Your Game
                <br />
                with Nike
              </p>
            ) : (
              <p className="text-[23vw] leading-[90%] " id="mobileViewTextYeh">
                Elevate
                <br />
                Your
                <br />
                Game
              </p>
            )}
            <div
              className="heroBlur"
              ref={heroBlur}
              id="blurHero"
              style={{ opacity: innerWidth <= 768 ? "0" : "1" }}
            ></div>
          </div>

          <SwiperSlide className="slider">
          <img className="SmallIndicatingProduct" src={airJordanXxxVii3} alt></img>
          <img className="SmallIndicatingProduct" src={airJordanXxxVii3} alt></img>
          <img className="SmallIndicatingProduct" src={airJordanXxxVii3} alt></img>
          <img className="SmallIndicatingProduct" src={airJordanXxxVii3} alt></img>
            <div className="SwipeDiv">
              <img src={AirJordan} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={GrassPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
          <img className="SmallIndicatingProduct" src={airMax2702} alt></img>
          <img className="SmallIndicatingProduct" src={airMax2702} alt></img>
          <img className="SmallIndicatingProduct" src={airMax2702} alt></img>
          <img className="SmallIndicatingProduct" src={airMax2702} alt></img>
            <div className="SwipeDiv">
              <img src={Dunk} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={RockyPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
          <img className="SmallIndicatingProduct" src={customPhantomLuna6} alt></img>
          <img className="SmallIndicatingProduct" src={customPhantomLuna6} alt></img>
          <img className="SmallIndicatingProduct" src={customPhantomLuna6} alt></img>
          <img className="SmallIndicatingProduct" src={customPhantomLuna6} alt></img>

            <div className="SwipeDiv">
              <img src={Blazer} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={RoadPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
          <img className="SmallIndicatingProduct" src={jordanStadium6} alt></img>
          <img className="SmallIndicatingProduct" src={jordanStadium6} alt></img>
          <img className="SmallIndicatingProduct" src={jordanStadium6} alt></img>
          <img className="SmallIndicatingProduct" src={jordanStadium6} alt></img>
            <div className="SwipeDiv">
              <img src={AirForce} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={ElectroPlatform} alt="" />
            </div>
          </SwiperSlide>
          <div
            className="Prev Btn"
            onMouseEnter={handleEnter1}
            onMouseLeave={handleLeave1}
          >
            <div className="lengthdiv1"></div>
            <FaArrowLeftLong className="SlideNavArrow" />
          </div>
          <div
            className="Next Btn"
            onMouseEnter={handleEnter2}
            onMouseLeave={handleLeave2}
          >
            <div className="lengthdiv2"></div>
            <FaArrowRightLong className="SlideNavArrow" />
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default SwipeComponent;
