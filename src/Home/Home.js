import React from "react"
import "./Home.css"
import Kath from "../Assets/kath.jpg"
import Sigal from "../Assets/sigal.jpg"


function Home(){
    return(
        <div >
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
                <div className="body-intro">
                <div className="intro">
                    <h1>Introduction</h1>
                    <span class="line"></span>
                    <p>/ˌkætmænˈduː/<br /> Nepali: काठमाडौँ, Nepali pronunciation: [ˈkaʈʰmaɳɖu] <br /> The capital and largest city of Nepal, with a population of around 1 million.<br />
                     Also known as the city of temples, the city stands at an elevation of approximately 1,400 metres (4,600 feet)<br /> Above sea level in the bowl-shaped Kathmandu valley in central Nepal.</p>
                     <img className="sigal"src={Sigal}></img>
                </div>
                <div>
                <img className="Kath" src={Kath}></img>
                <span className="Kathmandu">"The valley was historically called the "Nepal Mandala" and has been the home of the Newar people,<br /> a cosmopolitan urban civilization in the Himalayan foothills."</span>
                </div>
                </div>
                </div>
               
    )
}

export default Home;
