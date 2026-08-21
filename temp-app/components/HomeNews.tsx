import { getRecentPosts } from "@/lib/notion"
import NewsCarousel from "./NewsCarousel" // adjust path if NewsCarousel lives elsewhere relative to this file
import "./sec3.css"

export default async function HomeNews() {
    const posts = await getRecentPosts(3)

    return <NewsCarousel posts={posts} />
}



// import news from './allnews.json'
// import './sec3.css'
// import Image from 'next/image'

// export default function HomeNews(){
//     return(
//         <>
//             {news.map((article) => (
//                 <div className="newsCard" key={article.id}>
//                     {/* <Image
//                         src={article.image}
//                         alt={article.title}
//                         width={155}
//                         height={155}
//                     /> */}
//                     <h2>{article.title}</h2>
//                     <p>{article.date}</p>
//                     <p>{article.text}</p>
//                 </div>
//             ))}

//         </>
//     )
// }