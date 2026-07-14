import './projects.module.css'
import Image from 'next/image'
import FilmCard from '@/components/FilmCard'
export default function Projects(){
    return(
        <div>
        <section className="relative"> 
            <div className = "nowShowing w-full h-full"> 
                <Image
                    src="/placeholder/Timeline.jpg"
                    alt="background"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </section>

        <section className="relative z-10"> 
            <div className = "directory">
                <FilmCard name="Multiple Choice" year="2026" directors="Nicole Surette-Bourque, Sierra Katori" runtime="67min" genres="Slasher, Comedy" image="/placeholder/poster.jpg"></FilmCard>
                <FilmCard name="Regurgitate" year="2026" directors="Jasmine Xu" runtime="67min" genres="Psychological Drama" image="/placeholder/poster.jpg"></FilmCard>
                <FilmCard name="Aleksi" year="2026" directors="Quincy Gluskin" runtime="67min" genres="Period Romance, Comedy" image="/placeholder/poster.jpg"></FilmCard>
                <FilmCard name="Upcoming..." year="20XX" directors="Cameron Schacter" runtime="67min" genres="TBD" image="/placeholder/poster.jpg"></FilmCard>
            </div>
        </section>
        </div>
    )
}
