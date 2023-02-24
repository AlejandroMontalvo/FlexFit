import React from "react";

class RepetitionExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((previousAmount) => ({
      count: previousAmount.count + 1,
    }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h2>{name}</h2>
        <p>Repetitions: {count}</p>
        <button onClick={this.handleIncrement}>Complete Rep</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default RepetitionExercise;
