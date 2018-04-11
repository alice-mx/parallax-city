import React, {Component} from 'react';
import "./Building.css";



class Building extends Component {


  constructor(props) {
    super(props);

    this.state = {
      windows : this.drawWindows(),
      color   : ["color1","color2","color3","color4"][parseInt(Math.random()*3)],
      width   : ["wide", "skinny"][parseInt(Math.random()*2)],
      density : ["connected","dense", "sparse"][parseInt(Math.random()*3)]
    }
  }



  selectRandom(array) {
    return array[parseInt(Math.random()*array.length)];
  }

  drawWindows() {
      var windows = []

      var height = ["tall", "short"][parseInt(Math.random()*2)];


      var windowSeed = parseInt(Math.random()*4);
      var width = ["skinny", "mediumWidth", "wide", "veryWide"][windowSeed];



      var windowStyle = this.selectRandom(this.props.type.windowStyles);
      var numberOfWindows = Math.random()*this.props.type.numberOfWindows+30;




      for(var i = 0; i < numberOfWindows; i++) {
        if(Math.random() < 0.3) {
          var window ={};
          var isBlank = (Math.random() > 0.9 ? "blank" : "");
          window.transition = "all linear 0s "+Math.random()*4+2+"s";
          windows.push(<div className={`window ${windowStyle} ${isBlank}`} style={window}></div>);
        }
      }
      return windows;


  }







  render() {


    return <div className={`Building  ${this.state.density}   ${this.props.type.className}`}>
      <div class={`body ${this.state.color}`}>
        {this.state.windows}
      </div>
    </div>;
  }
}

export default Building;
