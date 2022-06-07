import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Knowledges from "./Knowledges";

export default function Resume(props){
    return(
        <React.Fragment>
            <div className={"animated-section " + (props.addAnimationClass ? "animate__animated animate__lightSpeedInRight " : "") + (props.activeNavHome ? "active " : "animate__animated animate__lightSpeedOutLeft")}>
                <div className="scroll-section">
                    <h2 className="page-title">Resume</h2>
                    <div className="resume-section">
                        <div className="resume-left">
                            <Experience />
                            <Education />
                        </div>
                        <div className="resume-right">
                            <Skills />
                            <Knowledges />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}