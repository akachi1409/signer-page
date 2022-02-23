import React, { useState } from "react";
import "./App.css";
import Zoom from "./zoom.js";

export default () => {
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });

  const onScroll = (e) => {
    const delta = e.deltaY * -0.01;
    const newScale = pos.scale + delta;

    const ratio = 1 - newScale / pos.scale;

    setPos({
      scale: newScale,
      x: pos.x + (e.clientX - pos.x) * ratio,
      y: pos.y + (e.clientY - pos.y) * ratio
    });
  };

  return (
    <div
      style={{display: 'flex', height: '100vh', backgroundColor:"black"}}>
      <Zoom
        hideImage={() => console.log("hideImage() fired")}
      />
    </div >
  );
};