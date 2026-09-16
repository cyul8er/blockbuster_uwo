export interface Member {
    name: string
    role: string
    image: string
    letterboxd?: string
}

export interface Team {
    title: string
    blurb: string
    rows: Member[][]
}

export const teams: Team[] = [
    {
        title: "Admin",
        blurb: "Club Admin",
        rows: [
            [{ name: "Rohum Zaman", 
                role: "President", 
                image: "/placeholder/Ash.jpg", 
                letterboxd: "https://boxd.it/5NHqb" }],
            [
                { name: "Quincy Gluskin", 
                    role: "VP Production", 
                    image: "/placeholder/download.jpg", 
                    letterboxd: "https://boxd.it/4Ydlt" },
                { name: "Nicole Surette-Bourque", 
                    role: "VP Production", 
                    image: "/placeholder/kyoka.jpg", 
                    letterboxd: "https://boxd.it/aNE5p" },
            ],
            [
                { name: "Amara Chigbo", 
                    role: "VP Marketing", 
                    image: "/placeholder/Suguru geto (mangá).jpg"
                },
                { name: "Jasmine Xu", 
                    role: "VP Events", 
                    image: "/placeholder/Ash.jpg", 
                    letterboxd: "https://boxd.it/gGIHR" },
            ],
        ],
    },
    {
        title: "Publicity",
        blurb: "Marketing and Events",
        rows: [
            [
                { name: "Jite", 
                    role: "Recruitment & Events", 
                    image: "/placeholder/saiki3.jpg" },
                { name: "Ongkush Banik", 
                    role: "Events", 
                    image: "/placeholder/yatora.jpg", 
                    letterboxd: "https://boxd.it/kgmmL" },
            ],
            [
                { name: "Claire Yu", 
                    role: "Logistics", 
                    image: "/placeholder/kyoka.jpg" },
                { name: "Ella Sheils", 
                    role: "Marketing", 
                    image: "/placeholder/yatora.jpg", 
                    letterboxd: "https://boxd.it/9iE8d" },
            ],
        ],
    },
    {
        title: "Finance",
        blurb: "TBD",
        rows: [
            [
                { name: "Placeholder", 
                    role: "Finance", 
                    image: "/placeholder/kyoka.jpg" },
            ],
        ],
    },
    {
        title: "Production",
        blurb: "The creative division of the club is dedicated to holding community events and making some banger movies that we hope to screen at the western undergraduate film festival (WUFS) and other local film festivals.",
        rows: [
            [
                { name: "Cameron Schacter", 
                    role: "Design", 
                    image: "/placeholder/Ash.jpg",
                    letterboxd: "https://boxd.it/5fk3P" },
                { name: "Ella Sheils", 
                    role: "Design", 
                    image: "/placeholder/Ash.jpg",
                    letterboxd: "https://boxd.it/9iE8d" },
            ],
            [
                { name: "Henson Han", 
                    role: "Cinematography", 
                    image: "/placeholder/Ash.jpg" 
                },
                { name: "Jonelle Lapier", 
                    role: "Vanities", 
                    image: "/placeholder/Ash.jpg", 
                    letterboxd: "https://boxd.it/50Orn" },
            ],
            [
                { name: "Nicole Goddard", 
                    role: "Performance", 
                    image: "/placeholder/Ash.jpg",
                    letterboxd: "https://boxd.it/hngt9" },
                { name: "Sierra Katori ", 
                    role: "Performance", 
                    image: "/placeholder/Ash.jpg" },
            ],
        ],
    },
]