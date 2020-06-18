import React from "react";
export default function Skils(){
    const skills = window.RSK.skills;
    return(
        <div className="slills-wrapper">
            <h3 className="page-sub-title">Development <span>Skills</span></h3>
            {
                Object.keys(skills).map((skill, i) =>
                    <div className="skills" key={i}>
                        <div className="skill-title">{skills[skill].name} <span>{skills[skill].value}</span></div>
                        <div className="skill-bar"><span className="skill-fill-bar" style={{width: skills[skill].value}}></span></div>
                    </div>
                )
            }
        </div>
    )
}