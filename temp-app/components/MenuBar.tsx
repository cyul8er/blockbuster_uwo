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
        Menu
      </button>

      <div className={`overFade ${active ? "active" : ""}`} />

      <div className={`menuSide ${active ? "active" : ""}`}>
        <div><a href="home.html">Home</a></div>
        <div><a href="about.html">About</a></div>
        <div><a href="projects.html">Projects</a></div>
        <div><a href="news.html">News</a></div>
        <div><a href="sponsors.html">Sponsors</a></div>
        <div><a href="contact.html">Contact</a></div>
      </div>
    </>
  );
}