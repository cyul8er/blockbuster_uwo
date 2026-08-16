export default function Footer(){
    return(
    <footer className="w-full">
            <div className = "container">
                <div className = "foot f1"><div>
                    <p style={{ fontSize: 'smaller' }}>Site Navigation</p>
                    <nav>
                        <div><a href="\">Home</a></div>
                        <div><a href="/about">About</a></div>
                        <div><a href="/projects">Projects</a></div>
                        <div><a href="/news">News</a></div>
                        <div><a href="/sponsors">Sponsors</a></div>
                        <div><a href="/contact">Contact</a></div>
                    </nav>
                </div></div>
                <div className = "foot"><div>
                    <p style={{fontSize: 'smaller'}}>socials</p>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/blockbusteruwo/">Instagram</a>
                        </li>
                        <li>
                            <a href="https://youtu.be/r6-hEA3mNaw?si=pHhzcdtuUjxa0vBc">Youtube</a>
                        </li>
                        <li>
                            <a href="">link</a>
                        </li>

                        </ul>
                </div></div>
                <div className = "foot"><div>
                    <p>keep in contact</p>
                    <input type="email" placeholder="Your Email Here" id = "footer-email"/>
                    <button className="bg-white text-black px-4 py-2 rounded border border-black cursor-pointer hover:bg-gray-200" id="footer-email-sub">
                        sign up
                        </button>
                </div></div>
                <div className = "foot"><div>
                    <p style={{fontSize: "larger"}}> ✩°｡⋆⸜ 🎥</p>
                </div></div>        
            </div>
        </footer>
    )
}