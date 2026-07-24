import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | Blockbuster",
};

export default function Sponsors(){
    return(
        <>
        <section className = "current">
            <h1> Current sponsors</h1>
        </section>

        <section className = "future">
            <h1> 
                Sponsorship Package 
               </h1>
        </section>
    </>
    )
}