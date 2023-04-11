import { Component } from 'react';

export class Clock1 extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Привіт, світе!</h1>
        <del>Зараз {this.state.date.toLocaleTimeString()}.</del>
      </div>
    );
  }
}
