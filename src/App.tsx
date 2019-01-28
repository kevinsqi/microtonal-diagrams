import React, { Component } from "react";
import { saveSvgAsPng } from "save-svg-as-png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Microtonal Diagrams</h1>

        <svg id="diagram" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" />
        </svg>

        <button
          onClick={() => {
            const svg: HTMLElement = document.getElementById("diagram")!;
            saveSvgAsPng(svg, "diagram.png");
          }}
        >
          Download
        </button>
      </div>
    );
  }
}

export default App;
