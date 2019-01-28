import React, { Component } from "react";
import { saveAs } from "file-saver";
import range from "lodash.range";
import "./App.css";

function TuningDiagram(props: { count: number }) {
  const radius = 5;
  const diameter = radius * 2;
  const height = diameter;
  const width = props.count * diameter;
  return (
    <div>
      <svg
        id="diagram"
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {range(props.count).map(idx => {
          return <circle cx={diameter * idx + radius} cy={radius} r={radius} />;
        })}
        {range(props.count - 1).map(idx => {
          const x1 = radius * 2 * idx + radius;
          return (
            <line
              x1={x1}
              y1={radius}
              x2={x1 + diameter}
              y2={radius}
              stroke="white"
            />
          );
        })}
      </svg>

      <button
        className="btn btn-secondary"
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

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Microtonal Diagrams</h1>
        <TuningDiagram count={12} />
      </div>
    );
  }
}

export default App;
