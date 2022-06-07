import React, { PureComponent } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeNavHome: true,
      activeNavAbout: false,
      activeNavPortfolio: false,
      activeNavContact: false,
      menuActive:false,
      menuToggle:false,
      addAnimationClass: false
    };
  }

  navigation = (event) => {
    let ids = event.currentTarget.dataset.id;
    if(ids === "home"){
      this.setState({activeNavHome: true, activeNavAbout: false, activeNavPortfolio: false, activeNavContact: false, addAnimationClass: true});
    }
    if(ids === "about"){
      this.setState({activeNavHome: false, activeNavAbout: true, activeNavPortfolio: false, activeNavContact: false, addAnimationClass: false});
    }
    if(ids === "portfolio"){
      this.setState({activeNavHome: false, activeNavAbout: false, activeNavPortfolio: true, activeNavContact: false, addAnimationClass: false});
    }
    if(ids === "contact"){
      this.setState({activeNavHome: false, activeNavAbout: false, activeNavPortfolio: false, activeNavContact: true, addAnimationClass: false});
    }
    this.setState({menuActive:false, menuToggle:false});
  }

  manuToggle = (event) => {
    let isActive = event.currentTarget.classList.contains("active");

        if(isActive){
            this.setState({menuActive:false, menuToggle:false});
        }else{
          this.setState({menuActive:true, menuToggle:true});
        }
  }

  render(){
    return (
      <React.Fragment>
          <section className="main-container">
              <section className="container">
                  <div className={"menu-toggle " + (this.state.menuToggle ? "active" : "")} onClick={this.manuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <Header
                    navigation={this.navigation}
                    menuActive={this.state.menuActive}
                    activeNavHome={this.state.activeNavHome}
                    activeNavAbout={this.state.activeNavAbout}
                    activeNavPortfolio={this.state.activeNavPortfolio}
                    activeNavContact={this.state.activeNavContact}
                  />
                  <Home
                    activeNavHome={this.state.activeNavHome}
                    activeNavAbout={this.state.activeNavAbout}
                    activeNavPortfolio={this.state.activeNavPortfolio}
                    activeNavContact={this.state.activeNavContact}
                    addAnimationClass={this.state.addAnimationClass}
                  />
              </section>
              
          </section>
      
      </React.Fragment>
    );
  }
}