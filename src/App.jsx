import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MovingCards from "./components/MovingCards/MovingCards";
import "./App.css";
import gsap from "gsap";
import Loader from "./components/Loader/Loader";
import Section from "./components/TemporarySection/Section";
import Cursor from "./components/Cursor/Cursor";
import LocomotiveScroll from "locomotive-scroll";
import FullscreenNavbar from "./components/FullscreenNavbar/FullscreenNavbar";
import Model from "./components/Model3d/Model";
import Section1 from "./components/Section1/Section1";
import CardSection from "./components/CardSection/CardSection";
import Insta from "./components/Instasection/Insta";
import UpperFooter from "./components/footer/footer division/UpperFooter";
import SwipeComponent from "./components/HeroSwipe/SwipeComponent.jsx"

function App() {
  const [isLoading, setisLoading] = useState(true);
  // const locomotiveScroll = new LocomotiveScroll();
  const containerRef = useRef(null);
  const [toggleNavbar, settoggleNavbar] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.set(".cursor", {
        x: e.clientX,
        y: e.clientY,
      });
    };
    const handleMouseLeave = () => {
      document.querySelector(".cursor").style.display = "none";
    };

    const handleMouseEnter = () => {
      document.querySelector(".cursor").style.display = "block";
    };
    window.addEventListener("mousemove", handleMouseMove);
    document
      .querySelector("#main")
      .addEventListener("mouseleave", handleMouseLeave);
    document
      .querySelector("#main")
      .addEventListener("mouseenter", handleMouseEnter);
  }, []);

  useEffect(() => {
    let locomotiveScroll = null;
    if (!toggleNavbar) {
      locomotiveScroll = new LocomotiveScroll();
    }

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [toggleNavbar]);

  /*****
if you are commenting <Loader/> 
then make isLoading usestate to false
at App.jsx line 13
*****/

  return (

    <div
      id="main"
      style={{
        height: isLoading ? "100vh" : "",
      }}
    >
      <div className="blureffect"></div>
      {/* <Cursor /> */}
      <Loader isLoading={isLoading} setisLoading={setisLoading} />
      <FullscreenNavbar
        toggleNavbar={toggleNavbar}
        settoggleNavbar={settoggleNavbar}
      />
      <SwipeComponent/>
      {/* <Section1 /> */}
      <CardSection />
      {!isLoading && <Model />}
      <MovingCards />
      <Insta />
      {!isLoading && <Footer />}
    </div>
  );
}

export default App;
