import React from "react";
import SocialLinks from "./SocialLinks";
import Navigation from "./Navigation";

export default function Header(props){
    return(
            <div className={"header " + (props.menuActive ? "active" : "")}>
                <div className="header-content">
                    <div className="header-photo">
                        <img src={require('../images/ravi.jpg')} alt="Ravi Shankar Kumar" />
                    </div>
                    <div className="header-titles">
                        <h2>{window.RSK.personDetails.name}</h2>
                        <h4>{window.RSK.personDetails.designation}</h4>
                    </div>
                </div>
                <Navigation
                    navigation= {props.navigation}
                    activeNavHome={props.activeNavHome}
                    activeNavAbout={props.activeNavAbout}
                    activeNavPortfolio={props.activeNavPortfolio}
                    activeNavContact={props.activeNavContact}
                />
                <SocialLinks />
                <div className="header-button">
                    <a href="https://bit.ly/raviResume" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download CV</a>
                </div>
            </div>
    )
}