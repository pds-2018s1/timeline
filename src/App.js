import React, { Component } from "react";
import Game from "./containers/Game";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Game />
        </div>
      </div>
    );
  }
}
