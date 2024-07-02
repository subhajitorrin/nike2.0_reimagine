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
import { IoHeartCircle } from "react-icons/io5";




function ProductCard(props) {
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
            <div className="ProductImages" style={{ backgroundImage: `url(${props.firstslide})`}}>
              <span className="ShoeName"></span>
              <IoHeartCircle className="FavouriteIcon"/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.secondslide})`}}>
              <span className="ShoeName"></span>
              <IoHeartCircle className="FavouriteIcon"/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.thirdslide})`}}>
              <span className="ShoeName"></span>
              <IoHeartCircle className="FavouriteIcon"/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.fourthslide})`}}>
              <span className="ShoeName"></span>
              <IoHeartCircle className="FavouriteIcon"/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.fifthslide})`}}>
              <span className="ShoeName"></span>
              <IoHeartCircle   className="FavouriteIcon"/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
      
        </Swiper>
      </div>
    </>
  );
}

export default ProductCard;
