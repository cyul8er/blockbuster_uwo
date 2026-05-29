"use client";

import { useState } from "react";

export default function MenuBar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        className={`hbMenu ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <div className="topBar" />
        <div className="botBar" />
      </button>
      
      <div className={`overFade ${active ? "active" : ""}`} onClick={() => setActive(false)}/>

      <div className={`menuSide ${active ? "active" : ""}`}>
        <nav className = "sideNav">
        <div><a href="\">Home</a></div>
        <div><a href="/about">About</a></div>
        <div><a href="/projects">Projects</a></div>
        <div><a href="/news">News</a></div>
        <div><a href="/sponsors">Sponsors</a></div>
        <div><a href="/contact">Contact</a></div>
        </nav>
      </div>
    </>
  );
}