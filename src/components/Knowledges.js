import React from "react";
export default function Knowledges(){
    const skills = window.RSK.skills;
    return(
        <div className="knowledges-wrapper">
            <h3 className="page-sub-title">Knowledges</h3>
            <ul className="knowledges">
                {
                    Object.keys(skills).map((skill, i) =>
                        <li key={i}>{skills[skill].name}</li>
                    )
                }
            </ul>
        </div>
    )
}