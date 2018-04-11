import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button.js';
import Layer from './Layer.js';
import s from './App.css';
import Buildings from './Buildings.js';
import TrainTrack from './TrainTrack.js';
import Cloud from './Cloud.js';
import Bird from './Bird.js';


class App extends Component {

  constructor(props) {
  super(props);

  this.handleScroll = this.handleScroll.bind(this)
  this.state = {
    position: 0,
    counter: 1,
    isDay : true,
    stars: this.drawStars()
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  clicker() {
    this.setState({counter : this.state.counter+1});
  }

  handleScroll() {
    var winHeight = window.innerHeight;
    var html = document.documentElement;
    var body = document.body;
    var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
                     html.clientHeight, html.scrollHeight, html.offsetHeight );
     var value = document.body.scrollTop;
     this.setState({position: html.scrollTop});
  }

  toggleDay() {
    this.setState({isDay : !this.state.isDay});
  }

  drawStars() {
    var stars= [];
    for(var i = 0; i < 100; i++) {
      var size = parseInt(Math.random()*5,10);
      var styles = {
        top: Math.random()*50+50+"%",
        left: Math.random()*100+"%",
        width: size,
        height: size,
        transition: "all linear 0.2s "+(2+Math.random()*3)+"s"
      };
      stars.push(
        <svg className="star" style={styles}>
          <circle cx="4" cy="4"  r="2" fill="white" />
        </svg>
      );
    }
    return stars;
  }

    shadeOf(red, green, blue, shadow) {
      return this.rgb(red+shadow, green+shadow, blue+shadow);
    }

    rgb(red, green, blue) {
      return "rgb("+red+","+green+","+blue+")";
    }
  render() {
    return (
      <div className={`App ${this.state.isDay ? "day" : "night"}`} onClick={this.toggleDay.bind(this)}>
        <div className="sky">
          <div class="orbit">
            <div className="sun"  ></div>
            <div className="moon"  ></div>
            {this.state.stars}
          </div>
          <Cloud/><Cloud/><Cloud/><Cloud/><Cloud/><Cloud/>

        </div>
        <Buildings position={this.state.position}   layer = "1"/>

        <TrainTrack position={this.state.position}  layer = "2"/>
        <Buildings position={this.state.position}   layer = "2"/>

        <Buildings position={this.state.position}   layer = "3"/>
        <Buildings position={this.state.position}   layer = "4"/>

        <TrainTrack position={this.state.position}  layer = "5"/>
      </div>
    );
  }
}

export default App;
