import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="wrapper">
        <h1 id="title">Pomodoro Clock</h1>

        <div id="break-label" class="section-label">
          Break Length
        </div>

        <div id="break-buttons">
          <button>Down</button>
          <label for="break">21</label>
          <button>Up</button>
        </div>

        <div id="session-label" class="section-label">
          Session Length
        </div>

        <div id="session-buttons">
          <button>Down</button>
          <label for="session">20</label>
          <button>Up</button>
        </div>

        <div id="session" class="section-label">
          session<br></br>
          clock
        </div>
      </div>
    );
  }
}
