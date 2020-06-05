import React from "react";

export default function AboutMe(props){
    return(
        <React.Fragment>
            <div className={"animated-section " + (props.activeNavAbout ? "active animate__animated animate__backInDown" : "")}>
                <div className="scroll-section">
                    <h2 className="page-title">About <span>Me</span></h2>
                    
                </div>
            </div>
        </React.Fragment>
    )
}