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
                    <ul className="nav-list">
                        <li><a href="#">Home</a></li>
                        <li class="dropdown"><a href="#">Food</a>
                            <div class="submenu">
                                <a href="#">Local Restaurant</a>
                                <a href="#">Chill Places</a>
                                <a href="#">Fancy Restaurant</a>
                            </div>
                        </li>
                        <li class="dropdown"><a href="#">Culture</a>
                            <div class="submenu">
                                <a href="#">Festival</a>
                                <a href="#">Ethic Groups</a>
                            </div></li>
                        <li class="dropdown"><a href="#">Travel</a>
                            <div class="submenu">
                                <a href="#">Trekking</a>
                                <a href="#">Hiking</a>
                                <a href="#">Safari</a>
                                <a href="#">Picnic</a>
                            </div>
                            </li>
                    </ul>
                    </nav>
                    </div>
                </header>
    )
}

export default Home;
