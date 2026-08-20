import { getAllPosts } from "@/lib/notion"
import Link from "next/link"

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
        <section>
            <div className = "newsBigText"> NEWS</div>

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