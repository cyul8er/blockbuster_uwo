"use client"
import "./filmCard.css"
import Image from "next/image"
import {useState} from "react"

interface FilmCardProps{
    name: string
    year: string
    directors: string
    runtime: string
    genres: string
    image: string

}

interface FilmCardProps{
    name: string
    year: string
    directors: string
    runtime: string
    genres: string
    image: string
    synopsis?: string
}

export default function FilmCard(FilmCardProps:FilmCardProps){
    const [phase, setPhase] = useState<"idle" | "tearing" | "open">("idle")

    const handleClick = () => {
        if (phase !== "idle") return
        setPhase("tearing")
        // matches the tear animation duration in filmCard.css
        setTimeout(() => setPhase("open"), 550)
    }

    const handleClose = () => {
        setPhase("idle")
    }

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
                    src={FilmCardProps.image}
                    alt="poster"
                    width={200}
                    height={260}
                    className="poster"
                />

                <div className="titleCard">
                    <h1>{FilmCardProps.name}</h1>
                </div>

                <p>Dir. {FilmCardProps.directors}</p>
                <p>Runtime. {FilmCardProps.runtime}</p>
                <p>Genre. {FilmCardProps.genres}</p>

                <div className="footer">
                    <span className="barcode" />
                    <span className="stars">★ ★ ★</span>
                </div>
            </div>
        </article>

        {phase === "open" && (
            <div className="filmModalOverlay" onClick={handleClose}>
                <div className="filmModal" onClick={(e) => e.stopPropagation()}>
                    <button className="closeBtn" onClick={handleClose}>✕</button>

                    <Image
                        src={FilmCardProps.image}
                        alt="poster"
                        width={300}
                        height={400}
                        className="modalPoster"
                    />

                    <div className="modalContent">
                        <span className="eyebrow">Now Screening</span>
                        <h1>{FilmCardProps.name}</h1>
                        <p className="modalDirectors">Dir. {FilmCardProps.directors}</p>

                        <div className="modalInfo">
                            <div><span>Year</span>{FilmCardProps.year}</div>
                            <div><span>Runtime</span>{FilmCardProps.runtime}</div>
                            <div><span>Genre</span>{FilmCardProps.genres}</div>
                        </div>

                        <p className="synopsis">
                            {FilmCardProps.synopsis ?? "Full details for this screening are coming soon."}
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
// }