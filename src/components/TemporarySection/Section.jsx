import React from "react";

function Section() {
  
  return (
    <div style={{position:"relative"}}>
      <div
        style={{
          backgroundColor:"transparent",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex:1,
        }}
      >
        This is temporary section
      </div>
    </div>
  );
}

export default Section;
