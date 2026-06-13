import React from 'react';
import Title from "../Components/Title";
import Skills from "../Components/Skills";
import ImageSection from "../Components/ImageSection";
import resume from "../Downloads/Benjamin_Jordan_Resume_2026.pdf";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'Ben Jordan'} progress={25}/>
            <ImageSection />
            <Title title={'CV'} progress={50}/>
            <a className="download-link" style={{color: "var(--font-color2)"}} href={resume} download>
                <button className="btn">Download</button>
            </a>
        </div>
    );
}

export default AboutPage;
