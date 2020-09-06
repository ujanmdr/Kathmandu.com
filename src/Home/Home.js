import React from "react"
import "./Home.css"


function Home(){
    return(
                <header className="app-head">
                    <div className="Main">
                    <div className="Logos">
                       <h1>Kathmandu</h1>
                    </div>
                    <nav className="Navbar">
                    <a href="">Home</a>
                    <a href="">Food</a>
                    <a href="">Entertainment</a>
                    <a href="">Travel</a>
                    </nav>
                    </div>
                </header>
    )
}

export default Home;