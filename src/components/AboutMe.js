import React from "react";
import Testimonials from "./Testimonials";

export default function AboutMe(props){
    return(
        <div className={"animated-section " + (props.activeNavAbout ? "active animate__animated animate__backInDown" : "")}>
            <div className="scroll-section">
                <h2 className="page-title">About <span>Me</span></h2>
                <p className="about-me-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h3 className="page-sub-title">Testimonials</h3>
                <Testimonials />
                <h3 className="page-sub-title">What <span>I Do</span></h3>
            </div>
        </div>
    )
}