import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-3">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            id={counter.id}
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
