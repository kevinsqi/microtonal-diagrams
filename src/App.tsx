import React, { Component } from "react";
import "./App.css";
import ScaleDiagram from "./ScaleDiagram";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Microtone Scale Diagrams</h1>
        <div style={{ background: "#555" }}>
          <ScaleDiagram count={12} color="white" radius={4} separation={20} />
          <ScaleDiagram count={24} color="white" radius={5} separation={10} />
        </div>
      </div>
    );
  }
}

export default App;
