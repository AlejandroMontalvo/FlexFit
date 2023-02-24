import React from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: null,
    };
  }

  handleExerciseClick = (exercise) => {
    this.setState({ exercise });
  };

  handleExerciseReset = () => {
    this.setState({ exercise: null });
  };

  render() {
    const { exercise } = this.state;

    if (exercise) {
      const { name, type } = exercise;
      let exerciseComponent = null;
      if (type === "repetition") {
        exerciseComponent = <RepetitionExercise name={name} />;
      } else if (type === "duration") {
        exerciseComponent = <DurationExercise name={name} />;
      } else if (type === "running") {
        exerciseComponent = <RunningExercise name={name} />;
      }
      return (
        <div>
          <button onClick={this.handleExerciseReset}>Return</button>
          {exerciseComponent}
        </div>
      );
    }

    return (
      <div>
        <h1>Go Do Something!</h1>
        <p>Select an Exercise:</p>
        <ul>
          <button
            onClick={() =>
              this.handleExerciseClick({ name: "Push Ups", type: "repetition" })
            }
          >
            Push Ups
          </button>
          <br></br>
          <button
            onClick={() =>
              this.handleExerciseClick({
                name: "Bycicling",
                type: "duration",
              })
            }
          >
            Bycicling
          </button>
          <br></br>
          <button
            onClick={() =>
              this.handleExerciseClick({
                name: "Jumping Jacks",
                type: "duration",
              })
            }
          >
            Jumping Jacks
          </button>
          <br></br>
          <button
            onClick={() =>
              this.handleExerciseClick({
                name: "Running",
                type: "duration",
              })
            }
          >
            Running
          </button>
          <br></br>
          <button
            onClick={() =>
              this.handleExerciseClick({
                name: "Sit Ups",
                type: "repetition",
              })
            }
          >
            Sit Ups
          </button>
          <br></br>
          <button
            onClick={() =>
              this.handleExerciseClick({
                name: "Running Laps",
                type: "running",
              })
            }
          >
            Running Laps
          </button>
        </ul>
      </div>
    );
  }
}

export default App;
