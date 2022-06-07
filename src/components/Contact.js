import React from "react";

export default function Contact(props){
    return(
        <React.Fragment>
            <div className={"animated-section " + (props.activeNavContact ? "active animate__animated animate__lightSpeedInRight" : "animate__animated animate__lightSpeedOutLeft")}>
                <div className="scroll-section">
                    <h2 className="page-title">Contact</h2>
                    <h3>Coming soon</h3>
                </div>
            </div>
        </React.Fragment>
    )
}