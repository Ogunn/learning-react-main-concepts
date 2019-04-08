import React, { Component } from "react";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  /**
   * Greeting Concerns
   */
  UserGreeting = props => {
    return <h1>Wellcome back!</h1>;
  };

  GuestGreeting = props => {
    return <h1>Please sign up.</h1>;
  };

  Greetring = props => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <this.UserGreeting />;
    }
    return <this.GuestGreeting />;
  };

  /**
   * Login/Logout Concerns
   */
  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  LoginButton = props => {
    return <button onClick={props.onClick}>Login</button>;
  };

  LogoutButton = props => {
    return <button onClick={props.onClick}>Logout</button>;
  };

  /**
   * Render Concerns
   */
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <this.LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <this.LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <this.Greetring isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
