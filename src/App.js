import React, { PureComponent } from 'react';
import AnimatedBack from "./components/AnimatedBack";

export default class App extends PureComponent {
  render(){
    return (
      <React.Fragment>
          <AnimatedBack />
          <div>Hello World</div>
      
      </React.Fragment>
    );
  }
}