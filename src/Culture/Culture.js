import React from "react"
import "./Culture.css"
import Bhairab from "../Assets/bhairab.jpg"
function Culture() {
    return(
        <div className="body">
        <div className="topic">
                <h1>Culture</h1>
                <span class="lines"></span>
                {/* <ul class="lists">
                    <li><a className="list-content">Festival</a></li>
                    <li><a className="list-content">Ethic Groups</a></li>
                </ul> */}
        </div>
        <div>
            <img className="Bhairab" src={Bhairab}></img>
            <span className="kumari-info"><p>"Regarded as a Living Goddess,<br /> a young Newar girl with no blemishes is chosen to represent the Goddess Kumari as an incarnation of Goddess Taleju, <br/> the tutelary deity of the Malla dynasty and the Shah dynasty.<br/> Newars are the original inhabitants of Kathmandu valley and have the most elaborate religious festivals." </p></span>
        </div>
        </div>
    )
}

export default Culture;