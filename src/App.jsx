import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MovingCards from "./components/MovingCards/MovingCards";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "./components/Loader/Loader";
import Section from "./components/TemporarySection/Section";

function App() {
  const cursorRef = useRef(null);
  const [mousePos, setmousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setmousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    gsap.set("#cursor", { x: mousePos.x, y: mousePos.y });
  }, [mousePos]);

  return (
    <div id="main">
      <div id="cursor" ref={cursorRef}></div>
      <Loader />
      <Navbar />
      <Section />
      <Section />
      <MovingCards cursorRef={cursorRef} />
      <Footer />
    </div>
  );
}

export default App;
