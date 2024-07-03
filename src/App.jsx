import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader/Loader";
import MovingCards from "./components/MovingCards/MovingCards";
import "./App.css";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import FullscreenNavbar from "./components/FullscreenNavbar/FullscreenNavbar";
import Model from "./components/Model3d/Model";
import CardSection from "./components/CardSection/CardSection";
import Insta from "./components/Instasection/Insta";
import UpperFooter from "./components/footer/footer division/UpperFooter";
import SwipeComponent from "./components/HeroSwipe/SwipeComponent.jsx";
import Cursor from "./components/Cursor/Cursor.jsx";
import ProductCardsGrid from "./components/ProductCards/ProductCardsGrid.jsx";

// import { rainbowCursor } from "cursor-effects";

// new rainbowCursor({
//   length: 3,
//   colors: ["red"],
//   size: 4,
// });
// const targetElement = document.querySelector('.HeroSwipe');
// new rainbowCursor({ element: targetElement });

function App() {
  const [isLoading, setisLoading] = useState(true);
  const locomotiveScroll = new LocomotiveScroll();
  const containerRef = useRef(null);
  const [showModel, setShowModel] = useState(false);
  const [toggleNavbar, settoggleNavbar] = useState(false);
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     gsap.set(".cursor", {
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };
  //   const handleMouseLeave = () => {
  //     document.querySelector(".cursor").style.display = "none";
  //   };

  //   const handleMouseEnter = () => {
  //     document.querySelector(".cursor").style.display = "block";
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   document
  //     .querySelector("#main")
  //     .addEventListener("mouseleave", handleMouseLeave);
  //   document
  //     .querySelector("#main")
  //     .addEventListener("mouseenter", handleMouseEnter);
  // }, []);

  // locomotive off on navclick
  // useEffect(() => {
  //   let locomotiveScroll = null;
  //   if (!toggleNavbar) {
  //     locomotiveScroll = new LocomotiveScroll();
  //   }

  //   return () => {
  //     if (locomotiveScroll) {
  //       locomotiveScroll.destroy();
  //     }
  //   };
  // }, [toggleNavbar]);

  // useEffect(() => {
  //   if (isLoading) {
  //     document.querySelectorAll(".CursorTrail").forEach((item) => {
  //       item.style.display = "none";
  //     });
  //   } else {
  //     setTimeout(() => {
  //       document.querySelectorAll(".CursorTrail").forEach((item) => {
  //         item.style.display = "flex";
  //       });
  //     }, 1000);
  //   }
  // }, [isLoading]);

  /*****
if you are commenting <Loader/> 
then make isLoading usestate to false
at App.jsx line 13
*****/

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowModel(true);
      }, 700); // 1 second delay

      // Cleanup timer if component unmounts before delay
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div
      id="main"
      style={{
        height: isLoading ? "100vh" : "",
      }}
    >
      <div className="blureffect"></div>
      <Cursor />
      <Loader isLoading={isLoading} setisLoading={setisLoading} />
      <FullscreenNavbar
        toggleNavbar={toggleNavbar}
        settoggleNavbar={settoggleNavbar}
      />
      <SwipeComponent className="HeroSwipe"/>
      <CardSection />
      <ProductCardsGrid />
      {isLoading ? <p>Loading...</p> : showModel && <Model />}
      {isLoading ? <p>Loading...</p> : showModel && <UpperFooter />}
      <MovingCards />
      <Insta />
      <Footer />
    </div>
  );
}

export default App;
