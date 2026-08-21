"use client"
import { useState } from "react"
import type { Post } from "@/lib/notion"
import "./sec3.css"

interface NewsCarouselProps {
    posts: Post[]
}

export default function NewsCarousel({ posts }: NewsCarouselProps) {
    const [index, setIndex] = useState(0)

    if (posts.length === 0) {
        return <div className="newsCarousel">No posts yet.</div>
    }

    const goPrev = () => setIndex((i) => (i === 0 ? posts.length - 1 : i - 1))
    const goNext = () => setIndex((i) => (i === posts.length - 1 ? 0 : i + 1))

    const current = posts[index]

    return (
        <div className="newsCarousel">
            <button className="carouselArrow carouselPrev" onClick={goPrev} aria-label="Previous post">
                ‹
            </button>

        <a href={`/news/${current.id}`} className="carouselSlide">
            <div className="carouselCaption">
                <h3 className="carouselTitle">{current.title}</h3>
                <p className="carouselAuthor">{current.author}</p>
                <br></br><br></br><br></br><br></br><br></br>
                <div className="carouselMeta">
                    <span className="carouselType">{current.type}</span>
                    <span className="carouselDate">{current.date}</span>
                </div>
            </div>
        </a>

            <button className="carouselArrow carouselNext" onClick={goNext} aria-label="Next post">
                ›
            </button>

            <div className="carouselDots">
                {posts.map((p, i) => (
                    <button
                        key={p.id}
                        className={`carouselDot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to post ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}