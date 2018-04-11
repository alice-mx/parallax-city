import React, {Component} from 'react';
import "./Layer.css";
import Layer from "./Layer.js";
import Building from "./Building.js";

class Buildings extends Layer {
  statics = {
    LAYER_HEIGHT: 240
  }





  constructor(props) {
    super(props);
    var buildingTypes = [
      {
        className: "shop",
        numberOfWindows: 40,
        windowStyles: ["small", "medium", "skinny"]
      },
      {
        className: "office",
        numberOfWindows: 100,
        windowStyles: ["small", "wide"]
      },
      {
        className: "skyscraper",
        numberOfWindows: 200,
        windowStyles: ["small", "wide"]
      }
    ]

    var buildings = [];
    var numberOfBuildings = Math.random()*10;

    buildings.push(<Building type={buildingTypes[0]}/>);
    buildings.push(<Building type={buildingTypes[0]}/>);


    for(var i = 0; i < numberOfBuildings; i++) {
      buildings.push(<Building type={buildingTypes[parseInt(Math.random()*3)]}/>);
    }
    buildings.push(<Building type={buildingTypes[0]}/>);
    buildings.push(<Building type={buildingTypes[0]}/>);

    this.state = {
        buildings: buildings
    }
  }

  render() {




    return  <div className="Layer" >
              <div className="collection" style={this.getRowStyle()}>
                {this.state.buildings}
              </div>
              <div className="ground" style={this.getGroundStyle()}>
              </div>
            </div>
  }
}

export default Buildings;
