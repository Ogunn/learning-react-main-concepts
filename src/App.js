import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginControl from "./components/RenderizaçãoCondicional/LoginControl";
import Mailbox from "./components/RenderizaçãoCondicional/Mailbox";
import Timer from "./components/RenderizaçãoCondicional/Timer";
import Toggle from "./components/ManipulandoEventos/Toggle";
import Page from "./components/RenderizaçãoCondicional/Page";
import NumberList from "./components/Listas&Chaves/NumberList";
import NumberListv2 from "./components/Listas&Chaves/NumberListv2";

class App extends Component {
  render() {
    const messages = ["React", "Re: React", "Re: Re: React"];
    const numbers = [1, 2, 3, 4, 5];
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
          <NumberList numbers={numbers} />
          <Page />
          <Toggle />
          <Timer />
          <LoginControl />
          <Mailbox unreadMessages={messages} />
          <NumberListv2 numbers={numbers} />
        </main>
      </div>
    );
  }
}

export default App;
