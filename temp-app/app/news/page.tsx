import { getAllPosts } from "@/lib/notion"
import Link from "next/link"
import './news.css'

const POSTS_PER_PAGE = 10

interface NewsPageProps {
    searchParams: Promise<{ page?: string }>
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
    const params = await searchParams
    const requestedPage = parseInt(params.page ?? "1", 10) || 1

    const allPosts = await getAllPosts() // already sorted newest-first by getAllPosts
    const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE))
    const currentPage = Math.min(Math.max(1, requestedPage), totalPages)

    const start = (currentPage - 1) * POSTS_PER_PAGE
    const pagePosts = allPosts.slice(start, start + POSTS_PER_PAGE)

    return (
        <>
        <section className="sec sec-news">
            <div className = "newsBigText"> 
                <h1>NEWS</h1>
            </div>
        <div className="contactIntro">
          <div className="introCol introLeft">
            <p>
              In vita, multa sunt quae nos adiuvent ad crescendum et
              discendum. Amicitia et amor sunt fundamenta verae felicitas.
            </p>
          </div>
 
          <div className="introMark" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="reelMark">
              <circle cx="50" cy="50" r="46" className="reelRing" />
              <circle cx="50" cy="50" r="10" className="reelHub" />
              <circle cx="50" cy="20" r="7" className="reelHole" />
              <circle cx="76.6" cy="65" r="7" className="reelHole" />
              <circle cx="23.4" cy="65" r="7" className="reelHole" />
            </svg>
          </div>
 
          <div className="introCol introRight">
            <p>
              Ars et creativitas sunt viae percipiendi mundum.Per musicam,
              picturam, et litteras, homines se exprimere et sensus suos
              communicare.
            </p>
          </div>
        </div>

            {pagePosts.map((article) => (
                <div className="newsCard" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.date}</p>
                    <p>{article.author}</p>
                    <p>{article.type}</p>
                </div>
            ))}

            <div className="pagination">
                {currentPage > 1 && (
                    <Link href={`/news?page=${currentPage - 1}`}>Previous</Link>
                )}
                <span> Page {currentPage} of {totalPages} </span>
                {currentPage < totalPages && (
                    <Link href={`/news?page=${currentPage + 1}`}>Next</Link>
                )}
            </div>
        </section>
        </>
    )
}