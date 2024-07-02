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
import { useExtractColor } from "react-extract-colors";




function ProductCard(props) {
  const { dominantColor1, darkerColor1, lighterColor1 } = useExtractColor(props.firstslide);
  const { dominantColor2, darkerColor2, lighterColor2 } = useExtractColor(props.secondslide);
  const { dominantColor3, darkerColor3, lighterColor3 } = useExtractColor(props.thirdslide);
  const { dominantColor4, darkerColor4, lighterColor4 } = useExtractColor(props.fourthslide);
  const { dominantColor5, darkerColor5, lighterColor5 } = useExtractColor(props.fifthslide);
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
            <div className="ProductImages" style={{ backgroundImage: `url(${props.firstslide})`,backgroundColor:`${dominantColor1}`}}>
              <span className="ShoeName"></span>
              <IoHeartCircle className="FavouriteIcon"/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.secondslide})`,backgroundColor:`${dominantColor2}`}}>
              <span className="ShoeName"></span>
              <IoHeartCircle className="FavouriteIcon"/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.thirdslide})`,backgroundColor:`${dominantColor3}`}}>
              <span className="ShoeName"></span>
              <IoHeartCircle className="FavouriteIcon"/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.fourthslide})`,backgroundColor:`${dominantColor4}`}}>
              <span className="ShoeName"></span>
              <IoHeartCircle className="FavouriteIcon"/>
              <button className="BuyNow">$ PRICE</button>
              </div>
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <div className="ProductImages" style={{ backgroundImage: `url(${props.fifthslide})`,backgroundColor:`${dominantColor5}`}}>
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
