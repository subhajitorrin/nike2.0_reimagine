import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { EffectCards, EffectCreative } from "swiper/modules";
import "swiper/css/bundle";
import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";
import { useExtractColor } from "react-extract-colors";




function ProductCard(props) {
  const images=[props.firstslide,props.secondslide,props.thirdslide,props.fourthslide,props.fifthslide]
  let i=0;
  let empty = [];
  for(i=0;i<images.length;i++){
    const { dominantColor, darkerColor, lighterColor } = useExtractColor(images[i]);
    empty[i] = dominantColor;
  }
  // console.log(empty)

  const [color1,setColor1]=useState(!false)
  const [color2,setColor2]=useState(!false)
  const [color3,setColor3]=useState(!false)
  const [color4,setColor4]=useState(!false)
  const [color5,setColor5]=useState(!false)


  return (
    <>
      <div className="bgContainer">
      
        <Swiper
          className="mySwiper"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCards,
            EffectCreative,
          ]}
        
          pagination={{
            dynamicBullets:true,
            clickable:true,
            dynamicMainBullets:0,
          }}
          longSwipes={false}
          longSwipesMs={1000}
          mousewheel={{
            invert:true,
          }}
          shortSwipes={true}
          preventClicks={true}
          speed={100}
          loop={false}
          slidesPerView={"auto"}
          centeredSlides
          // direction='vertical'
          centeredSlidesBounds={true}
          effect='cards'
          cardsEffect={{
            perSlideOffset:1,
            perSlideRotate:10,
            slideShadows:false
          }}
          
          initialSlide={2}
        >
          <div className="SwipeSee"><span>Swipe to SEE</span></div>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.firstslide})`,backgroundColor:`${empty[0]}`}}>
              <span className="ShoeName"></span>
              <FaHeart className="text-[2rem] absolute right-[8%] top-[6%] faviconProdSec" onClick={()=>{
                setColor1(previous=>!previous)
              }} style={{color: color1 ?'black':'pink'}}/>
              <button className="BuyNow" >$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.secondslide})`,backgroundColor:`${empty[1]}`}}>
              <span className="ShoeName"></span>
              <FaHeart className="text-[2rem] absolute right-[8%] top-[6%] faviconProdSec" onClick={()=>{
                setColor2(previous=>!previous)
              }} style={{color: color2 ?'black':'pink'}}/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.thirdslide})`,backgroundColor:`${empty[2]}`}}>
              <span className="ShoeName"></span>
              <FaHeart className="text-[2rem] absolute right-[8%] top-[6%] faviconProdSec"
              onClick={()=>{
                setColor3(previous=>!previous)
              }} style={{color: color3 ?'black':'pink'}}/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.fourthslide})`,backgroundColor:`${empty[3]}`}}>
              <span className="ShoeName"></span>
              <FaHeart className="text-[2rem] absolute right-[8%] top-[6%] faviconProdSec" 
              onClick={()=>{
                setColor4(previous=>!previous)
              }} style={{color: color4 ?'black':'pink'}} />
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.fifthslide})`,backgroundColor:`${empty[4]}`}}>
              <span className="ShoeName"></span>
              <FaHeart   className="text-[2rem] absolute right-[8%] top-[6%] faviconProdSec"
              onClick={()=>{
                setColor5(previous=>!previous)
              }} style={{color: color5 ?'black':'pink'}}
              />
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
      
        </Swiper>
      </div>
    </>
  );
}

export default ProductCard;
