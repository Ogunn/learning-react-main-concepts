import React, { Component } from "react";

class Timer extends Component {
  state = { seconds: 0 };

  tick = () => {
    this.setState({ seconds: this.state.seconds + 1 });
  };

  componentDidMount = () => {
    this.interval = setInterval(() => this.tick(), 1000);
  };

  componentWillMount = () => {
    clearInterval(this.interval);
  };

  render() {
    return <div>Segundos: {this.state.seconds}</div>;
  }
}

export default Timer;
