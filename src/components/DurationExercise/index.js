import React from "react";

class DurationExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null,
      elapsedTime: 0,
      isActive: false,
      timerIntervalId: null,
    };
  }

  startStopwatch = () => {
    if (!this.state.isActive) {
      const startTime = Date.now() - this.state.elapsedTime;
      const timerIntervalId = setInterval(() => {
        const elapsed = Date.now() - startTime;
        this.setState({ elapsedTime: elapsed });
      }, 10);
      this.setState({ isActive: true, timerIntervalId, startTime });
    }
  };

  stopStopwatch = () => {
    if (this.state.isActive) {
      clearInterval(this.state.timerIntervalId);
      this.setState((prevState) => ({
        isActive: false,
        timerIntervalId: null,
        elapsedTime: prevState.elapsedTime,
      }));
    }
  };

  resetStopwatch = () => {
    if (this.state.isActive) {
      this.stopStopwatch();
    }
    this.setState({ elapsedTime: 0 });
  };

  formatTime = (time) => {
    const milliseconds = Math.floor(time % 1000);
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(3, "0")}`;
  };

  render() {
    const { name } = this.props;
    const { elapsedTime, isActive } = this.state;

    return (
      <div>
        <h2>{name}</h2>
        <p>Timer: {this.formatTime(elapsedTime)}</p>
        {!isActive && <button onClick={this.startStopwatch}>Start</button>}
        {isActive && <button onClick={this.stopStopwatch}>Stop</button>}
        <button onClick={this.resetStopwatch}>Reset</button>
      </div>
    );
  }
}

export default DurationExercise;
