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

function App() {
  const [isLoading, setisLoading] = useState(true);
  const locomotiveScroll = new LocomotiveScroll();
  const containerRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.set(".cursor", {
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
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
      <Cursor />
      <Loader isLoading={isLoading} setisLoading={setisLoading} />
      <FullscreenNavbar />
      <Section />
      <Section />
      <Section />
      <MovingCards />
      <Footer />
    </div>
  );
}

export default App;
