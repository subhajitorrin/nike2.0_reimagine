import React from "react";
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
// import NikeLogoBg from "../../assets/NikeLogoBg.jpeg"

function handleMovement(e){
    let Moveimg = document.querySelectorAll('.HeroShoe')
    Moveimg.forEach(item => {
        const Axis = item.getBoundingClientRect()
        const x = (e.clientX-Axis.left)/Axis.width;
        const y = (e.clientY-Axis.top)/Axis.height;
        const Movex = (x-0.2)*20;
        const Movey = (y-0.2)*20;
        item.style.transform = `translate(${Movex}px,${Movey}px)`
    });
    
} 


function handleEnter1(){
    let IncreaseDiv1 = document.querySelector('.lengthdiv1');
    console.log('hey');
    IncreaseDiv1.style.width='110%';
    IncreaseDiv1.style.height='110%';
}
function handleLeave1(){
    let IncreaseDiv1 = document.querySelector('.lengthdiv1');
    IncreaseDiv1.style.width='0%';
    IncreaseDiv1.style.height='0%';
}
function handleEnter2(){
    let IncreaseDiv2 = document.querySelector('.lengthdiv2');
    console.log('hey');
    IncreaseDiv2.style.width='110%';
    IncreaseDiv2.style.height='110%'
}
function handleLeave2(){
    let IncreaseDiv2 = document.querySelector('.lengthdiv2');
    IncreaseDiv2.style.width='0%';
    IncreaseDiv2.style.height='0%'
}


function SwipeComponent() {
  return (
    <>
      <div className="Bg-container" onMouseMove={handleMovement} >
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
          autoplay={{
              delay:4000,
              disableOnInteraction:false
          }}
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
        >   
        <span className="BgText">Be Legendary<br></br><SiNike className="NikeLogoBg"/></span>
        
          <SwiperSlide className="slider">
            {/* <video className='ShoePlatform' autoPlay muted playsInline loop>
                    <source src={GrassPlatform}></source>
                </video> */}
            <div className="SwipeDiv">
            {/* <div className="flashLightEffectDiv"></div> */}
              <img src={AirJordan} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={GrassPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="SwipeDiv">
              <img src={Dunk} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={RockyPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="SwipeDiv">
              <img src={Blazer} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={RoadPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="SwipeDiv">
              <img src={AirForce} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={ElectroPlatform} alt="" />
            </div>
          </SwiperSlide>
          <div className="Prev Btn"  onMouseEnter={handleEnter1} onMouseLeave={handleLeave1}>
            <div className="lengthdiv1"></div>
          <FaArrowLeftLong className="SlideNavArrow"/>
          </div>
          <div className="Next Btn" onMouseEnter={handleEnter2} onMouseLeave={handleLeave2}>
          <div className="lengthdiv2"></div>
          <FaArrowRightLong className="SlideNavArrow"/>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default SwipeComponent;
