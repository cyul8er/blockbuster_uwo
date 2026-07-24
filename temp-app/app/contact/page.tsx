import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Blockbuster",
};


export default function Contact(){
    return(
        <section className="h-screen w-screen">
            <h1>Contact Us</h1>
            <embed src="https://docs.google.com/forms/d/e/1FAIpQLSeJM_xjdDOYN10mJrY1JBfgLejS-5edjRHkSMscHpQ1hzFI3g/viewform?usp=publish-editor" className="h-[90vh] w-[50vw]" />
        </section>
    )
}