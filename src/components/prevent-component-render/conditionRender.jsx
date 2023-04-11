import { Component } from 'react';

function UserGreeting(props) {
  return <h1>З поверненням!</h1>;
}

function GuestGreeting(props) {
  return <h1>Зареєструйтеся, будь-ласка.</h1>;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Увійти</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Вийти</button>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    //   або публічні властивості класу замість байнд
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="warning">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
