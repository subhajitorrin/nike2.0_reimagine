import React, { useEffect } from "react";
import "./Cursor.css";

function Cursor() {
  
  const coords = { x: 0, y: 0 };
  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
  });
  useEffect(() => {
    const circles = document.querySelectorAll(".CursorTrail");
    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
    });
    function animateCircles() {
  
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach(function (circle, index) {
        circle.style.transform = `translate(${x - 12}px, ${y + 12}px) scale(${(circles.length - index) / circles.length})`;
        
        circle.x = x;
        circle.y = y;
    
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.15;
        y += (nextCircle.y - y) * 0.15;
      });
     
      requestAnimationFrame(animateCircles);
    }
    animateCircles();    
    return () => {
    }
  }, [])
  
  return (
    <>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    <div class="CursorTrail"></div>
    </>
  );
}

export default Cursor;
