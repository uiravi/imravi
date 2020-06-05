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
      activeNavContact: false
    };
  }

  navigation = (event) => {
    if(event.currentTarget.className == "nav-home"){
      this.setState({activeNavHome: true, activeNavAbout: false, activeNavPortfolio: false, activeNavContact: false});
    }
    if(event.currentTarget.className == "nav-about"){
      this.setState({activeNavHome: false, activeNavAbout: true, activeNavPortfolio: false, activeNavContact: false});
    }
    if(event.currentTarget.className == "nav-portfolio"){
      this.setState({activeNavHome: false, activeNavAbout: false, activeNavPortfolio: true, activeNavContact: false});
    }
    if(event.currentTarget.className == "nav-contact"){
      this.setState({activeNavHome: false, activeNavAbout: false, activeNavPortfolio: false, activeNavContact: true});
    }
  }  

  render(){
    return (
      <React.Fragment>
          <section className="main-container">
              <section className="container">
                  <div className="menu-toggle">
                    <span></span>
                  </div>
                  <Header
                    navigation={this.navigation}
                  />
                  <Home
                    activeNavHome={this.state.activeNavHome}
                    activeNavAbout={this.state.activeNavAbout}
                    activeNavPortfolio={this.state.activeNavPortfolio}
                    activeNavContact={this.state.activeNavContact}
                  />
              </section>
              
          </section>
      
      </React.Fragment>
    );
  }
}