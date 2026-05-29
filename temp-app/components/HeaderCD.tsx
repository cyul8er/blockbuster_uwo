"use client";

import Image from "next/image"
import "./cd.css"

import { useState } from "react"

export default function HeaderCD(){
    const [cdIndex,setCdIndex] = useState(0)
    const covers = [
        {name: "Multiple Choice", image: "/cdCover/Upcoming20XX.png", colour: "#E6E6FA"},
        {name: "Regugitate", image: "/cdCover/Regurgitate.png", colour: "#000000"},
        {name: "Aleksi", image: "/cdCover/Upcoming20XX.png", colour: "#F0F8FF"},
        {name: "Your Film Here", image: "/cdCover/Your_Film_Here.png", colour: "#FFC0CB"},
    ]
    
    return(
        <section className="sec sec1">
            <div className = "promo scale">
            <div className= "coverBox" id = "cover"> 
            <Image
                src={covers[cdIndex].image}
                id={covers[cdIndex].name}
                alt={covers[cdIndex].name}
                width="362"
                height="542"
            />
            </div>

            <div className="cdBox" style={{backgroundColor: covers[cdIndex].colour}} id = "cd">
            </div>
                </div>

                <div className="selection">
                    {covers.map((cd, index) => (
                        <button key={index} className="option" data-post={cd.image} data-vid={cd.colour} onClick={() => setCdIndex(index)}>{cd.name}</button>
                    ))}
            </div>
        </section>
    )

}
