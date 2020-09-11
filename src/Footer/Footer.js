import React from "react"
import "./footer.css"
import Link from "react-router-dom"

function Footer(){
    return(
        <div className="footer-body">
            <div className="Lgo"><h1>Kathmandu</h1></div>
            <div className="footer-section">
                <div className="food-list"> <a>Food</a>
                <ul>
                    <li><a href="#">Local Restaurant</a></li>
                    <li><a href="#">Chill Places</a></li>
                    <li><a href="#">Fancy Restaurant</a></li>
                </ul>
                </div>
                <div className="food-list"> <a>Culture</a>
                <ul>
                    <li><a href="#">Local Restaurant</a></li>
                    <li><a href="#">Chill Places</a></li>
                    <li><a href="#">Fancy Restaurant</a></li>
                </ul>
                </div>
                <div className="food-list"> <a>Travel</a>
                <ul>
                    <li><a href="#">Local Restaurant</a></li>
                    <li><a href="#">Chill Places</a></li>
                    <li><a href="#">Fancy Restaurant</a></li>
                </ul>
                </div>
                </div>
                <div className="neplive">
                    CopyRight By Neplive Development Team <br />
                </div>
        </div>
    )

}

export default Footer;