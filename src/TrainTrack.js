import React, {Component} from 'react';
import "./Layer.css";
import Layer from "./Layer.js";

import Train from "./Train.js";

class TrainTrack extends Layer {
  statics = {
    LAYER_HEIGHT: 240
  }



  constructor(props) {
    super(props);
  }

  render() {


    return  <div className="TrainTrack" >
              <div className="ground" style={this.getGroundStyle()}>
                <Train/>
              </div>
            </div>
  }
}

export default TrainTrack;
