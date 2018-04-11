import React, {Component} from 'react';
import "./Office.css";



class Office extends Component {


  drawWindows() {
    var windows = [];
    for(var i  = 0; i < 30; i++) {
      windows.push(<div class="window" ref={i}></div>);
    }
    return windows;
  }

  rgb(red, green, blue) {
    return "rgb("+red+","+green+","+blue+")";
  }



  render() {


    // var buildingStyle = {
    //   backgroundColor : this.rgb(255-(30-this.props.layer*10),
    //                     parseInt(255-60*this.props.position/900,10),
    //                     parseInt(255-106*this.props.position/900,10))
    // };

    return <div className="Office">
      <div class="body">
        {this.drawWindows()}
      </div>
    </div>;
  }
}

export default Office;
