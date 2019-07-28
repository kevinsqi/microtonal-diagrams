import React, { Component } from "react";
import { saveAs } from "file-saver";
import { saveSvgAsPng } from "save-svg-as-png";
import "./App.css";
import TuningDiagram from "./TuningDiagram";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Microtonal Diagrams</h1>
        <div style={{ background: "#555" }}>
          <TuningDiagram count={12} color="white" radius={4} separation={20} />
          <TuningDiagram count={24} color="white" radius={5} separation={10} />
        </div>
      </div>
    );
  }
}

export default App;
