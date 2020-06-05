import React from "react";

export default function Portfolio(props){
    return(
        <React.Fragment>
            <div className={"animated-section " + (props.activeNavPortfolio ? "active animate__animated animate__backInDown" : "")}>
                <div className="scroll-section">
                    <h2 className="page-title">Portfolio</h2>
                    
                </div>
            </div>
        </React.Fragment>
    )
}