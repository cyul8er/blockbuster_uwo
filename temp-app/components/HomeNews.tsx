import news from './allnews.json'
import './cd.css'
import Image from 'next/image'

export default function HomeNews(){
    return(
        <>
            {news.map((article) => (
                <div className="newsCard" key={article.id}>
                    {/* <Image
                        src={article.image}
                        alt={article.title}
                        width={155}
                        height={155}
                    /> */}
                    <h2>{article.title}</h2>
                    <p>{article.date}</p>
                    <p>{article.text}</p>
                </div>
            ))}

        </>
    )
}