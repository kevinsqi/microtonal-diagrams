import React, { Component } from "react";
import { saveAs } from "file-saver";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Microtonal Diagrams</h1>

        <svg
          id="diagram"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>

        <button
          onClick={() => {
            const svg: HTMLElement = document.getElementById("diagram")!;
            const blob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
            saveAs(blob, "diagram.svg");
          }}
        >
          Download
        </button>
      </div>
    );
  }
}

export default App;
