import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Blockbuster",
};


export default function News(){
    return(
        <section> 

            <div id="newsContainer"></div>

            <div className="pagination">

                <button className="bg-white text-black px-4 py-2 rounded border border-black cursor-pointer hover:bg-gray-200" id="prevBtn">
                    Previous
                </button>

                <button className="bg-white text-black px-4 py-2 rounded border border-black cursor-pointer hover:bg-gray-200" id="nextBtn">
                    Next
                </button>
            </div>

            </section>
    )
}