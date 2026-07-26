"use client";

import Image from "next/image"
import "./cd.css"

import { useState, useRef, useEffect } from "react"

export default function HeaderCD(){
    const [cdIndex, setCdIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    // add a "trailer" path per cover once you have clips — leave "" to fall
    // back to the flat colour disc with no video
    const covers = [
        { name: "Multiple Choice", image: "/cdCover/Upcoming20XX.png", colour: "#E6E6FA", trailer: "" },
        { name: "Regurgitate", image: "/cdCover/Regurgitate.png", colour: "#000000", trailer: "" },
        { name: "Aleksi", image: "/cdCover/Upcoming20XX.png", colour: "#F0F8FF", trailer: "" },
        { name: "Your Film Here", image: "/cdCover/Your_Film_Here.png", colour: "#FFC0CB", trailer: "" },
    ]

    const current = covers[cdIndex]

    // keep the <video> element in sync with play/pause state and reset
    // whenever the selected track changes
    useEffect(() => {
        if (!videoRef.current) return
        if (isPlaying) {
            videoRef.current.play().catch(() => {
                // autoplay can be blocked before user interaction — safe to ignore,
                // the click that set isPlaying already counts as interaction in
                // most browsers, this just guards against edge cases
            })
        } else {
            videoRef.current.pause()
        }
    }, [isPlaying, cdIndex])

    function handleSelect(index: number) {
        setCdIndex(index)
        setIsPlaying(false)
    }

    function toggleDisc() {
        // no trailer yet? spin for show, just don't try to play a video
        setIsPlaying((prev) => !prev)
    }

    return(
        <section className="sec sec1">
            <div className="promo scale">
                <div className="coverBox" id="cover">
                    <Image
                        src={current.image}
                        id={current.name}
                        alt={current.name}
                        width="362"
                        height="542"
                    />
                </div>

                <div
                    className={`cdBox${isPlaying ? " spinning" : ""}`}
                    style={{ backgroundColor: current.colour }}
                    id="cd"
                    onClick={toggleDisc}
                    role="button"
                    aria-label={`Play ${current.name} trailer`}
                >
                    {current.trailer && (
                        <video
                            ref={videoRef}
                            src={current.trailer}
                            muted
                            loop
                            playsInline
                        />
                    )}
                </div>
            </div>

            <div className="selection">
                {covers.map((cd, index) => (
                    <button
                        key={index}
                        className={`option${index === cdIndex ? " active" : ""}`}
                        data-post={cd.image}
                        data-vid={cd.colour}
                        onClick={() => handleSelect(index)}
                    >
                        {cd.name}
                    </button>
                ))}
            </div>
        </section>
    )
}




// "use client";

// import Image from "next/image"
// import "./cd.css"

// import { useState } from "react"

// export default function HeaderCD(){
//     const [cdIndex,setCdIndex] = useState(0)
//     const covers = [
//         {name: "Multiple Choice", image: "/cdCover/Upcoming20XX.png", colour: "#E6E6FA"},
//         {name: "Regugitate", image: "/cdCover/Regurgitate.png", colour: "#000000"},
//         {name: "Aleksi", image: "/cdCover/Upcoming20XX.png", colour: "#F0F8FF"},
//         {name: "Your Film Here", image: "/cdCover/Your_Film_Here.png", colour: "#FFC0CB"},
//     ]
    
//     return(
//         <section className="sec sec1">
//             <div className = "promo scale">
//             <div className= "coverBox" id = "cover"> 
//             <Image
//                 src={covers[cdIndex].image}
//                 id={covers[cdIndex].name}
//                 alt={covers[cdIndex].name}
//                 width="362"
//                 height="542"
//             />
//             </div>

//             <div className="cdBox" style={{backgroundColor: covers[cdIndex].colour}} id = "cd">
//             </div>
//                 </div>

//                 <div className="selection">
//                     {covers.map((cd, index) => (
//                         <button key={index} className="option" data-post={cd.image} data-vid={cd.colour} onClick={() => setCdIndex(index)}>{cd.name}</button>
//                     ))}
//             </div>
//         </section>
//     )

// }
