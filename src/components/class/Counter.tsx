import React from "react";

interface CounterProps {
  message: string;
}

interface CounterState {
  count: number;
}

class Counter2 extends React.Component<CounterProps, CounterState> {
  state = { count: 0 };
  handleInc = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  handleDec = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  render() {
    return (
      <div>
        <h2>
          {this.props.message} {this.state.count}
        </h2>
        <button onClick={() => this.handleInc()}>Increment</button>
        <button onClick={() => this.handleDec()}>Decrement</button>
      </div>
    );
  }
}

export default Counter2;
