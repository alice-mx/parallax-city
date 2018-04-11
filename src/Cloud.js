import React, {Component} from 'react';

class Cloud extends Component {

  constructor(props) {

    super(props);
    var plumes = [];
    var width = 0;
    for(var i = 0; i < 3; i++) {
      var r = parseInt(20+Math.random()*i*20);
      width +=r;
      var cx = parseInt(63 + width);
      var cy = parseInt(200-r);
      plumes.push(<circle cx={cx} cy={cy} r={r}/>);
    }

    for(var i = 3; i >= 0; i--) {
      var r = parseInt(20+Math.random()*i*20);
      width +=r;
      var cx = parseInt(63 + width);
      var cy = parseInt(200-r);
      plumes.push(<circle cx={cx} cy={cy} r={r}/>);
    }

    this.state = {
      plumes: plumes,
      style: {
        left : Math.random()*100+"%",
        top   : (10+ Math.random()*50)+"%",
        transform : "scale("+Math.random()+0.5+")",
        animationDuration:  (60+Math.random()*400)+"s",
        animationDelay : "-"+(Math.random()*400)+"s"
      }
    }
  }

  render() {

    return <div class="Cloud" style={this.state.style}>
      <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
       <g>
        {this.state.plumes}
       </g>
      </svg>
    </div>
  }
}

export default Cloud;
