"use client"
import { useState } from "react"
import "./sec3.css"


type CallStatus = "open" | "closed"

interface Call {
    status: CallStatus
    formLink: string // ignored when status is "closed" — no <a> is ever rendered for a closed call
}

interface Production {
    id: string
    title: string
    genre: string
    description: string
    estimatedTime: string
    crewCall: Call
    castCall: Call
    extrasCall: Call
}

// Placeholder data source — swap this function's internals for a real fetch
// once the backend is decided. Nothing else in this file needs to change:
// CurrentProductions only ever calls getActiveProductions(), never a specific
// backend directly.
function getActiveProductions(): Production[] {
    return [
        {
            id: "p1",
            title: "p11",
            genre: "placeholder",
            description: "Short description of the production goes here.",
            estimatedTime: "6 weeks",
            crewCall: { status: "open", formLink: "https://forms.gle/placeholder1" },
            castCall: { status: "open", formLink: "https://forms.gle/placeholder2" },
            extrasCall: { status: "closed", formLink: "https://forms.gle/placeholder3" },
        },
        {
            id: "p2",
            title: "p22",
            genre: "placeholder",
            description: "Short description of the production goes here.",
            estimatedTime: "4 weeks",
            crewCall: { status: "closed", formLink: "https://forms.gle/placeholder4" },
            castCall: { status: "open", formLink: "https://forms.gle/placeholder5" },
            extrasCall: { status: "open", formLink: "https://forms.gle/placeholder6" },
        },
        {
            id: "p3",
            title: "p33",            
            genre: "placeholder",
            description: "Short description of the production goes here.",
            estimatedTime: "8 weeks",
            crewCall: { status: "open", formLink: "https://forms.gle/placeholder7" },
            castCall: { status: "closed", formLink: "https://forms.gle/placeholder8" },
            extrasCall: { status: "closed", formLink: "https://forms.gle/placeholder9" },
        },

    ]
}

function CallRow({ label, call }: { label: string; call: Call }) {
    return (
        <div className="callRow">
            <span className="callLabel">{label}</span>
            {call.status === "open" ? (
                <a href={call.formLink} target="_blank" rel="noopener noreferrer">
                    Apply
                </a>
            ) : (
                <span className="callClosed">Call closed</span>
            )}
        </div>
    )
}

export default function CurrentProductions() {
    const [activeProduction, setActiveProduction] = useState<Production | null>(null)
    const productions = getActiveProductions()

    const handleClose = () => setActiveProduction(null)

    return (
        <>
            {/* <div className="productionsGrid">
                {productions.map((p) => (
                    <article
                        key={p.id}
                        className="productionCard"
                        onClick={() => setActiveProduction(p)}
                    >
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <span>{p.estimatedTime}</span>
                    </article>
                ))}
            </div> */}

            <div className="productionRows">
                {productions.map((p) => (
                    <div key={p.id} className="productionRow" onClick={() => setActiveProduction(p)}>
                        <h4>{p.title}</h4>
                    </div>
                ))}
            </div>

            {activeProduction && (
                <div className="productionModalOverlay" onClick={handleClose}>
                    <div className="productionModal" onClick={(e) => e.stopPropagation()}>
                        <button className="closeBtn" onClick={handleClose}>
                            ✕
                        </button>

                        <h1>{activeProduction.title}</h1>
                        <p>Genre(s): {activeProduction.genre}</p>
                        <p>{activeProduction.description}</p>
                        <p>Estimated production time: {activeProduction.estimatedTime}</p>

                        <CallRow label="Crew Call" call={activeProduction.crewCall} />
                        <CallRow label="Cast Call / Audition" call={activeProduction.castCall} />
                        <CallRow label="Extras Call" call={activeProduction.extrasCall} />
                    </div>
                </div>
            )}
        </>
    )
}