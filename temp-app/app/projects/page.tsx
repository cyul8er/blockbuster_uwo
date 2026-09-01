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
    <section className={styles.proj}> 
      <section className={styles.projHead}>
            <div className={styles.sponHead}> 
                <h1>BBW Archive</h1>
            </div>
        <div className={styles.contactIntro}>
          <div className={styles.introCol}>
            <p>
              In vita, multa sunt quae nos adiuvent ad crescendum et
              discendum. Amicitia et amor sunt fundamenta verae felicitas.
            </p>
          </div>
 
          <div className={styles.introMark} aria-hidden="true">
            <svg viewBox="0 0 100 100" className={styles.reelMark}>
              <circle cx="50" cy="50" r="46" className={styles.reelRing} />
              <circle cx="50" cy="50" r="10" className={styles.reelHub} />
              <circle cx="50" cy="20" r="7" className={styles.reelHole} />
              <circle cx="76.6" cy="65" r="7" className={styles.reelHole} />
              <circle cx="23.4" cy="65" r="7" className={styles.reelHole} />
            </svg>
          </div>
 
          <div className={styles.introCol}>
            <p>
              Ars et creativitas sunt viae percipiendi mundum.Per musicam,
              picturam, et litteras, homines se exprimere et sensus suos
              communicare.
            </p>
          </div>
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
      </section>
    </>
  )
}
