import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginControl from "./components/renderizacaoCondicional/LoginControl";
import Mailbox from "./components/renderizacaoCondicional/Mailbox";
import Timer from "./components/renderizacaoCondicional/Timer";
import Toggle from "./components/manipulandoEventos/Toggle";
import Page from "./components/renderizacaoCondicional/Page";
import NumberList from "./components/listasEChaves/NumberList";
import NumberListv2 from "./components/listasEChaves/NumberListv2";
import Blog from "./components/listasEChaves/Blog";
import Calculator from "./components/elevandoOState/Calculator";

class App extends Component {
  render() {
    const messages = ["React", "Re: React", "Re: Re: React"];
    const numbers = [1, 2, 3, 4, 5];
    // const messages = [];

    // Para uso do component <Blog />
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learngin React!" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm."
      }
    ];

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
          <Calculator />
          <Blog posts={posts} />
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
