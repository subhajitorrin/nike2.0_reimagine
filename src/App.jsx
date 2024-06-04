import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MovingCards from "./components/MovingCards/MovingCards";
import "./App.css";
import gsap from "gsap";
import Loader from "./components/Loader/Loader";
import Section from "./components/TemporarySection/Section";
import Cursor from "./components/Cursor/Cursor";

function App() {
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

  return (
    <div id="main">
      <Cursor />
      <Loader />
      <Navbar />
      <Section />
      <Section />
      <MovingCards />
      <Footer />
    </div>
  );
}

export default App;
