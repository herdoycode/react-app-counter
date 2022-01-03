import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onDecrement, onIncrement, onDelete, id, counter } = this.props;
    return (
      <div>
        <div
          style={{
            width: "100px",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <span className={this.badgeClasses()}> {this.countValue()} </span>
        </div>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          <i className="fa fa-plus"></i>
        </button>
        <button
          onClick={() => onDecrement(counter)}
          disabled={counter.value === 0 ? "disabled" : ""}
          className="btn btn-secondary btn-sm m-2"
        >
          <i className="fa fa-minus"></i>
        </button>
        <button
          onClick={() => onDelete(id)}
          className="btn btn-sm btn-danger m-3"
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
  countValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  badgeClasses() {
    const { value } = this.props.counter;
    let classes = "badge m-3 bg-";
    return (classes += value === 0 ? "warning" : "primary");
  }
}

export default Counter;
