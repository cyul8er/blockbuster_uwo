import "./home.css"
import Header from "@/components/Header"
import Image from "next/image"
import HeaderCD from "@/components/HeaderCD"

export default function Home() {
  return (
    <>
    <Header></Header>

    <HeaderCD></HeaderCD>

    <section className="sec sec2">
    <div className = "leftHome">
        <div className = "panel1">
          <Image
            src="/placeholder/Timeline.jpg"
            alt="timeline"
            width="714"
            height="402"
          />
        </div>
        
    </div>

    <div className = "rightHome">
        <div className = "text">
            <p className = "font-weight: bold; ">EST. 2025</p> <br /><br /><br /><br /><br />
            <p>At Blockbuster, we're dedicated to giving you and your fellow students at Western the opportunity to become the best version of yourself through the beautiful collaborative art form of filmmaking. </p>
            <br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>

        <div className = "panel2">
            {/* <img> */}
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
    <div id = "newsPreview">  </div>
    {/* <script src = main.js> </script> */}
    </section>
  </>
  )
}
