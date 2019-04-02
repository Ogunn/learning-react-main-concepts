import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginControl from "./components/RenderizaçãoCondicional/LoginControl";
import Mailbox from "./components/RenderizaçãoCondicional/Mailbox";
import Timer from "./components/RenderizaçãoCondicional/Timer";
import Toggle from "./components/ManipulandoEventos/Toggle";

class App extends Component {
  render() {
    const messages = ["React", "Re: React", "Re: Re: React"];
    // const messages = [];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <Toggle />
          <Timer />
          <LoginControl />
          <Mailbox unreadMessages={messages} />
        </main>
      </div>
    );
  }
}

export default App;
