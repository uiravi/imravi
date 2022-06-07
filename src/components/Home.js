import React from "react";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home(props){
    return(
        <React.Fragment>
            <div className="content-area">
                <div className="animated-sections">
                    <Resume 
                        activeNavHome={props.activeNavHome}
                        addAnimationClass={props.addAnimationClass}
                    />
                    <AboutMe 
                        activeNavAbout={props.activeNavAbout}
                    />
                    <Portfolio
                        activeNavPortfolio={props.activeNavPortfolio}
                    />
                    <Contact 
                        activeNavContact={props.activeNavContact}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}