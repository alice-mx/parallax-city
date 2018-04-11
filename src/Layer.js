import React, {Component} from 'react';
import "./Layer.css";
import Building from "./Building.js";
import Train from "./Train.js";

class Layer extends Component {
  statics = {
    LAYER_HEIGHT: 240
  }


  getParalaxOffset()  {
    return parseInt(this.props.position/50*this.props.layer*2,10);
  }

  getGroundStyle() {
     return {
          bottom : this.getParalaxOffset()-this.statics.LAYER_HEIGHT+100-this.props.layer*10,
          transform : "scale("+(0.7+this.props.layer/10)+")",

          filter: "saturate("+(1.5-this.props.layer/10)+")"
        };
  }

  getRowStyle() {
    return {
      bottom: this.getParalaxOffset()+100-this.props.layer*10,
      filter: "brightness("+(1.5-this.props.layer/10)+")",
      transform: "scale("+(0.3+this.props.layer/5)+")"
    }
  }

}

export default Layer;
