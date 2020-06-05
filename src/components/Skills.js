import React from "react";
export default function Skils(){
    return(
        <div className="slills-wrapper">
            <h3 className="resume-title">Development <span>Skills</span></h3>
            <div className="skills">
                <div className="skill-title">JavaScript <span>95%</span></div>
                <div className="skill-bar"><span className="skill-fill-bar" style={{width: "95%"}}></span></div>
            </div>
            <div className="skills">
                <div className="skill-title">React JS <span>85%</span></div>
                <div className="skill-bar"><span className="skill-fill-bar" style={{width: "85%"}}></span></div>
            </div>
            <div className="skills">
                <div className="skill-title">HTML <span>99%</span></div>
                <div className="skill-bar"><span className="skill-fill-bar" style={{width: "99%"}}></span></div>
            </div>
            <div className="skills">
                <div className="skill-title">CSS <span>99%</span></div>
                <div className="skill-bar"><span className="skill-fill-bar" style={{width: "99%"}}></span></div>
            </div>
            <div className="skills">
                <div className="skill-title">Sass <span>95%</span></div>
                <div className="skill-bar"><span className="skill-fill-bar" style={{width: "95%"}}></span></div>
            </div>
            <div className="skills">
                <div className="skill-title">jQuery <span>80%</span></div>
                <div className="skill-bar"><span className="skill-fill-bar" style={{width: "80%"}}></span></div>
            </div>
            <div className="skills">
                <div className="skill-title">Bootstrap <span>90%</span></div>
                <div className="skill-bar"><span className="skill-fill-bar" style={{width: "90%"}}></span></div>
            </div>
        </div>
    )
}