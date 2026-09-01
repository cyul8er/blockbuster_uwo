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
                    image: "/placeholder/Ash.jpg", 
                    letterboxd: "https://boxd.it/5NHqb" },
                { name: "Nicole", 
                    role: "VP Production", 
                    image: "/placeholder/Ash.jpg", 
                    letterboxd: "https://boxd.it/5NHqb" },
            ],
            [
                { name: "Amara Chigbo", 
                    role: "VP Marketing", 
                    image: "/placeholder/Ash.jpg", 
                    letterboxd: "https://letterboxd.com/filmwithjasmine/" },
                { name: "Jasmine Xu", 
                    role: "VP Events", 
                    image: "/placeholder/Ash.jpg", 
                    letterboxd: "https://boxd.it/5NHqb" },
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
                    letterboxd: "https://letterboxd.com/ongkushbanik/" },
            ],
            [
                { name: "Claire Yu", 
                    role: "Logistics", 
                    image: "/placeholder/kyoka.jpg" },
                { name: "Ella Sheils", 
                    role: "Marketing", 
                    image: "/placeholder/yatora.jpg", 
                    letterboxd: "https://letterboxd.com/ongkushbanik/" },
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
                { name: "Cameron Schater", 
                    role: "Design", 
                    image: "/placeholder/Ash.jpg" },
                { name: "Ella Sheils", 
                    role: "Design", 
                    image: "/placeholder/Ash.jpg" },
            ],
            [
                { name: "Henson Han", 
                    role: "Cinematography", 
                    image: "/placeholder/Ash.jpg", 
                    letterboxd: "https://boxd.it/5fk3P" },
                { name: "Jonelle Lapier", 
                    role: "Vanities", 
                    image: "/placeholder/Ash.jpg", 
                    letterboxd: "https://boxd.it/9iE8d" },
            ],
            [
                { name: "Nicole Goddard", 
                    role: "Performance", 
                    image: "/placeholder/Ash.jpg" },
                { name: "Sierra Katori ", 
                    role: "Performance", 
                    image: "/placeholder/Ash.jpg" },
            ],
        ],
    },
]