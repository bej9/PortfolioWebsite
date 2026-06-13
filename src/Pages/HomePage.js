import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function HomePage()
{
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm
                    <span> Ben Jordan.</span>
                </h1>

                <div className="icons">
                    <a target = "_blank" href = "https://github.com/bej9" className="icon-link">
                    <FontAwesomeIcon icon = {faGithub} className="icon"/>
                </a>
                <a target = "_blank"  href = "https://www.linkedin.com/in/ben-jordan-b745a0194/" className="icon-link">
                        <FontAwesomeIcon icon = {faLinkedin} className="icon"/>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default HomePage
