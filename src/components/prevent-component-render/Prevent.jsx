import { Component } from 'react';
import './cond.css';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Попередження!</div>;
}

export class Prevent extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Сховати' : 'Показати'}
        </button>
      </div>
    );
  }
}
