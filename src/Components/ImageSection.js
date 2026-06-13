import React from 'react';
import profilePic from "../Images/IMG_0426.JPEG"

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="image-content">
                <div className="about-info">
                    <p className="about-text">
                        <span>
                        I am currently an engineer at Amazon on the Brand Lift team.
                        Previously, I worked on Computer Vision at Northrop Grumman's Autonomous Intelligence and Robotics lab
                        as well as at KLA.</span>
                        <br/><br/>
                        I enjoy keeping up with research related to diffusion & flow models, reinforcement learning, and miscellaneous other topics in ML (and sometimes other STEM fields).
                        <br/><br/>
                        In my free time, I'm working on creating Entropy Audio, a project which aims to redefine how we design sound.
                    </p>
                </div>
                <div className="about-img-wrapper">
                    <img
                        src={profilePic}
                        alt="Benjamin Jordan headshot"
                        className="about-img"
                    />
                </div>
            </div>
            {/*<a className="download-link" style={{color: "var(--font-color2)"}} href={resume} download>*/}
            {/*    <button className="btn">Download CV</button>*/}
            {/*</a>*/}
        </div>
    )
}

export default ImageSection;
