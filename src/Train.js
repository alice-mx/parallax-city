import React, { Component } from 'react';
import './Train.css';

class Train extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style : {
          animationDelay : (Math.random()*15)+"s",
          animationDuration : (Math.random()*5+5)+"s"
        }
      }
  }

  render() {
    return (
      <div className="Train" style ={this.state.style} >
        <div class="carriage"><div class="window"></div></div>
        <div class="carriage"><div class="window"></div><div class="window"></div></div>
        <div class="carriage"><div class="window"></div><div class="window"></div></div>
        <div class="carriage"><div class="window"></div></div>
      </div>
    );
  }
}

export default Train;
