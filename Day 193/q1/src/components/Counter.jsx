import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state here
    this.state = {
      count: 0,
      showCount: true,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>Count: {this.state.count}</div>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
