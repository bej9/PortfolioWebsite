import React from 'react';
import avatar from '../Images/newsmaller.jpg';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                {/* Header removed; icons moved below nav items */}

                <div className="nav-center">
                    <ul className="nav-items">
                        <lin className="nav-item">
                            <NavLink to="/" exact activeClassName="active">
                                Home
                            </NavLink>
                        </lin>
                        {/*<lin className="nav-item">*/}
                        {/*    <NavLink to="/About" exact activeClassName="active">*/}
                        {/*        About*/}
                        {/*    </NavLink>*/}
                        {/*</lin>*/}
                        <lin className="nav-item">
                            <NavLink to="/Projects" exact activeClassName="active">
                                Personal Project
                            </NavLink>
                        </lin>
                        <lin className="nav-item">
                            <NavLink to="/Contact" exact activeClassName="active">
                                Contact
                            </NavLink>
                        </lin>
                    </ul>
                    <div className="icons">
                        <a target = "_blank" href = "https://github.com/EntropyAudio" className="icon-link">
                            <FontAwesomeIcon icon = {faGithub} className="icon"/>
                        </a>
                        <a target = "_blank"  href = "https://www.linkedin.com/in/ben-jordan-b745a0194/" className="icon-link">
                            <FontAwesomeIcon icon = {faLinkedin} className="icon"/>
                        </a>
                    </div>
                </div>
                {/*<div className="footer footer">*/}
                {/*</div>*/}
                <div className="footer footer">
                    <p>
                        @2026 Ben Jordan
                    </p>
                </div>

            </nav>
        </div>
    )
}

export default NavBar;
