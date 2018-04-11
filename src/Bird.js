import React, {Component} from 'react';

class Bird extends Component {
  constructor(props) {
    super(props);
    this.state = { tick: 0 };
  }

  tick() {
    this.setState(prevState => ({
      tick: prevState.tick + 1
    }));
  }


  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    var frame = (this.state.tick % 12);
    var wingPosition = (frame < 6 ? frame * 2 : 12-(frame-6)*2);

    if(this.state.tick % 48 < 12) {
      wingPosition = 0;
    }

    return (

      <div class="Bird">
        <svg height="12" width="20">
          <polygon points={`0,${wingPosition} 10,4 20,${wingPosition} 10, 10`} />
        </svg>
      </div>
    );

  }
}

export default Bird;
