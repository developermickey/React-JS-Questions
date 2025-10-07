import React, { PureComponent } from "react";

class PureCounter extends PureComponent {
  constructor(props) {
    super(props);
    // Initialize state here
    this.state = {
      counter: 0,
      showCounter: true,
    };
  }

  // Implement the handleClick method to handle button clicks
  handleClick = () => {
    // Update the counter state by 1 without mutating the state directly
    // Hint: Use this.setState method to update the state immutably
    // Your code here
    this.setState((preState) => ({
      counter: preState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Pure Counter</h2>
        <p>Count: {this.state.counter}</p>
        {/* Implement the button component to trigger the handleClick method */}
        {/* Your code here */}
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

export default PureCounter;
