import styles from "./projects.module.css"
import FilmCard from "@/components/FilmCard"
import films from "./proj.json"
import type { Metadata } from "next";
import './projects.module.css'

export const metadata: Metadata = {
  title: "Projects | Blockbuster",
};


export default function Projects() {
  return (
    <>
    <div className="projHead">
      <h1>BBW Projects Archive</h1>
    </div>
      <section className="relative z-10">
        <div className={styles.directory}>
          {films.map((film) => (
            <FilmCard
              key={film.id}
              title={film.title ?? "Upcoming..."}
              year={film.year ?? "20XX"}
              dir={film.dir ?? "Name"}
              rt={film.rt ?? "XhXm"}
              gens={film.gens ?? "Genre"}
              img={film.img ?? "still"}
              desc={film.desc ?? "Description"}
            />
          ))}
        </div>
      </section>
    </>
  )
}
