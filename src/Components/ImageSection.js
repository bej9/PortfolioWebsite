import React from 'react';
import resume from "../Downloads/Benjamin_Jordan_Resume_2025.pdf";
import profilePic from "../Images/IMG_0426.JPEG"

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="image-content">
                <div className="about-info">
                    <p className="about-text">
                        <span>I am an engineer at Amazon and a graduate of Cornell & RIT CS.</span>
                        <br/><br/>
                        In my current role, I build ML infrastructure and large-scale Spark ETL pipelines
                        to support production ML systems. My team's MLOps framework based on AWS SageMaker
                        became a template used for multiple other ML projects throughout the org.
                        <br/><br/>
                        Previously I worked as an MLE at Northrop Grumman and as an MLE intern at KLA, focusing on deep computer vision applications as well as information retrieval.
                        <br/><br/>
                        Outside of work, I'm building Entropy Audio, which aims to redefine how we design sound.
                        I am training and aligning diffusion models for professional sound design.
                        I also enjoy architecture, trying new food, and keeping up with research on diffusion models and similar topics.
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
