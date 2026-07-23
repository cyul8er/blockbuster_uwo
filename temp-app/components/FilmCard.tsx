"use client"
import "./filmCard.css"
import Image from "next/image"
import {useState} from "react"

interface FilmCardProps{
    title: string
    year: string
    dir: string
    rt: string
    gens: string
    img: string
    desc: string
}

export default function FilmCard(FilmCardProps:FilmCardProps){
    const [phase, setPhase] = useState<"idle" | "tearing" | "open">("idle")

    // animation on click
    const handleClick = () => {
        if (phase !== "idle") return
        setPhase("tearing")
        setTimeout(() => setPhase("open"), 550)
    }

    const handleClose = () => {
        setPhase("idle")
    }

    // ticket graphics 
    return(
        <>
        <article
            className={`filmCard ${phase === "tearing" ? "tearing" : ""} ${phase === "open" ? "torn" : ""}`}
            onClick={handleClick}
        >
            <div className="stub">
                <span>Admit One</span>
                <span>{FilmCardProps.year}</span>
            </div>

            <div className="perf" />

            <div className="ticketRest">
                <Image
                    src={FilmCardProps.img}
                    alt="poster"
                    width={200}
                    height={260}
                    className="poster"
                />

                <div className="titleCard">
                    <h1>{FilmCardProps.title}</h1>
                </div>

                <p>Dir. {FilmCardProps.dir}</p>
                <p>Runtime. {FilmCardProps.rt}</p>
                <p>Genre. {FilmCardProps.gens}</p>

                <div className="footer">
                    <span className="barcode" />
                    <span className="stars">★ ★ ★</span>
                </div>
            </div>
        </article>

        {/* on click pop up  */}
        {phase === "open" && (
            <div className="filmModalOverlay" onClick={handleClose}>
                <div className="filmModal" onClick={(e) => e.stopPropagation()}>
                    <button className="closeBtn" onClick={handleClose}>✕</button>

                    <Image
                        src={FilmCardProps.img}
                        alt="poster"
                        width={300}
                        height={400}
                        className="modalPoster"
                    />

                    <div className="modalContent">
                        <span className="eyebrow">Now Screening</span>
                        <h1>{FilmCardProps.title}</h1>
                        <p className="modalDirectors">Dir. {FilmCardProps.dir}</p>

                        <div className="modalInfo">
                            <div><span>Year</span>{FilmCardProps.year}</div>
                            <div><span>Runtime</span>{FilmCardProps.rt}</div>
                            <div><span>Genre</span>{FilmCardProps.gens}</div>
                        </div>

                        <p className="synopsis">
                            {FilmCardProps.desc ?? "Full details for this screening are coming soon."}
                        </p>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}


// export default function FilmCard(FilmCardProps:FilmCardProps){
//     const [open, setOpen] = useState(false)
//     return(

//         <article className = "filmCard">
//             <Image
//                 src = {FilmCardProps.image}
//                 alt="poster"
//                 width={200}
//                 height={200}
//             />
//             <div className = "titleCard"> 
//                 <h1 style={{display:"inline"}}>{FilmCardProps.name}</h1> <p style={{display: "inline"}}>{FilmCardProps.year}</p>
//             </div>
//             {/* director, runtime, genre*/}
//             <p>Dir. {FilmCardProps.directors}</p><br/>
//             <p>Runtime. {FilmCardProps.runtime} </p><br/>
//             <p>Genre. {FilmCardProps.genres}</p>
//         </article>

//     )