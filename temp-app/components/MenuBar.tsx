"use client";

import { useState } from "react";
import "./common.css"


const navItems = [
  { label: "Home", href: "/", image: "/nav/home.jpg" },
  { label: "About", href: "/about", image: "/nav/about.jpg" },
  { label: "Projects", href: "/projects", image: "/nav/projects.jpg" },
  { label: "News", href: "/news", image: "/nav/news.jpg" },
  { label: "Sponsors", href: "/sponsors", image: "/nav/sponsors.jpg" },
  { label: "Contact", href: "/contact", image: "/nav/contact.jpg" },
];

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
      <nav className="sideNav">
        {navItems.map((item) => (
          <div key={item.href}>
          <a href={item.href}>
          <span>{item.label}</span>
          <img className="navFrameImg" src={item.image} alt="" />
        </a>
      </div>
      ))}
      </nav>

        {/* <nav className = "sideNav">
        <div><a href="/">Home</a></div>
        <div><a href="/about">About</a></div>
        <div><a href="/projects">Projects</a></div>
        <div><a href="/news">News</a></div>
        <div><a href="/sponsors">Sponsors</a></div>
        <div><a href="/contact">Contact</a></div>
        </nav> */}
      </div>
    </>
  );
}