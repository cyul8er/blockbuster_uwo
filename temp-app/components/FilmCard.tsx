import "./filmCard.css"
import Image from "next/image"

interface FilmCardProps{
    name: string
    year: string
    directors: string
    runtime: string
    genres: string
    image: string

}
export default function FilmCard(FilmCardProps:FilmCardProps){
    return(
        <article className = "filmCard">
            <Image
                src = {FilmCardProps.image}
                alt="poster"
                width={206}
                height={206}
            />
            <div className = "titleCard"> 
                <h1 style={{display:"inline"}}>{FilmCardProps.name}</h1> <p style={{display: "inline"}}>{FilmCardProps.year}</p>
            </div>
            {/* director, runtime, genre*/}
            <p>Dir. {FilmCardProps.directors}</p><br/>
            <p>Runtime. {FilmCardProps.runtime} </p><br/>
            <p>Genre. {FilmCardProps.genres}</p>
        </article>

    )
}