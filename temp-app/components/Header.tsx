import MenuBar from "./MenuBar"

export default function Header(){
    return(
        <header>
        <section>
            <div className = "hbMenu">
                <div className="topBar"></div>
                <div className = "botBar"></div>
            </div>
            <MenuBar></MenuBar>
        </section>
    </header>
    )
}