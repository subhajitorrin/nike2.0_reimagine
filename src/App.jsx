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

  /*****
if you are commenting <Loader/> 
then make isLoading usestate to false
at App.jsx line 13
*****/

  return (
    <div id="main" style={isLoading ? { height: "100vh" } : {}}>
      <Cursor />
      <Loader isLoading={isLoading} setisLoading={setisLoading} />
      <Navbar />
      <Section />
      <Section />
      <MovingCards />
      <Footer />
    </div>
  );
}

export default App;
