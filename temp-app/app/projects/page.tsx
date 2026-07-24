import styles from "./projects.module.css"
import FilmCard from "@/components/FilmCard"
import films from "./proj.json"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Blockbuster",
};


export default function Projects() {
  return (
    <div>
      <section className="relative">
        <div className={styles["film-page"]}></div>
        <div className={styles["film-page-header"]}>
          <span className={styles["film-eyebrow"]}> Blockbuster Western Full Archive</span>
        </div>
      </section>

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
    </div>
  )
}
