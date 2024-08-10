import React from 'react';

export default class ClassButton extends React.Component {
  constructor(props) {
    super(props);
    // Define your state object here
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>You clicked {this.state.count}</button>
    );
  }
}
