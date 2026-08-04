import "./home.css"
import Image from "next/image"
import HeaderCD from "@/components/HeaderCD"
import HomeNews from "@/components/HomeNews"

export default function Home() {
  return (
    <>
    <HeaderCD></HeaderCD>

    <section className="sec sec2">
    <div className="leftHome">
        <div className="panel0">
            <Image
                src="/placeholder/Timeline.jpg"
                alt="photo one"
                width="500"
                height="500"
            />
        </div>
        <div className="vertText vertTextA">
            <span>⋆꙳❅*‧ ‧*❆ ₊⋆</span>

        </div>
        <div className="vertText vertTextB">
            <span>･*❆ ₊⋆</span>            
            <span>⋆꙳❅*°⋆❆.ೃ࿔*:</span>

        </div>
        <div className="panel1">
            <Image
                src="/placeholder/Timeline.jpg"
                alt="photo two"
                width="500"
                height="500"
            />
        </div>
    </div>

    <div className = "rightHome">
        <div className = "text">
            <p className = "font-bold">EST. 2025</p> <br /><br /><br />
            <p>At Blockbuster, we're dedicated to giving you and your fellow students at Western the opportunity to become the best version of yourself through the beautiful collaborative art form of filmmaking. </p>
            <br />
    <br /><br /><br />
        </div>

        <div className = "panel2">
          <Image
                src="/placeholder/Timeline.jpg"
                alt="photo three"
                width="500"
                height="500"
            />
        </div>
    </div>

    <div className = "BIGtext">
        <span>M</span>
        <span>I</span>
        <span>S</span>
        <span>S</span>
        <span>I</span>
        <span>O</span>
        <span>N</span>
    </div>
    </section>

    <section className="sec sec3">
    <h1>news</h1>
    <div id = "newsPreview">  
      <HomeNews></HomeNews>
    </div>
    </section>
  </>
  )
}
