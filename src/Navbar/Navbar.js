import React from "react"
import "./Navbar.css"
import  {Link} from "react-router-dom"

function Navbar(){
    return(
        <div>
        <header className="app-head">
            <div className="Main">
            <div className="Logos">
               <h1>Kathmandu</h1>
            </div>
        <nav className="Navbar">
            <ul className="nav-list">
                <li><Link to="/"><a class="dropdown" href="#">Home</a></Link></li>
                <li class="dropdown"><a href="#">Food</a>
                    <div class="submenu">
                        <a href="#">Local Restaurant</a>
                        <a href="#">Chill Places</a>
                        <a href="#">Fancy Restaurant</a>
                    </div>
                </li>
                <li class="dropdown"><Link to="/culture"><a href="#">Culture</a></Link>
                    <div class="submenu">
                        <a href="#">Festival</a>
                        <a href="#">Ethic Groups</a>
                    </div></li>
                <li class="dropdown"><Link ><a href="#">Travel</a></Link>
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
        </div>
    )

}

export default Navbar;