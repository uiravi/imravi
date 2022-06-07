import React from "react";
import Testimonials from "./Testimonials";

export default function AboutMe(props){
    return(
        <div className={"animated-section " + (props.activeNavAbout ? "active animate__animated animate__lightSpeedInRight" : "animate__animated animate__lightSpeedOutLeft")}>
            <div className="scroll-section">
                <h2 className="page-title">About <span>Me</span></h2>
                <div className="about-me-box">
                    <div className="about-me-left">
                        <p className="about-me-text">I am a Front-End Developer. I specialize in creating web pages using front-end technologies like core JavaScript, React, HTML, CSS. I enjoy turning the complex problem into simple. When I am not coding, I love to travel and explore new locations.</p>
                        <p className="about-me-text">When I am not coding, I love to travel and explore new locations.</p>
                    </div>
                    <div className="about-me-right">
                        <p className="about-info"><span>Age:</span> {window.RSK.personDetails.age}</p>
                        <p className="about-info"><span>Residence:</span> {window.RSK.personDetails.residence}</p>
                        <p className="about-info"><span>Email:</span> <a href="mailto:jq.ravi@gmail.com">{window.RSK.personDetails.email}</a></p>
                        <p className="about-info"><span>Linkedin:</span> <a href="https://www.linkedin.com/in/uiravi/" target="_blank">{window.RSK.personDetails.linkedin}</a></p>
                    </div>
                </div>
                
                <h3 className="page-sub-title">Testimonials</h3>
                <Testimonials />
            </div>
        </div>
    )
}