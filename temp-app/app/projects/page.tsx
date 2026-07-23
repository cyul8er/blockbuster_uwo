import styles from "./projects.module.css"
import FilmCard from "@/components/FilmCard"
import films from "./proj.json"


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

//       <section className="relative z-10">

//         <div className={styles.directory}>
//           <FilmCard name="Multiple Choice" year="2026" directors="Nicole Surette-Bourque, Sierra Katori" runtime="67min" genres="Slasher, Comedy" image="/placeholder/poster.jpg" />
//           <FilmCard name="Regurgitate" year="2026" directors="Jasmine Xu" runtime="67min" genres="Psychological Drama" image="/placeholder/poster.jpg" />
//           <FilmCard name="Aleksi" year="2026" directors="Quincy Gluskin" runtime="67min" genres="Period Romance, Comedy" image="/placeholder/poster.jpg" />
//           <FilmCard name="Upcoming..." year="20XX" directors="Cameron Schacter" runtime="67min" genres="TBD" image="/placeholder/poster.jpg" />
//           <FilmCard name="Upcoming..." year="20XX" directors="Cameron Schacter" runtime="67min" genres="TBD" image="/placeholder/poster.jpg" />
        
//           <FilmCard name="Multiple Choice" year="2026" directors="Nicole Surette-Bourque, Sierra Katori" runtime="67min" genres="Slasher, Comedy" image="/placeholder/poster.jpg" />
//           <FilmCard name="Regurgitate" year="2026" directors="Jasmine Xu" runtime="67min" genres="Psychological Drama" image="/placeholder/poster.jpg" />
//           <FilmCard name="Aleksi" year="2026" directors="Quincy Gluskin" runtime="67min" genres="Period Romance, Comedy" image="/placeholder/poster.jpg" />
//           <FilmCard name="Upcoming..." year="20XX" directors="Cameron Schacter" runtime="67min" genres="TBD" image="/placeholder/poster.jpg" />
//           <FilmCard name="Upcoming..." year="20XX" directors="Cameron Schacter" runtime="67min" genres="TBD" image="/placeholder/poster.jpg" />
//         </div>
//       </section>
//     </div>
//   )
// }