import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleReset = () => {
    const counters = this.state.counters.filter((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
        />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
