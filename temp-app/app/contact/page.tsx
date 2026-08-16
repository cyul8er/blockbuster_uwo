import type { Metadata } from "next";
import './contact.css'


export const metadata: Metadata = {
  title: "Contact | Blockbuster",
};


export default function Contact(){
    return(
        <section className="sec sec-contact">
        <div className="contactHead">
          <h1>CONTACT</h1>
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
 
        <div className="formFrame">
            <iframe
              src="https://forms.gle/wrCezDV7ANrpBUwz9"
              className="formEmbed"
              title="Contact Blockbuster"
            >
              Loading…
            </iframe>
            </div>
      </section>
  )
}






//         <section className="contactForm">
//             <h1>Contact Us</h1>
//             <embed src="https://docs.google.com/forms/d/e/1FAIpQLSeJM_xjdDOYN10mJrY1JBfgLejS-5edjRHkSMscHpQ1hzFI3g/viewform?usp=publish-editor" className="formEmbed" />
//         </section>
//     )
// }