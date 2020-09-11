import React from "react"
import "./Culture.css"
import Bhairab from "../Assets/bhairab.jpg"
import Dashai from "../Assets/dashai.jpg"
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
                <p>Nepal was declared a secular country by the Parliament on 18th May 2006. Religions practiced in Nepal are: Hinduism, Buddhism, Islam, Christianity, Jainism, Sikhism, Bon, ancestor worship and animism. The majority of Nepalis are either Hindus or Buddhists and these two religions have co-existed in harmony through centuries.</p>
                <img className="dashai" src={Dashai}></img>
        </div>
        <div>
            <img className="Bhairab" src={Bhairab}></img>
            <span className="kumari-info"><p>"Regarded as a Living Goddess,<br /> a young Newar girl with no blemishes is chosen to represent the Goddess Kumari as an incarnation of Goddess Taleju, <br/> the tutelary deity of the Malla dynasty and the Shah dynasty.<br/> Newars are the original inhabitants of Kathmandu valley and have the most elaborate religious festivals." </p></span>
        </div>
        </div>
    )
}

export default Culture;