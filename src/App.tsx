import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Microtonal Diagrams</h1>

        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
    );
  }
}

export default App;
